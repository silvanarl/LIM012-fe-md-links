const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require ('node-fetch') ; 
const http = require('http');

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
  let arrMD = [];
  if (!isDirectoryPath(route)){
    if (routeExtension(route) === '.md'){
    arrMD.push(route)
    }
  } else {
      readDirectoryPath(route).forEach((file) =>{
      const fileRoute = file;
      const completeRoute = findMdFiles(fileRoute)
      arrMD = arrMD.concat(completeRoute);
    });
  }
  return arrMD;  
};

/* Lee un archivo */
const readFilePath = (route) => {
  return fs.readFileSync(route, 'utf-8');
};

/* */
const extractLinks = (route) => {
  let arrLinks = [];
  const renderer = new marked.Renderer();
  findMdFiles(route).forEach((file) => {
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
};
//console.log(extractLinks('./test/example/sample_text.md'));

/*Validar url*/ 
// let promesa = fetch('https://nodejs/api');
// promesa.then(res => console.log('la respuesta es:', res.status)) // res.ok =>return boolean // res.statusText => status
// .catch(error => console.log('Hay un error', error));

const validateLinks = (route) => {
  let newPropertiesOfLinks = [];
  const routeLinks = extractLinks(route);
  routeLinks.forEach((element) => {
    newPropertiesOfLinks.push(fetch(element.href)
    .then((res) => {
      const newElement = {
        href: element.href,
        text: element.text,
        file: element.file,          
        status: res.status,
        statusText: res.statusText
      };
      console.log(newElement); // solo sale si es console.log y sino sale pending
    })
    .catch(error => console.log(error)));
  });
  return Promise.all(newPropertiesOfLinks);
};
console.log(validateLinks('./test/example/sample_text.md'));




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

