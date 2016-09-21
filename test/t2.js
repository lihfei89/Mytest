
const assert = require('assert');
const should = require('should');
const expect = require('chai').expect;
const rewire = require('rewire');
const request = require("supertest");

require('../run');

var test1 = require('../test');
describe('add test ', function () {
    it("the result should ss2 assert", function () {
        var r = test1.add('ss', 2);
        expect(r).to.be.equal('ss2');
    });
    it("the result should 3 should", function () {
        var r = test1.add(1, 2);
        r.should.eql(3);
    });
    it("the result should NaN", function () {
        var r = test1.add(1);
        assert.equal(Number.isNaN(r), Number.isNaN(NaN), 'NaN');
    });
});
describe('test if', function () {
    it('a=1,b=2', function () {
        var c = test1.abc(1, 2);
        c.should.equal(3);
    })
})
describe('test private method', function () {
    it("a=2,b=1 shoule be 1", function () {
        var a = 5, b = 2;
        var lib = rewire('../test');
        var t1 = lib.__get__('t1');
        var result = t1(a, b);
        result.should.equal(3);
    });
});
describe('http request', function () {
    it('respond with json', function (done) {
        request('127.0.0.1:3003')
            .get('/q1')
            .end(function (err, ctx) {
                //console.log(ctx);
                console.log('-------------');
                console.log(ctx.text);
                console.log(ctx.body);
                console.log('-------------');
                if (err) {
                    done(err);
                }
                //expect(JSON.parse(ctx.text).name).to.be.euqal('p1');
                //console.log(JSON.parse(ctx.text).name);
                assert.equal(JSON.parse(ctx.text).name, 'w1');
                //res.body.name.should.be.eql('p1');
                done();
            });
    });
})
