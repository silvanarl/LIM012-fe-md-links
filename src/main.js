const path = require('path');
const fs = require('fs');
const marked = require('marked');


const isValidPath = (route) => fs.existsSync(route);

const isAbsolutePath = (route) => path.isAbsolute(route);

const converterRelativeToAbsolutePath = (route) => path.resolve(route);

const isDirectoryPath = (route) => fs.lstatSync(route).isDirectory();

const routeExtension = (route) => (path.extname(route));

const readDirectoryPath = (route) => {
  const arrFiles = fs.readdirSync(route);
  return arrFiles.map(file => {
    return path.join(route, file);
  })
};
//console.log(readDirectoryPath('./test/example/evenMoreExamples'));

//console.log(readDirectoryPath('./test/example/evenMoreExamples')); 
//devuelve array con ruta de archivos encontrados 

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
}
console.log(findMdFiles('./test/example/evenMoreExamples'));
// array con ruta de archivos md

const readFilePath = (route) => {
  return fs.readFileSync(route, 'utf-8');
};

const extractLinks = (documents) => {
  let arrLinks = [];
  const mark = new marked.Renderer();
  mark.link = (href, file, text) => {
    const propLink = {
      href,
      file,
      text,
    };
    arrLinks.push(propLink);
  }
  documents.forEach(document => {
    marked(readFilePath(document), { renderer: mark })
  }) 
  return arrLinks;  
}
console.log(extractLinks(['test\\example\\evenMoreExamples\\file2.md']));



module.exports = {
  isValidPath,
  isAbsolutePath,
  converterRelativeToAbsolutePath,
  isDirectoryPath,
  routeExtension,
  readDirectoryPath,
  readFilePath,
  findMdFiles,
  extractLinks
}

