const {extractLinks, validateLinks} = require('./main.js');

const mdLinks = (path, options) => {
    const links = new Promise((resolve) => {
        if (options.validate === true) {
            resolve(validateLinks(path)); 
        }
        if (options.validate === false) {
            resolve(extractLinks(path));
        }
    });
    return links;   
};
module.exports = mdLinks;
