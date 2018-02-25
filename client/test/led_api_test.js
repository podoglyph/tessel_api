const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const API = 'http://localhost:8000';

describe('GET /leds', () => {
  it('should return array of 4 elements', done => {
    chai.request(API)
      .get('/leds')
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.equal(res.body.length, 4);
        done();
      });
  });
});
