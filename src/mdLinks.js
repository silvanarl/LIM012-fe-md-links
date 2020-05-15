const {extractLinks, validateLinks} = require('./main.js');

const help = `
-----------------Valid Arguments-----------------
md-links <path-to-file> --validate   --stats
md-links <path-to-file> --v   --s
md-links <path-to-file> --validate
md-links <path-to-file> --stats
-------------------------------------------------
`;

const mdLinks = (path, options) => {
    const links = new Promise((resolve) => {
        if (options.validate === true) {
            resolve(validateLinks(path)); 
        }
        if (path) {
            resolve(extractLinks(path));
        }
    });
    return links;   
};
console.log(mdLinks('./test/example/sample_text.md', {validate: true}));
module.exports = mdLinks;

// const marckdownLinks = (path, options) => {
//     return new Promise((resolve, reject) =>{
//         const links;
//         .then((resolve) => extractLinks(path))
//     })
// }