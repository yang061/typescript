"use strict";
function example(x, y) {
    if (x === y) {
        // 能走该分支说明，x和y都是string类型，所以都能调用toUpperCase
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log('x', x);
        console.log('y', y);
    }
}
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyValue({ value: 5 }, 6);
multiplyValue({ value: null }, 6);
multiplyValue({ value: undefined }, 6);
// multiplyValue({ value: '5' }, 6); //报错
