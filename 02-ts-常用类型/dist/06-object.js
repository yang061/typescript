"use strict";
// 打印坐标
function printCoord(pt) {
    console.log('坐标的x值是' + pt.x);
    console.log('坐标的y值是' + pt.y);
}
// 调用函数
printCoord({
    x: 3,
    y: 4
});
// 对象里的值是可选的 使用?(可选)，此时last的类型是string||undefined
function printName(obj) {
    // console.log(obj.first);
    // console.log(obj.last);
    // 处理undefined的情况
    // if (obj.last !== undefined) {
    //   console.log(obj.last.toUpperCase())
    // }
    // 使用现代JavaScript语法的安全替代方案：
    // 当obj.last为undefined不执行代码toUpperCase()
    console.log(obj.last?.toUpperCase());
}
printName({
    first: 'hell',
});
// 不能多传参
printName({
    first: 'hell',
    last: 'o',
    fullName: 0
});
