const path = require('path');
const fs = require('fs');
const process = require('process');


// export const add = (a, b) => {
//     return a+b;
// };


const isValidPath = (path) => {
    if (fs.existsSync(path)) {
      console.log('ruta existe');
    } else {
      console.log('ruta no existe');//Esto terminaria el proceso
    }
}
isValidPath('./documents/example/'); //esto funciona dentro de la carpeta donde nos encontramos

const pathAbOrRel = console.log(path.isAbsolute('./example/sample_text.md'));
console.log(pathAbOrRel)
if (pathAbOrRel === false) {
    console.log(process.cwd()+ path);
} 