
var tempMax = 0;
async function getMaxData(list) {
    return new Promise(function (resolve, reject) {
        console.log(1);
        list.forEach(async function (obj) {
            var randomNum = Math.random() * 800;
            var listcount = parseInt(randomNum, 10);
            for (var index = 0; index < listcount; index++) {
            }
            if (parseInt(obj) > tempMax) {
                tempMax = obj;
            }
            console.log('num is ' + obj);
        });
        resolve(tempMax);
    });
};

async function main() {
    let list = [];
    for (var index = 0; index < 10; index++) {
        var randomNum = Math.random() * 20;
        var listcount = parseInt(randomNum, 10);
        list.push(listcount);
    }
    console.log(list);

    var maxNum = getMaxData(list).then(function (res) {
        console.log(`i am 2 ${res}`);
    });
    console.log(`i am 1 ${maxNum}`);
}


function t1() {
    Promise.resolve('pig').then(function () {
        return Promise.resolve('pig,pig');
    }).then(function (result) {
        console.log(`i am 4 ${result}`);
    });
}

function t2() {
    Promise.resolve('pig').then(function (res) {
        console.log(`i am 3 ${res}`);
    })
}

function t3() {
    var redis = require('./lib/ttt');
    redis.getRedisString('w1').then(function (res) {
        console.log('i am 5 ' + res);
    }).catch(function (err) {
        console.log(err);
    });
}
function t4() {
    var redis = require('./lib/ttt');
    redis.getRedisSet('q1').then(function (res) {
        console.log('i am 6 ' + res);
    }).catch(function (err) {

        console.log('i am 6 ' + JSON.stringify(err));
    })
}
function t5() {
    var redis = require('./lib/ttt');
    redis.addRedisString('t1', 1).then(function (res) {
        console.log('i am 7 ' + res);
    })
}
function t6() {
    var redis = require('./lib/ttt');
    redis.getRedisSet('t1').then(function (res) {
        console.log('i am 8 ' + res);
    }).catch(function (err) {
        console.log('i am 8 ' + JSON.stringify(err));
    }).catch(function (err) {
        console.log(err);
    });
}

function t7() {
    var redis = require('./lib/ttt');
    redis.initRedis().then(function (res) {
        console.log('i am 9 ' + res);
    }).catch(function (err) {
        console.log(err);
    })
}

function t8() {
    var redis = require('./lib/ttt');
    redis.addRedisSet('a1', 1).then(function (res) {
        console.log('i am 10 ' + res);
    }).catch(function (err) {
        console.log('i am 10 ' + JSON.stringify(err));
    });
}

function t9() {
    var redis = require('./lib/ttt');
    var a = [];
    a.push(1);
    a.push(2);
    a.push(3);
    a.push(4);
    redis.addRedisSet('a1', a).then(function (res) {
        console.log('i am 11 ' + res);
    }).catch(function (err) {
        console.log('i am 11 ' + JSON.stringify(err));
    });
}


function t10() {
    var redis = require('./lib/ttt');
    redis.getRedisSet('a1').then(function (res) {
        console.log('i am 12 ' + res + '---' + typeof res);
        //console.log(JSON.stringify(res));
    }).catch(function (err) {
        console.log('i am 12 ' + JSON.stringify(err));
    });
}

function t11() {
    var redis = require('./lib/ttt');
    redis.getRedisSet('b1').then(function (res) {
        console.log('i am 13 ' + res + '---' + typeof res);
        //console.log(JSON.stringify(res));
    }).catch(function (err) {
        console.log('i am 13 ' + JSON.stringify(err));
    });
}

async function t12() {
    var redis = require('./lib/ttt');
    var res = await redis.getRedisSet('t1')
        .catch(function (err) {
            return err;
        })
    console.log('i am await 14 ' + res);
}

async function t13() {
    var redis = require('./lib/ttt');
    redis.getRedisSet('w1').then(function (res) {
        //var shouldValue = [];
        // console.log(shouldValue);
        console.log('i am 15 ' + res +'.....' + typeof res);
    }).catch(function (err) {
        console.log(err);
    });
    // console.log('i am 15 ' + res);
    // console.log(res + '....');
    // res.push(1);
    // console.log(res);
};


function t14(){
    var redis = require('./lib/ttt');
    redis.getRedisSet('t1').then(function(res){
        console.log(res);
    });
}

// main();
// t1();
// t2();
// t3();
// t4();
// t5();
// t6();
//// t7();
// t8();
// t9();
// t10();
// t11();
// t12();
// t13();
t14();