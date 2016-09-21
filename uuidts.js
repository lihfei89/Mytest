var uuid = require('uuid');
var fs = require('fs');

var guid;
var tempSou = 0;

var arr = {};
var resultSou = 0;
//var randomNum = Math.random() * 5;
//var listcount = parseInt(randomNum, 10);


var selMethod = 1;            //选择的方法
var execCount = 100000;         //执行的次数
var listcount = 5;　　　　　　　//集合的数量
for (var index = 0; index < listcount; index++) {
    arr[index] = 0;
}

var resultStr;


const start = new Date();
for (var i = 0; i < execCount; i++) {
    guid = uuid.v4();
    resultSou = getNeedNum(guid, selMethod);
    // console.log(`uuid value is :  ${guid}`);
    // console.log(`for mod number is   ：    ${tempSou}`);
    var result;
    result = resultSou % listcount;
    arr[result]++;
    // console.log('--------------------------------------------------');
}

console.log(`list Count is    :  ${listcount}`);
console.log(`select Method is :  ${selMethod}`);
resultStr = `list Count is    :  ${listcount} ||\r\n` + `select Method is :  ${selMethod} ||\r\n` + `exec Count is 　　　:   ${execCount}  ||\r\n`;
for (var index = 0; index < listcount; index++) {
    console.log(`${index} times  is      ${arr[index]}`);
    resultStr += `${index} times  is      ${arr[index]}  ||\r\n`;
}
const now =new Date();
const ms = new Date() - start;
console.log('start    :'  +start);
console.log('now    :'  +now);
console.log('times    ：' +  ms);

resultStr += `----------------------------- \r\n`;
fs.appendFile(__dirname + `/${execCount}/results${selMethod}.txt`, resultStr);

function getNeedNum(guid, selMethod) {
    var tempSou = 0;
    var randomNum = 0;
    if (selMethod === 4) {
        var random = Math.random() * 35;  // v4  生成32位UUID其中4位 -
        var listcount = parseInt(random, 10);
    }


    if (selMethod == 5) {
        tempSou = parseInt(guid);
        return tempSou;
    }

    for (var index = 0; index < guid.length; index++) {
        if (!isNaN(parseInt(guid[index]))) {
            if (selMethod == 1) {
                /*①  计算所有数字之和为取余数*/
                var tempI = parseInt(guid[index]);
                tempSou = tempI + tempSou;
            }
            else if (selMethod == 2) {
                /*② 取第一位 为取余数*/
                tempSou = parseInt(guid[index]);
                return tempSou;
            }

            else if (selMethod == 3) {
                /*③ 取最后一位*/
                tempSou = parseInt(guid[index]);
            }
            else if (selMethod == 4) {
                /*④　取随机一位*/
                tempSou = parseInt(guid[index]);
                if (parseInt(random, 10) === index) {
                    return tempSou;
                }
            }
        }
        else {
        }
    }
    return tempSou;
}

