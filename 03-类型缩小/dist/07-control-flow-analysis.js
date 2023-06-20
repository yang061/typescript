"use strict";
function example1() {
    let x;
    x = Math.random() < 0.5;
    // let x:boolean
    console.log(x);
    // 下面的if判断代码执行时，x的类型已经变为string|number了，boolean已经被覆盖了
    if (Math.random() < 0.5) {
        x = 'hello';
        // x:string
        console.log('x');
    }
    else {
        x = 100;
        // x:number
        console.log(x);
    }
    return x;
}
let y = example1();
y = 'hello';
y = 100;
y = true; //Type 'boolean' is not assignable to type 'string | number'.
