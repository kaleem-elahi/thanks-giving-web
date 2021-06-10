const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);

// eslint-disable-next-line no-unused-vars
const should = chai.should();

describe('Test app', () => {
  it('it should return "pong"', async () => {
    const response = await chai.request(app)
      .get('/');
    response.body.should.have.property('message').which.to.equal('pong');
  });
});
