const stats = (array) => {
  const quantity = array.length;
  const uniqueLinks = new Set(array.map((element) => element.href)).size;
  const statsReturn = `
    TOTAL: ${quantity} 
    UNIQUE: ${uniqueLinks}`;
  return statsReturn;
};

console.log(stats([
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
}]));

const statsValidate = (array) => {
    const quantity = array.length;
    const uniqueLinks = new Set(array.map((element) => element.href)).size;
    const brokenLinks = new Set(array.filter((href) => (href.status >= 400))).size;
    const statsReturn = `
      TOTAL: ${quantity} 
      UNIQUE: ${uniqueLinks}
      BROKEN: ${brokenLinks}`;
    return statsReturn;
};
console.log(statsValidate([
    { 
        href: 'https://github.com/1256325', 
        text: 'Not found',
        file: './test/example/sample_text.md',
        status: 404,
        statusText: 'Not found'
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
    },
    { 
        href: 'https://nodejs.org/en/', 
        text: 'Node.js',
        file: './test/example/moreExamples/readme1.md',
        status: 200,
        statusText: 'OK'
    },
    {
        href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
        text: 'módulos (CommonJS)',
        file: './test/example/moreExamples/readme1.md',
        status: 200,
        statusText: 'OK'
    }
]));