var router = require('koa-router')();

router
    .get('/', async function (ctx, next) {
        ctx.body = {
            data: {
                uuid: "2222",
                token: "1"
            },
            successed: true
        };
    })
    .post('/', async function (ctx, next) {
        ctx.body = {
            data: {
                uuid: "2222",
                token: "1"
            },
            successed: true
        };
    });
module.exports = router;