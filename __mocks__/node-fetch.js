const fetchMock = require('fetch-mock').sandbox();

fetchMock.mock('https://www.google.com/', 200);
fetchMock.mock('https://github.com/1256325', 404);

module.exports = fetchMock;