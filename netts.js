var net = require("net");
var dataConf = '!@#' + JSON.stringify(require("./pigs/t12conf.json")) + '%^&*';
console.log(dataConf);

function connectMicroDiscover() {
    var client = net.connect({ port: 2000 ,host:'192.168.1.101'}, function () {
        console.log('client connected');
        var buffer = new Buffer(dataConf);
        console.log(buffer);
        client.write(buffer);
    });
    client.on('data', function (data) {
        console.log(data.toString());
        //client.end();
    });

    client.on('end', function () {
        console.log('client disconnected');
        setTimeout(function () {
            connectMicroDiscover();
        }, 1000);
    });
    client.on('close', function () {
        console.log(`I'm levea`);
    })
}
connectMicroDiscover();
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});


//exports.connectMicroDiscover = connectMicroDiscover();
