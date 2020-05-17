const {stats, statsValidate} = require('../src/stats.js');

const input1 = [
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
const input2 = [
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
const output1 = `
    TOTAL: 4
    UNIQUE: 2
    `;
const output2 = `
    TOTAL: 4
    UNIQUE: 3
    BROKEN: 2
    `;
describe('stats', () => {
    it('should be a function', () => {
      expect(typeof stats).toBe('function');
    });
    it('should return two stats about links found', () => {
        expect(stats(input1)).toEqual(output1);
    });
    it('should return...', () => {
        expect(stats([])).toEqual('No links found in this file.');
    });
});

describe('statsValidate', () => {
    it('should be a function', () => {
      expect(typeof statsValidate).toBe('function');
    });
    it('should return three stats about links found', () => {
        expect(statsValidate(input2)).toEqual(output2);
    });
});