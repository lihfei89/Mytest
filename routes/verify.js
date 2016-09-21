var router = require('koa-router')();

router
    .get('/', async function (ctx, next) {
        console.log('----------get');
        console.log(token);
        console.log('----------');
        var token = ctx.query.token;

        if (token === "1") {
            ctx.body = {
                successed: true,
                data: {
                    name: 'pig',
                    age: 16,
                    msg: 'true'
                }
            };
        }
        else {
            ctx.body = {
                successed: false,
                data: {
                    msg: 'false false false'
                }
            };
        }
    })
    .post('/', async function (ctx, next) {
        console.log('post am i');
        var token = ctx.request.body.token;
        if (token === "1") {
            ctx.body = {
                successed: true,
                data: {
                    name: 'pig',
                    age: 16,
                    msg: 'true'
                }
            };
        }
        else {
            ctx.body = {
                successed: false,
                data: {
                    msg: 'false false false'
                }
            };
        }
    })
module.exports = router;