const mdLinks = require('../src/mdLinks.js')

const {
    validateLinksOutput,
    extractLinksOutput
} = require('./dataForTest.js');

describe('mdLinks', () => {
    it('should be a function', () => {
      expect(typeof mdLinks).toBe('function');
    });
    test('returns an array with five properties for each link', (done) => {
        return mdLinks('./test/example/sample_text.md', {validate: true}).then((response) => {
            expect(response).toEqual(validateLinksOutput)
        });
        done();
    });
    test('returns an array with three properties for each link', (done) => {
        return mdLinks('./test/example/moreExamples/readme1.md', {validate: false}).then((response) => {
            expect(response).toEqual(extractLinksOutput)
        });
        done();
    });
  });