const {
  isValidPath,
  isAbsolutePath,
  converterRelativeToAbsolutePath,
  isDirectoryPath,
  routeExtension,
  readDirectoryPath,
  readFilePath,
  extractLinks
} = require('../src/main.js');

const output1 = [
'test\\example\\evenMoreExamples\\file1.txt', 
'test\\example\\evenMoreExamples\\file2.md', 
'test\\example\\evenMoreExamples\\file3.html', 
'test\\example\\evenMoreExamples\\otherFiles'];
const output2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const input1 = ['test\\example\\evenMoreExamples\\file2.md']
const output3 = [
  { 
    href: 'https://nodejs.org/en/',
    title: null, 
    text: 'Node.js' 
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    title: null,
    text: 'módulos (CommonJS)'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    title: null,
    text: 'file system'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    title: null,
    text: 'path'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    title: null,
    text: 'http.get'
  },
  {
    href: 'https://daringfireball.net/projects/markdown/syntax',
    title: null,
    text: 'markdown'
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    title: null, 
    text: 'npm-scripts' 
  },
  { 
    href: 'https://semver.org/',
    title: null, 
    text: 'semver' 
  },
  { 
    href: 'https://www.google.com',
    title: 'Google&#39;s Homepage',
    text: 'I&#39;m an inline-style link with title'
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
      expect(extractLinks(input1)).toEqual(output3);
  });
});