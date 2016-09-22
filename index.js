var client = require('./lib/ttt.js');
console.log(client);

async function a() {
    var res = await client.initRedis();
}

a();
