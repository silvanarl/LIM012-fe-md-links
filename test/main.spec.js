const {
  isValidPath,
  isAbsolutePath,
  converterRelativeToAbsolutePath,
  isDirectoryPath,
  routeExtension,
  readDirectoryPath,
  readFilePath,
  extractLinks,
  findMdFiles,
  validateLinks
} = require('../src/main.js');

const {
  readDirectoryPathOutput,
    readFilePathOutput,
    extractLinksOutput,
    findMdFilesOutput1,
    findMdFilesOutput2,
    validateMock
} = require('./dataForTest.js');


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

describe('routeExtension', () => {
  it('should be a function', () => {
    expect(typeof routeExtension).toBe('function');
  });
  it('should return the file extension', () => {
      expect(routeExtension('./test/example/sample_text.md')).toBe('.md');
  });

  it('should return the file extension', () => {
      expect(routeExtension('C:/Users/acer/Desktop/LIM012-fe-md-links/test/example/evenMoreExamples/file3.html')).toBe('.html');
  });
});

describe('readDirectoryPath', () => {
  it('should be a function', () => {
    expect(typeof readDirectoryPath).toBe('function');
  });
  it('should return an array with the elements found', () => {
      expect(readDirectoryPath('./test/example/evenMoreExamples')).toEqual(readDirectoryPathOutput);
  });
});

describe('readFilePath', () => {
  it('should be a function', () => {
    expect(typeof readFilePath).toBe('function');
  });
  it('should return the contents of the file read', () => {
      expect(readFilePath('./test/example/moreExamples/readme2.md')).toEqual(readFilePathOutput);
  });
});

describe('extractLinks', () => {
  it('should be a function', () => {
    expect(typeof extractLinks).toBe('function');
  });
  it('should return an array of objects with the properties of each found link', () => {
    expect(extractLinks('./test/example/moreExamples/readme1.md')).toEqual(extractLinksOutput);
  });
  it('should return "Invalid path" when path is not valid', () => {
    expect(() => extractLinks('./examplo/test/invalid.md')).toThrow('Invalid path');
  });
});

describe('findMDFiles', () => {
  it('should be a function', () => {
    expect(typeof findMdFiles).toBe('function');
  });
  it('should return in an array the path it receives if it is an .md file', () => {
    expect(findMdFiles('./test/example/sample_text.md')).toEqual(findMdFilesOutput1);
  });
  it('should return an array with all the md files found when it receives a directory', () => {
    expect(findMdFiles('./test/example')).toEqual(findMdFilesOutput2);
  });
});

describe('validateLinks', () => {
  it('should be a function', () => {
    expect(typeof validateLinks).toBe('function');
  });
  test('returns an array with five properties for each link', () => {
    return expect(validateLinks('./test/example/readmeMock.md')).resolves.toEqual(validateMock);
  });
  test('returns an empty array for a file without links ', () => {
    return expect(validateLinks('./test/example/moreExamples/readme2.md')).resolves.toEqual([]);
  });
});
