const assert = require('assert');
const should = require('should');
const expect = require('chai').expect;
require('../run');
var redis = require('../ttt');
describe('redis test', function () {
    describe('redis write', function () {
        it('sadd t2 (1) should true', function (done) {
            redis.addRedisSet('t2', 1).then(function (res) {
                var shouldValue = 1;
                res.should.equal(shouldValue);
                done();
            });
        });
        it('sadd t2 (1,2) should true', function (done) {
            var tempArr = [1, 2];
            redis.addRedisSet('t2', tempArr).then(function (res) {
                var shouldValue = 1;
                res.should.equal(shouldValue);
                done();
            });
        });

        it('sadd t3 (1,2,3) should true', function (done) {
            var tempArr = [1, 2, 3];
            redis.addRedisSet('t3', tempArr).then(function (res) {
                var shouldValue = 3;
                res.should.equal(shouldValue);
                done();
            });
        });

    });
});


