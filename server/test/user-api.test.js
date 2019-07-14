var request = require('superagent');
const { assert } = require('chai');
var baseUrl = 'http://localhost:3007/api';

module.exports = () => {
  /**
   * @test :: Testing Login request
   * @url  :: POST http://localhost:3007/api/users/login
   * @passingData :: email/phone & password
   *
   * expected case - 1: should return 422 when Unprocessable Entity is passed
   * expected case - 2: should return 404 when everything is ok but doesn't match any account.
   * expected case - 3: Should return 200 when everything is OK & Loggedin successfully
   */
  describe('Login Request', () => {
    it('should return 422 when Unprocessable Entity is passed', done => {
      request
        .post(baseUrl + '/users/login')
        .send({ emailOrPhone: '0177736300', password: '123456' }) // mobile number is unvalid
        .end((err, res) => {
          const data = JSON.parse(res.text);

          assert.equal(res.status, 422);
          assert.equal(data.isValid, false);
          assert.operator(Object.keys(data.errors).length, '>', 0);
          done();
        });
    });

    it("should return 404 when everything is ok but doesn't match any account.", done => {
      request
        .post(baseUrl + '/users/login')
        .send({ emailOrPhone: '01777363008', password: '123456' })
        .end((err, res) => {
          const data = JSON.parse(res.text);

          assert.equal(res.status, 404);
          assert.equal(data.isLoggedIn, false);
          assert.operator(Object.keys(data.errors).length, '>', 0);
          done();
        });
    });

    it('Should return 200 when everything is OK & Loggedin successfully', done => {
      request
        .post(baseUrl + '/users/login')
        .send({ emailOrPhone: '01777363007', password: '123456' })
        .end((err, res) => {
          assert.ifError(err);
          assert.equal(res.status, 200);
          assert.equal(JSON.parse(res.text).isLoggedIn, true);
          done();
        });
    });
  });

  /**
   * @test :: Testing Registration request
   * @url  :: POST http://localhost:3007/api/users/register
   * @passingData ::
   *
   * expected case - 1: Should return 201 when everything is OK & create account successfully
   * expected case - 2:
   * expected case - 3:
   */
  describe('Registration request', () => {
    it('Should return 201 when everything is OK & create account successfully', done => {
      request
        .post(baseUrl + '/users/register')
        .send({})
        .end((err, res) => {
          done();
        });
    });
  });
};
