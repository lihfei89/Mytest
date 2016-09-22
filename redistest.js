const redis = require('redis');

var client = redis.createClient('6379', '127.0.0.1');

client.on("error", function (error) {
    console.log(error);
});


/*  
    set one key value 
*/
function setValue(key, value) {
    client.set(key, value, function (err, reply) {
        console.log(reply.toString());
    });
}

/*
    get  one  value  by key
*/
function getValue(key) {
    client.get(key, function (err, reply) {
        console.log(reply.toString());
    });
}

function getList(key) {
    client.lrange(key, 0, -1, function (err, reply) {
        console.log(reply.toString());
    })
}


function getset(key){
    client.smembers(key,function(err,reply){
        console.log(reply.toString());
    })
}

exports.getset = getset;
exports.setValue = setValue;
exports.getValue = getValue;
exports.getList = getList;