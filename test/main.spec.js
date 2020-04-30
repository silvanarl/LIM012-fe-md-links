const {
  isValidPath,
  isAbsolutePath,
  converterRelativeToAbsolutePath,
  isDirectoryPath,
  isFileMdPath,
  readDirectoryPath,
  readFilePath
} = require('../src/main.js');

const output1 = ['file1.txt', 'file2.md', 'file3.html', 'otherFiles'];

// const output2 = 'it says here anything', 
// 'google https://www.google.com/ ',
// 'slack https://slack.com/intl/es-pe/',
// 'stackoverflow https://es.stackoverflow.com/';

const output3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

describe('isValidPath', () => {
    it('should be a function', () => {
      expect(typeof isValidPath).toBe('function');
    });
    it('should return true for valid path', () => {
        expect(isValidPath('C:/Users/acer/Desktop/LIM012-fe-md-links/test/example/moreExamples')).toBe(true);
    });
    it('should return false for invalid path', () => {
        expect(isValidPath('./documents/example/')).toBe(false);
    });
});

describe('isAbsolutePath', () => {
    it('should be a function', () => {
      expect(typeof isAbsolutePath).toBe('function');
    });
    it('should return true for absolute path', () => {
        expect(isAbsolutePath('C:/Users/acer/Desktop/LIM012-fe-md-links/test/example/moreExamples')).toBe(true);
    });
  
    it('should return false for relative path', () => {
        expect(isAbsolutePath('./documents/example/')).toBe(false);
    });
});

describe('converterRelativeToAbsolutePath', () => {
  it("should be a function", () => {
    expect(typeof converterRelativeToAbsolutePath).toBe('function');
  });
  it('should return an absolute route from a relative route', () => {
      expect(converterRelativeToAbsolutePath('./test/example/moreExamples'))
      .toBe('C:\\Users\\acer\\Desktop\\LIM012-fe-md-links\\test\\example\\moreExamples');
  });
});

describe('isDirectoryPath', () => {
  it('should be a function', () => {
    expect(typeof isDirectoryPath).toBe('function');
  });
  it('should return true for directory', () => {
      expect(isDirectoryPath('C:/Users/acer/Desktop/LIM012-fe-md-links/test/example/moreExamples')).toBe(true);
  });

  it('should return false for file', () => {
      expect(isDirectoryPath('./test/example/sample_text.md')).toBe(false);
  });
});

describe('isFileMdPath', () => {
  it('should be a function', () => {
    expect(typeof isFileMdPath).toBe('function');
  });
  it('should return the file extension', () => {
      expect(isFileMdPath('./test/example/sample_text.md')).toBe('.md');
  });

  it('should return the file extension', () => {
      expect(isFileMdPath('C:/Users/acer/Desktop/LIM012-fe-md-links/test/example/evenMoreExamples/file3.html')).toBe('.html');
  });
});

describe('readDirectoryPath', () => {
  it('should be a function', () => {
    expect(typeof readDirectoryPath).toBe('function');
  });
  it('should return an array with the elements found', () => {
      expect(readDirectoryPath('./test/example/evenMoreExamples')).toEqual(output1);
  });
});

describe('readFilePath', () => {
  it('should be a function', () => {
    expect(typeof readFilePath).toBe('function');
  });
  it('should return the contents of the file read', () => {
      expect(readFilePath('./test/example/moreExamples/readme2.md')).toEqual(output3);
  });
});