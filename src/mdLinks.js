const mainFunctions = require('./main.js');

const mdLinks = (path, options) => {
    const links = new Promise((resolve) => {
        resolve(mainFunctions.extractLinks(path));
    });
    if (options.validate === true) {
        return mainFunctions.validateLinks(path);
    }
    return links;
};
console.log(mdLinks('./test/example/sample_text.md', {validate: true}));

module.exports = mdLinks;