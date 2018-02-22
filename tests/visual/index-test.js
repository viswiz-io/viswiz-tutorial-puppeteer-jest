const http = require('http');

describe('index page', () => {
  it('can load the index page', (done) => {
    http.request({
      hostname: 'localhost',
      port: 8080,
      path: '/'
    }, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    }).end();
  });
});
