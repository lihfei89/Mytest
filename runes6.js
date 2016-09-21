
console.log(`i am es6`);

var res = Promise.resolve('1').then(function(res){
    console.log(res);
})

console.log(res);