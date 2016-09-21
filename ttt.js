
var redis = require('redis');

async function addRedisSet(key, value) {
    let client = redis.createClient();
    return new Promise(function (resolve, reject) {
        var tempValue = '';
        if (typeof value == Object) {
            for (var index = 0; index < value.length; index++) {
                tempValue += value + ' ';
            }
        }
        else {
            tempValue = value;
        }
        client.sadd(key, tempValue, function (err, reply) {
            if (err) {
                reject(err);
            }
            else {
                resolve(reply);
            }
        });
        client.quit();
    }).catch(function (err) {
        client.quit();
        return err;
    });
};

exports.addRedisSet = addRedisSet;