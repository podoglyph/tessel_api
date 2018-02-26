const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const API = 'http://localhost:8000';

describe('GET /leds', () => {
  it('should return array of 4 elements representing onboard leds', done => {
    chai.request(API)
      .get('/leds')
      .end( (err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.equal(res.body.length, 4);
        assert.typeOf(res.body[0]._id, 'string');
        assert.typeOf(res.body[0].color, 'string');
        assert.typeOf(res.body[0].index, 'string');
        assert.typeOf(res.body[0].isOn, 'boolean');
        done();
      });
  });
});
