"use strict";
// 使用类型谓词,方法 传进来的参数 + is + 类型
function isFish(pet) {
    return pet.swim !== undefined;
}
function isNumber(value) {
    return typeof value === 'number';
}
function processValue(value) {
    if (isNumber(value)) {
        // 有类型谓词，value 的类型被缩小为 number
        console.log(value.toFixed(2)); // 正确：value 的类型被缩小为 number
    }
    else {
        console.log('Invalid value');
    }
}
const numValue = 10;
processValue(numValue);
