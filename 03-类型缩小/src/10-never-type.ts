
// 为了解决getArea函数中会报错的问题，修改接口
interface Circle1 {
  kind: 'circle',
  radius: number
}

interface Square1 {
  kind: 'square',
  sideLength: number
}

interface Triangle {
  kind: 'triangle',
  sideLength: number
}

type Shape1 = Circle | Square | Triangle

function getArea1(shape: Shape1) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2

    default:
      //never可以做穷尽性检查，如果shape的类型只有circle | square，那default中类型应该是never
      //如果shape的类型不只有circle | square，说明在default中，还有其他类型，就会报错：不能将该类型(剩下的类型)分配给never

      const _exhaustiveCheck: never = shape //'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck
  }
}