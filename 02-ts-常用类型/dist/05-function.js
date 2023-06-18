"use strict";
function person(name) {
    // name不定义类型就是any类型，在严格模式下不允许
    console.log(`hello,我是${name}`);
}
person('张三');
// 一般可以自动推断函数返回类型，除非为了防止别人修改
function getFavoriteColor() {
    return `我的最喜欢的颜色是蓝色`;
}
// 匿名函数
const names = ['张三', '李四', '王五'];
names.forEach((name) => {
    console.log(name.toUpperCase());
});
