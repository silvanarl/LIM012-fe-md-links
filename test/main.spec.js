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
  it('Should throw an error when path is not valid', () => {
      expect(() => extractLinks('./test/fileInvalid.md')).toThrow(Error);
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
    return expect(validateLinks('./test/example/sample_text.md')).resolves.toEqual(validateLinksOutput);
  });
  test('returns an empty array for a file without links ', () => {
    return expect(validateLinks('./test/example/moreExamples/readme2.md')).resolves.toEqual([]);
  });
});
