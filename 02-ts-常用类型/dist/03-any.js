"use strict";
// any禁用所有的类型检查，但是不代表它不会报错，在编译后的js代码中也会出现报错的情况
let obj = { x: 0 };
// 以下代码行都不会抛出编译器错误。
// 使用'any'将禁用所有进一步的类型检查
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n = obj;
