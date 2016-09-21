
var redis = require('redis');

async function addRedisSet(key, value) {
    let client = redis.createClient();
    return new Promise(function (resolve, reject) {
        client.sadd(key, value, function (err, reply) {
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

async function getRedisSet(key) {
    let client = redis.createClient();
    return new Promise(function (resolve, reject) {
        client.smembers(key, function (err, reply) {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        });
        client.quit();
    }).catch(function (err) {
        client.quit();
        return err;
    })
};
async function addRedisString(key, value) {
    let client = redis.createClient();
    return new Promise(function (resolve, reject) {
        client.set(key, value, function (err, reply) {
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
    })
};


async function getRedisString(key) {
    let client = redis.createClient();
    return new Promise(function (resolve, reject) {
        client.get(key, function (err, reply) {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        });
        client.quit();
    }).catch(function (err) {
        client.quit();
        return err;
    })
};



async function initRedis() {
    let client = redis.createClient();
    return new Promise(function (resolve, reject) {
        client.flushdb(function (err, reply) {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        }).catch(function (err) {
            client.quit();
            return err;
        })
        client.quit();
    });
}



exports.addRedisString = addRedisString;
exports.getRedisString = getRedisString;
exports.getRedisSet = getRedisSet;
exports.addRedisSet = addRedisSet;
exports.initRedis = initRedis;