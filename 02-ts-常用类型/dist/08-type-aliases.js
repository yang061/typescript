"use strict";
// 使用类型别名
function printPeople(p) {
    console.log('hello,我是' + p.name, '今年是' + p.age + '岁了');
}
printPeople({
    name: '张三',
    age: 20
});
function printId(id) {
}
printId(1);
printId('hello');
function sanitizedInput(str) {
    return str.slice(0, 3);
}
let userInput = sanitizedInput('hello');
console.log('userInput', userInput);
