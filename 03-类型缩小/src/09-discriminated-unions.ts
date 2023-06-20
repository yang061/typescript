// interface Shape {
//   // 防止用户输入除circle和square外的类型
//   kind: 'circle' | 'square',
//   // 如果kind是square，radius应该是不存在的，所以是可选的
//   radius?: number
//   // 如果kind是circle，sidLength应该是不存在的，所以是可选的
//   sideLength?: number
// }

// 为了解决getArea函数中会报错的问题，修改接口
interface Circle {
  kind: 'circle',
  radius: number
}

interface Square {
  kind: 'square',
  sideLength: number
}

type Shape = Circle | Square
// function handleShape(shape: Shape) {
//   if (shape.kind === 'rect') {
//     // kind不是'circle' | 'square'，会报错
//   }
// }

function getArea(shape: Shape) {
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
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
  }
}