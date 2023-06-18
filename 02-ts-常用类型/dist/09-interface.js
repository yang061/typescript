"use strict";
function printCoord(pt) {
}
// 接口使用
printCoord({
    x: 100,
    y: 200
});
// 拓展接口中含有honey属性，不传递就会报错
const bear = {
    name: 'Tom',
    honey: true
};
console.log(bear.name);
console.log('honey', bear.honey);
const bear = {
    name: 'be',
    honey: false
};
console.log('bear', bear);
// 如果只写一个属性name,会报错，必须要name,age都有
const w = {
    name: '旺财',
    age: 1
};
