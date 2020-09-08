const fetchMock = require('fetch-mock').sandbox();

fetchMock.mock('https://www.google.com/', 500);
fetchMock.mock('https://github.com/1256325', 404);

module.exports = fetchMock;