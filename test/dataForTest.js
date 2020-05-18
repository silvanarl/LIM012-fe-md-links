


const readDirectoryPathOutput = [
    'test\\example\\evenMoreExamples\\file1.txt', 
    'test\\example\\evenMoreExamples\\file2.md', 
    'test\\example\\evenMoreExamples\\file3.html'
];
const readFilePathOutput = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const extractLinksOutput = [
    { 
    href: 'https://nodejs.org/en/', 
    text: 'Node.js',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    },
    {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    },
    {
    href: 'https://nodejs.org/api/fs.html',
    text: 'file system',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    },
    {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    },
    {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    },
    {
    href: 'https://daringfireball.net/projects/markdown/syntax',
    text: 'markdown',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    },
    {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'npm-scripts',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    },
    { 
    href: 'https://semver.org/', 
    text: 'semver',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples\\readme1.md'
    }
];
const findMdFilesOutput1 = [
    './test/example/sample_text.md'
];
const findMdFilesOutput2 = [
    'test\\example\\evenMoreExamples\\file2.md',
    'test\\example\\moreExamples\\readme1.md',
    'test\\example\\moreExamples\\readme2.md',
    'test\\example\\sample_text.md'
];
    
const validateLinksOutput = [
    {
    href: 'https://www.google.com/',
    text: 'Google',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\sample_text.md',
    status: 200,
    statusText: 'OK'
    },
    {
    href: 'https://slack.com/intl/es-pe/',
    text: 'Slack',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\sample_text.md',
    status: 200,
    statusText: 'OK'
    },
    {
    href: 'https://es.stackoverflow.com/',
    text: 'Stackoverflow',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\sample_text.md',
    status: 200,
    statusText: 'OK'
    },
    {
    href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\sample_text.md',
    status: 200,
    statusText: 'OK'
    },
    {
    href: 'http://qux.com',
    text: 'Qux',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\sample_text.md',
    status: 200,
    statusText: 'OK'
    },
    {
    href: 'https://github.com/1256325',
    text: 'Not found',
    file: 'C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\sample_text.md',
    status: 404,
    statusText: 'Not Found'
    }
];

const inputArrayForStatsWithThreeProperties = [
    { 
    href: 'https://nodejs.org/en/', 
    text: 'Node.js',
    file: './test/example/moreExamples/readme1.md'
    },
    {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file: './test/example/moreExamples/readme1.md'
    },
    { 
    href: 'https://nodejs.org/en/', 
    text: 'Node.js',
    file: './test/example/moreExamples/readme1.md'
    },
    {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file: './test/example/moreExamples/readme1.md'
    }
];
const inputArrayForStatsWithFiveProperties = [
    { 
    href: 'https://github.com/1256325', 
    text: 'Not found',
    file: './test/example/sample_text.md',
    status: 404,
    statusText: 'Not found'
    },
    { 
    href: 'https://nodejs.org/en/', 
    text: 'Node.js',
    file: './test/example/moreExamples/readme1.md',
    status: 200,
    statusText: 'OK'
    },
    { 
    href: 'https://github.com/1256325', 
    text: 'Not found',
    file: './test/example/sample_text.md',
    status: 404,
    statusText: 'Not found'
    },
    {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file: './test/example/moreExamples/readme1.md',
    status: 200,
    statusText: 'OK'
    }
];
const statsOutput = `
    TOTAL: 4
    UNIQUE: 2
    `;
const statsValidateOutput = `
    TOTAL: 4
    UNIQUE: 3
    BROKEN: 2
    `;    
module.exports = {
    readDirectoryPathOutput,
    readFilePathOutput,
    extractLinksOutput,
    findMdFilesOutput1,
    findMdFilesOutput2,
    validateLinksOutput,
    inputArrayForStatsWithThreeProperties,
    inputArrayForStatsWithFiveProperties,
    statsOutput,
    statsValidateOutput
};