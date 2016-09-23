// function returnPromiseObj(){

// }

function a(isTrue){
    return new Promise(function(reject,resolve){
        if (isTrue) {
            resolve('hello ');
        }
        else{
            reject('Hi ');
        }
    }).catch(function(err){
        return err;
    });
}
function b(isTrue){
    return new Promise(function(reject,resolve){
        if (isTrue) {
            resolve('world ');
        }
        else{
            reject('Node ');
        }
    }).catch(function(err){
        return err;
    });
}
function c(isTrue){
    return new Promise(function(reject,resolve){
        if (isTrue) {
            resolve('!!! ');
        }
        else{
            reject('??? ');
        }
    }).catch(function(err){
        return err;
    });
}

// a(true).then(b(true),function(res){
//     return res;
// }).then(c(true)).then(function(res){
//     console.log(res);
// });
Promise.all([a(false),b(true),c(false)]).then(function(res){
    console.log(res);
});

Promise.race([a(true),b(false),c(true)]).then(function(res){
    console.log(res);
},function(res){
    console.log(res);
},function(res){
    console.log(res);
});

console.log('object');


/* https://cauu.github.io/2015/10/promise/ */
/* http://www.oschina.net/translate/service-discovery-in-the-cloud */