const {
  isValidPath,
  isAbsolutePath,
  converterRelativeToAbsolutePath,
  isDirectoryPath,
  routeExtension,
  readDirectoryPath,
  readFilePath,
  extractLinks,
  findMdFiles
} = require('../src/main.js');

const output1 = [
'test\\example\\evenMoreExamples\\file1.txt', 
'test\\example\\evenMoreExamples\\file2.md', 
'test\\example\\evenMoreExamples\\file3.html', 
'test\\example\\evenMoreExamples\\otherFiles'];
const output2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const output3 = [
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
    href: 'https://nodejs.org/api/fs.html',
    text: 'file system',
    file: './test/example/moreExamples/readme1.md'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    file: './test/example/moreExamples/readme1.md'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    file: './test/example/moreExamples/readme1.md'
  },
  {
    href: 'https://daringfireball.net/projects/markdown/syntax',
    text: 'markdown',
    file: './test/example/moreExamples/readme1.md'
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'npm-scripts',
    file: './test/example/moreExamples/readme1.md'
  },
  { 
    href: 'https://semver.org/', 
    text: 'semver',
    file: './test/example/moreExamples/readme1.md'
  }
];
const output4 = [
  './test/example/sample_text.md'
]
const output5 = [
  'test\\example\\evenMoreExamples\\file2.md',
  'test\\example\\moreExamples\\readme1.md',
  'test\\example\\moreExamples\\readme2.md',
  'test\\example\\sample_text.md'
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
      expect(readDirectoryPath('./test/example/evenMoreExamples')).toEqual(output1);
  });
});

describe('readFilePath', () => {
  it('should be a function', () => {
    expect(typeof readFilePath).toBe('function');
  });
  it('should return the contents of the file read', () => {
      expect(readFilePath('./test/example/moreExamples/readme2.md')).toEqual(output2);
  });
});

describe('extractLinks', () => {
  it('should be a function', () => {
    expect(typeof extractLinks).toBe('function');
  });
  it('should return an array of objects with the properties of each found link', () => {
      expect(extractLinks('./test/example/moreExamples/readme1.md')).toEqual(output3);
  });
});

describe('findMDFiles', () => {
  it('should be a function', () => {
    expect(typeof findMdFiles).toBe('function');
  });
  it('should return in an array the path it receives if it is an .md file', () => {
    expect(findMdFiles('./test/example/sample_text.md')).toEqual(output4);
  });
  it('should return an array with all the md files found when it receives a directory', () => {
    expect(findMdFiles('./test/example')).toEqual(output5);
  });
});