

function a(isTrue) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isTrue) {
                resolve('Hello ');
            }
            else {
                reject('Hi ');
            }
        }, 500);
    }).catch(function (err) {
        return err;
    })
}
function b(isTrue) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isTrue) {
                resolve('world ');
            }
            else {
                reject('Node ');
            }
        }, 500);
    })
}
function c(isTrue) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isTrue) {
                resolve('!!! ');
            }
            else {
                reject('??? ');
            }
        }, 500);

    })
}


a(true).then(function (res) {
    return res;
}).then(function (res1) {
    return b(true).then(function (res) {
        return res;
    }).then(function (res2) {
        return res1 + res2;
    })
}).then(function (res1) {
    return c(true).then(function (res) {
        return res;
    }).then(function (res2) {
        return res1 + res2;
    })
}).then(function (res3) {
    console.log(res3);
})


console.log('-----------------------');

// a(false).then(function (res) {
//     console.log(res);
// }, function (rej) {
//     console.log(rej);
// })
// // b(true).then(function (res) {
//     console.log(res);
// }, function (rej) {
//     console.log(rej);
// })
// c(true).then(function (res) {
//     console.log(res);
// }, function (rej) {
//     console.log(rej);
// })

console.log('-----------------------');

Promise.all([a(false), b(true), c(true)]).then(function (res) {
    console.log('----------1');
    console.log(res);
}, function (rej) {
    console.log('---------2');
    console.log(rej);
});

// Promise.race([a(false), b(true), c(true)]).then(function (res) {
//     console.log('----------3');
//     console.log(res);
// }, function (rej) {
//     console.log('---------4');
//     console.log(rej);
// });


Promise.resolve('foo').then(Promise.resolve('bar')).then(function (res) {
    console.log(res);
})


a(true).then(function(){
    return b(true)
}).then(function(res){
    console.log('-------------1');
    console.log(res);
})


a(true).then(function (ss) {
    b(true);
}).then(function (res) {
    console.log('-------------2');
    console.log(res);
})

a(true).then(b(true)).then(function(res){
    console.log('------------3');
    console.log(res);
})

a(true).then(b).then(function(res){
    console.log('-------------4');
    console.log(res);
})


/* https://cauu.github.io/2015/10/promise/ */
/* http://www.oschina.net/translate/service-discovery-in-the-cloud */







