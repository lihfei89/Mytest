var router = require('koa-router')();

router
    .get('/', async function (ctx, next) {
        ctx.body = { name: 'pig', action: 'gun', successed: true };
    })
    .post('/', async function (ctx, next) {
        ctx.body = { name: 'pig', action: 'fly', successed: true };
    })
module.exports = router;
