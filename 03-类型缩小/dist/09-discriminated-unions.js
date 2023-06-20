"use strict";
// interface Shape {
//   // 防止用户输入除circle和square外的类型
//   kind: 'circle' | 'square',
//   // 如果kind是square，radius应该是不存在的，所以是可选的
//   radius?: number
//   // 如果kind是circle，sidLength应该是不存在的，所以是可选的
//   sideLength?: number
// }
// function handleShape(shape: Shape) {
//   if (shape.kind === 'rect') {
//     // kind不是'circle' | 'square'，会报错
//   }
// }
function getArea(shape) {
    // return Math.PI * shape.radius ** 2   //'shape.radius' is possibly 'undefined'.
    // return Math.PI * shape.radius! ** 2   //可以在可选变量后加入！，代表一定存在,但是不符合逻辑，用户可能不需要这个参数
    // 解决方法
    // 类型缩小
    // 写法1
    // if (shape.kind === 'circle') {
    //   return Math.PI * shape.radius ** 2
    // }
    //写法2
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}
