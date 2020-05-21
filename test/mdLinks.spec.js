const mdLinks = require('../src/mdLinks.js')

const {
    validateMock,
    extractLinksOutput
} = require('./dataForTest.js');

describe('mdLinks', () => {
    it('should be a function', () => {
      expect(typeof mdLinks).toBe('function');
    });
    it('returns an array with five properties for each link', () => {
        expect.assertions(1);
        return mdLinks('./test/example/readmeMock.md', {validate: true}).then((response) => {
            expect(response).toEqual(validateMock)
        });
    });
    it('returns an array with three properties for each link', () => {
        return mdLinks('./test/example/moreExamples/readme1.md', {validate: false}).then((response) => {
            expect(response).toEqual(extractLinksOutput)
        });
    });
  });