const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require ('node-fetch') ; 

const isValidPath = (route) => fs.existsSync(route);

const isAbsolutePath = (route) => path.isAbsolute(route);

const converterRelativeToAbsolutePath = (route) => path.resolve(route);

const isDirectoryPath = (route) => fs.lstatSync(route).isDirectory();

const routeExtension = (route) => (path.extname(route));

/* Recibe una ruta recorre los elementos que encuentre y devuelve un nuevo array 
con el nombre del archivo mas la ruta */
const readDirectoryPath = (route) => {
  const arrFiles = fs.readdirSync(route);
  return arrFiles.map(file => {
    return path.join(route, file);
  })
};

/* Recibe una ruta y si no se trata de un directorio lo agrega al array que retorna,
de los contrario lee el directorio recorre los elementos pasandolos por la funcion misma
(recursión) y retorna todas las rutas con extension md encontradas */
const findMdFiles = (route) => {
  let arrFilesMD = [];
  if (!isDirectoryPath(route)){
    if (routeExtension(route) === '.md'){
    arrFilesMD.push(route)
    }
  } else {
      readDirectoryPath(route).forEach((file) =>{
      const fileRoute = file;
      const completeRoute = findMdFiles(fileRoute)
      arrFilesMD = arrFilesMD.concat(completeRoute);
    });
  }
  return arrFilesMD;  
};

const readFilePath = (route) => {
  return fs.readFileSync(route, 'utf-8');
};

/* */
const extractLinks = (route) => {
  if (!isValidPath(route)) {
    return error;
  } else {
    if (!isAbsolutePath(route)) {
      const newRouteAbsolute = converterRelativeToAbsolutePath(route);
      let arrLinks = [];
      const renderer = new marked.Renderer();
      findMdFiles(newRouteAbsolute).forEach((file) => {
        renderer.link = (href, title, text) => {
          const propLink = {
            href,
            text,
            file
          };
          arrLinks.push(propLink);
        };
        marked(readFilePath(file), { renderer });
      });
      return arrLinks; 
    }
  }  
};

const validateLinks = (route) => {
  let newPropertiesOfLinks = [];
  const routeLinks = extractLinks(route);
  routeLinks.forEach((element) => {
    newPropertiesOfLinks.push(fetch(element.href)
    .then((res) => {
      const newElement = {
        href: element.href,
        text: element.text.substring(0, 50),
        file: element.file,          
        status: res.status,
        statusText: res.statusText
      };
      return newElement;
    })
    .catch(error => console.error(error)));
  });
  return Promise.all(newPropertiesOfLinks);
};

module.exports = {
  isValidPath,
  isAbsolutePath,
  converterRelativeToAbsolutePath,
  isDirectoryPath,
  routeExtension,
  readDirectoryPath,
  readFilePath,
  findMdFiles,
  extractLinks,
  validateLinks
};
