var router = require('koa-router')();

router
    .get('/', async function (ctx, next) {
        console.log('i am get');
        ctx.body = require('../pigs/t1.json');
    })
    .post('/', async function (ctx, next) {
        console.log('i am  post');
        //ctx.body = require('../pigs/t1.json');
        ctx.body = ctx.request.body;
    });


function convertToQuery(json) {
    console.log(json);
    var strTemp = JSON.stringify(json).slice(1, -1);
    var strQuery = '?';
    strTemp.split(',').forEach(function (obj) {
        strQuery += obj.split(':')[0].slice(1, -1) + "=" + obj.split(':')[1].slice(1, -1) + "&";
    });

    console.log(strQuery.slice(0, -1));
}


module.exports = router;
