const Koa = require('koa');
const app = new Koa();
//const net = require('./netts');
const convert = require('koa-convert'); 
const router = require('./routes');
const bodyparser = require('koa-bodyparser')();
app.use(convert(bodyparser));

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});




app.use(router.routes(), router.allowedMethods());


app.listen(3003, function () {
    console.log('this server run at 3003');
})
app.listen(3004, function () {
    console.log('this server run at 3004');
})
app.listen(3005, function () {
    console.log('this server run at 3005');
})


