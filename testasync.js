const Koa = require('koa');
const app = new Koa();


const router = require('./routes');


app.use(async (ctx,next)=>{
    console.log(`I'm first`);

    console.log(`I'm second`);
    await console.log(`I'm third`);

    await next();

    console.log(`I'm lastest`);
});

app.use(async (ctx,next)=>{
    console.log(`I'm first1`);
    await next();
    console.log(`I'm laster`);
})


app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


app.use(router.routes(), router.allowedMethods());


app.listen(3003,function(){
    console.log('this server run at 3003');
})