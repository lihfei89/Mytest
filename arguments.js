function a(t1, t2, t3) {
    console.log(t1);
    console.log(t2);
    console.log(t3);
    if (t3 !== undefined && t3 !== 0) {
        console.log('-----value');
    }

    console.log(t3 !== 0);
    console.log(t3 !== undefined && t3 !== 0);
}

a(1, 2);