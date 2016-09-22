

try {

    let ttt = `{"name":"zero"}`;
    console.log("->> ttt : " + ttt);
    var aaa = JSON.parse(ttt);
    console.log(aaa + " " + typeof aaa);


    var tt = '123';
    console.log(tt);
    var tt2 = 'true '
    console.log(tt2);
    var tt3 = '"123"';
    console.log(tt3);
    var tt4 = '{}';
    console.log(tt4);
    var tt5 = '[]';
    console.log(tt5);


    var aaa = '"1"';
    var bbb = '\'1\'';
    var ccc = '`1`';
    console.log(`${aaa} ${bbb} ${ccc}`);

    console.log("---------");
    var a = JSON.parse(tt); console.log(a + " " + typeof a);
    var b = JSON.parse(tt2); console.log(b + " " + typeof b);
    var c = JSON.parse(tt4); console.log(c + " " + typeof c);
    var d = JSON.parse(tt5); console.log(d + " " + typeof d);
    console.log("---------");

} catch (err) {
    console.log('a is false');
}
try {
    let ttt2 = `{"name":'zero'}`;
    console.log("->> ttt2: " + ttt2);
    var bbb = JSON.parse(ttt2);
    console.log(bbb + " " + typeof bbb);
} catch (err) {
    console.log('bbb is false');
}

// try {
//     var b = JSON.parse('1wee');
//     console.log(b);
// } catch (err) {
//     console.log('b is false');
// }
// try {
//     var c = JSON.parse('"fdasfa"');
//     console.log(c);
// } catch (err) {
//     console.log('c is false');
// }
// try {
//     var d = JSON.parse('{}');
//     console.log(d);
// } catch (err) {
//     console.log('d is false');
// }
// try {
//     var e = JSON.parse('{]');
//     console.log(e);
// } catch (err) {
//     console.log('e is false');
// }

// try {
//     var f = JSON.parse('[]');
//     console.log(f);
// } catch (err) {
//     console.log('f is false');
// }

// try {
//     var g = JSON.parse('$$');
//     console.log(g);
// } catch (err) {
//     console.log('g is false');
// }


// try {
//     var h = JSON.parse('12{}');
//     console.log(h);
// } catch (err) {
//     console.log('h is false');
// }

// try {
//     var i = JSON.parse('{12}');
//     console.log(i);
// } catch (err) {
//     console.log('i is false');
// }

// try {
//     var j = JSON.parse('"{12}"');
//     console.log(j);
// } catch (err) {
//     console.log('j is false');
// }

// try {
//     var k = JSON.parse('{12,qwe}');
//     console.log(k);
// } catch (err) {
//     console.log('k is false');
// }


// try {
//     var l = JSON.parse('"123"');
//     console.log(l);
// } catch (err) {
//     console.log('l is false');
// }
