var router = require('koa-router')();

router
    .get('/', async function (ctx, next) {
        // ctx.state = {
        //     title: '{ "name": "p1", "age": "22" }'
        // };
        // await ctx.render('index', {
        // });
        ctx.body = { "name": "p1", "age": "22" };
    })
    .post('/', async function (ctx, next) {
        console.log(ctx.request.body);
        ctx.body = { "name": "w1", "age": "22" };
    });

module.exports = router;
