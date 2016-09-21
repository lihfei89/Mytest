const assert = require('assert');
const should = require('should');
const expect = require('chai').expect;
require('../run')

var redis = require('../lib/ttt');
describe('redis test', function () {
    before(function () {
        redis.initRedis();
    })

    describe('redis write', function () {
        it('set t1 = 1 shoule true', function (done) {
            redis.addRedisString('t1', 1).then(function (res) {
                var shouldValue = 'OK';
                res.should.equal(shouldValue);
                done();
            });
        });
        it('set t1 = 2 shoule true', function (done) {
            redis.addRedisString('t1', 2).then(function (res) {
                var shouldValue = 'OK';
                res.should.equal(shouldValue);
                done();
            });
        });
        it('set t1 1 shoud false', function (done) {
            redis.addRedisString('t1', [1, 2]).then(function (res) {
                var shouldValue = 'ERR';
                //console.log(res);
                res.code.should.equal(shouldValue);
                //res.should.equal(shouldValue);
                done();
            });
        });

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

        it('sadd mic shoud be true', function (done) {
            var data1 = require('../pigs/t1conf.json');
            var data2 = require('../pigs/t11conf.json');
            var data3 = require('../pigs/t12conf.json');
            var arrTemp = [];
            arrTemp.push(data1);
            arrTemp.push(data2);
            arrTemp.push(data3);
            var resArr = [];
            var microName = 't5';
            var jsonStrMicorSer = '';
            for (var index = 0; index < arrTemp.length; index++) {
                var microUuid = arrTemp[index].uuid;
                var microIP = arrTemp[index].ip;
                var microPort = arrTemp[index].port;
                var microhost = `${microIP}:${microPort}`;

                jsonStrMicorSer = `{"uuid":"${microUuid}","host":"${microhost}"}`;
                resArr.push(jsonStrMicorSer)
            }
            redis.addRedisSet(microName, resArr).then(function (res) {
                var shouldValue = 3;
                res.should.equal(shouldValue);
                done();
            });
        });
        it('sadd t1 (1,2,3) should false', function (done) {
            var tempArr = [1, 2, 3];
            redis.addRedisSet('t1', tempArr).then(function (res) {
                var shouldValue = 'WRONGTYPE';
                res.code.should.equal(shouldValue);
                done();
            });
        });
        it('sadd t1 (1) should false', function (done) {
            var tempArr = 1;
            redis.addRedisSet('t1', tempArr).then(function (res) {
                var shouldValue = 'WRONGTYPE';
                res.code.should.equal(shouldValue);
                done();
            });
        });
    });
    describe('redis read', function () {
        it('get w1 should be null', function (done) {
            redis.getRedisString('w1').then(function (res) {
                var shouldValue = null;
                //shouldValue.should.equal(res+'');
                //expect(res).to.be.equal(shouldValue)     -----
                assert.equal(res, shouldValue);
                done();
            });
        });
        it('get t1 should be 2', function (done) {
            redis.getRedisString('t1').then(function (res) {
                var shouldValue = '2';
                res.should.equal(shouldValue);
                done();
            });
        });
        it('get t2 shoud be false', function (done) {
            redis.getRedisString('t2').then(function (res) {
                var shouldValue = 'WRONGTYPE';
                res.code.should.equal(shouldValue);
                done();
            });
        })
        it('smembers t1 should be false', function (done) {   //t1 为string 类型,现用set 来取
            redis.getRedisSet('t1').then(function (res) {
                var shouldValue = 'WRONGTYPE';
                res.code.should.equal(shouldValue);
                done();
            });
        });

        it('smembers w1 should be false', function (done) {
            redis.getRedisSet('w1').then(function (res) {
                var shouldValue = [];
                //res.should.equal(shouldValue);
                expect(JSON.stringify(res)).to.be.equal(JSON.stringify(shouldValue));
                done();
            });
        })
        it('smembers t2 should be true(1,2)', function (done) {
            redis.getRedisSet('t2').then(function (res) {
                var shouldValue = `["1","2"]`;
                JSON.stringify(res).should.equal(shouldValue)
                done();
            });
        });
        it('smembers t5 should be true(port:3003-3005)', function (done) {
            redis.getRedisSet('t5').then(function (res) {
                var micList = res;
                console.log(micList);
                for (var index = 0; index < micList.length; index++) {
                    console.log(JSON.parse(micList[index]));
                }
                done();
            });
        });
    });
});


