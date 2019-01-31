const boot = require('../app').boot
const shutdown = require('../app').shutdown
const port = require('../app').port
const superagent = require('superagent')
const expect = require('expect')

describe('server', () => {
  before(() => {
    boot()
  })

  describe('homepage', () => {
    it('should respond to GET', (done) => {
      superagent
        .get(`http://localhost:${port}`)
        .end((error, response) => {
          expect(response.status).to.equal(200)
          done()
        })
    })
  })

  after(() => {
    shutdown()
  })
})
/* wtf
var boot = require('../app').boot,
    shutdown = require('../app').shutdown,
    port = require('../app').port,
    superagent = require('superagent'),
    expect = require('expect');
describe('server', function () {
    before(function () {
        boot();
});
describe('homepage', function () {
    it('should respond to GET', function (done) {
      superagent
        .get('http://localhost:'+port)
        .end(function (res){
          expect(res.status).to.equal(200);
          done()
        })
    })
});
after(function () {
      shutdown();
});
});
*/
