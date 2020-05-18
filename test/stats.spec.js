const {stats, statsValidate} = require('../src/stats.js');

const {
    inputArrayForStatsWithThreeProperties,
    inputArrayForStatsWithFiveProperties,
    statsOutput,
    statsValidateOutput
} = require('./dataForTest.js');

describe('stats', () => {
    it('should be a function', () => {
      expect(typeof stats).toBe('function');
    });
    it('should return two stats about links found', () => {
        expect(stats(inputArrayForStatsWithThreeProperties)).toEqual(statsOutput);
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
        expect(statsValidate(inputArrayForStatsWithFiveProperties)).toEqual(statsValidateOutput);
    });
});