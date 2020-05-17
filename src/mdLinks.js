const {extractLinks, validateLinks} = require('./main.js');

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
module.exports = mdLinks;
