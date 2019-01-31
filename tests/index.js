const boot = require('../app').boot
const shutdown = require('../app').shutdown
const port = require('../app').port
const superagent = require('superagent')
//const expect = require('expect')
//import chai from 'chai';
//import chaiHttp from 'chai-http';
const assert = require('assert')

describe('server', function () {
  before( function () {
    boot()
  })

  describe('homepage', function () {
    it('should respond to GET', function (done) {
      superagent
        .get('http://127.0.0.1:3000')
        .end( function (error, response) {
          //expect(response.status).to.equal(200)
          assert.equal(response.status,200)
          done()
        })
    })
  })

  after( function () {
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
