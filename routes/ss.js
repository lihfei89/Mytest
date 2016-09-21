var router = require('koa-router')();

router
    .get('/', async function (ctx, next) {
        ctx.body = 's22';
    })
    .post('/',async function (ctx,next){
        ctx.body='{"ddd":"ssss"}';
    })
module.exports = router;
