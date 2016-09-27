
function a(isTrue) {
    return new Promise(function (resolve, reject) {
        var client = require('redis').createClient();
        var key = 'err';
        var value = 'false';
        client.sadd(key, value, function (err, reply) {
            if (err) {
                console.log('------------fun reject');
                reject(err);

            }
            else {
                console.log('------------fun resolve');
                resolve(reply);
            }
        });
        client.quit();
    })
}


// a().then(function (res) {
//     console.log('---------result reslove');
//     console.log(res);
// }).catch(function (err) {
//     console.log('---------result reject');
//     console.log(err);
// })

a().then(function (res) {
    console.log('----------result resolve');
    console.log(res);
}, function (err) {
    console.log('----------result reject');
    console.log(err);
})

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});