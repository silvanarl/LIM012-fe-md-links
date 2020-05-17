#!/usr/bin/env node

const mdLinks = require('./mdLinks.js');
const {stats, statsValidate} = require('./stats.js');

const route = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];

const help = `
-----------------Valid Arguments-----------------
md-links <path-to-file> --validate   --stats
md-links <path-to-file> --v   --s
md-links <path-to-file> --validate
md-links <path-to-file> --stats
-------------------------------------------------
`;

const cli = (route, option1, option2) => {
    if (route === '--help' || option1 === '--help' || option2 === '--help') {
        console.log(help);
    }
    if ((route === undefined) && (option1 === undefined) && (option2 === undefined)) {
        console.log(help);
    }
    if ((route) && (option1 === undefined) && (option2 === undefined)) {
        return mdLinks(route, {validate: false})
        .then((links) => console.table(links))
        .catch(error => console.error('Invalid path'));
    }
    if ((option1 === '--validate' || option1 === '--v') && (option2 === '--stats' || option2 === '--s')) {
        return mdLinks(route, {validate: true})
        .then((links) => console.table(statsValidate(links)))
        .catch(error => console.log(help));
    }
    if ((option1 === '--validate' || option1 === '--v') && (option2 === undefined)) {
        return mdLinks(route, {validate: true})
        .then((links) => console.log(links))
        .catch(error => console.log(help));
    }
    if ((option1 === '--stats'  || option1 ==='--s') && (option2 === undefined)) {
        return mdLinks(route, {validate: false})
        .then((links) => console.log(stats(links)))
        .catch(error => console.error(error));
    }
    if ((option1 === '--stats' || option1 === '--s') && (option2 === '--validate' || option2 === '--v')) {
        return mdLinks(route, {validate: true})
        .then((links) => console.table(statsValidate(links)))
        .catch(error => console.error(error));
    }
};
cli(route, option1, option2);

module.exports = {cli};