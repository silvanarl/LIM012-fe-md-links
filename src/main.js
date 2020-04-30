const path = require('path');
const fs = require('fs');
const process = require('process');

const isValidPath = (route) => fs.existsSync(route);
// console.log(isValidPath('C:/Users/acer/Desktop/LIM012-fe-md-links/test/example/moreExamples'));

const isAbsolutePath = (route) => path.isAbsolute(route);
// console.log(isAbsolutePath('./documents/example/')); //false

const converterRelativeToAbsolutePath = (route) => path.resolve(route);
//console.log(converterRelativeToAbsolutePath('./test/example/moreExamples'));

const isDirectoryPath = (route) => fs.lstatSync(route).isDirectory();
// console.log(isDirectoryPath('./test/example/sample_text.md')); //false

const isFileMdPath = (route) => (path.extname(route));
// console.log(isFileMdPath('./test/example/evenMoreExamples/file2.md')) //.md

const readDirectoryPath = (route) => {
  return fs.readdirSync(route) ;
};
// console.log(readDirectoryPath('./test/example/evenMoreExamples')); //devuelve archivos en array

const readFilePath = (route) => {
  return fs.readFileSync(route, 'utf-8');
}
// console.log(readFilePath('./test/example/sample_text.md'));

module.exports = {
  isValidPath,
  isAbsolutePath,
  converterRelativeToAbsolutePath,
  isDirectoryPath,
  isFileMdPath,
  readDirectoryPath,
  readFilePath
}

