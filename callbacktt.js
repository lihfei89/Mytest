const redis = require('redis');
const client = redis.createClient();
/*set */
function addRedisSet(key, value, callback) {
    client.sadd(key, value, function (err, reply) {
        if (err) {
            callback(err);
        }
        else {
            callback(reply);
        }
    });
};


console.log('start............');

for (var index = 0; index < 10; index++) {
    addRedisSet('host', `${index}times`,function(result){
        console.log(result);
    })
}


console.log('end............');