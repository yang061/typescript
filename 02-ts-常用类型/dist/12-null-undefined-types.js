"use strict";
let x11 = undefined;
let y22 = null;
function doSth(x) {
    if (x === null) {
        // 做一些事情
    }
    else {
        console.log('hello', +x.toUpperCase());
    }
}
// !代表进行非空判断,?代表可选
function liveDangerously(x) {
    console.log(x.toFixed()); //'x' is possibly 'null'.
}
