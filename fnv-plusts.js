var fnv = require('fnv-plus');

var astring = 'hello world';
var ahash32 = fnv.hash(astring);
var ahash64 = fnv.hash(astring, 64);    // 64-bit hash specified
console.log(`${astring} is origin and 32 byte:---- ${ahash32.value} or 64 byte:------${ahash64.value}`)

var ha32;
var ha64;

for (var index = 0; index < 100; index++) {
    ha32=fnv.hash(index);
    ha64=fnv.hash(index,64);
    console.log(`${index} is origin and 32 byte:---- ${ha32.value} or 64 byte:------${ha64.value}`)

}
