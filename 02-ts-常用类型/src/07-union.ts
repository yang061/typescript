function printId(id: number | string) {
  if (typeof id === 'number') {
    console.log(id)
  } else {
    console.log(id.toUpperCase())
  }
}

printId(1)
printId('hello')
// printId({ my: 101 })

// 联合类型使用
function hiPeople(x: string[] | string) {
  // 判断类型
  if (Array.isArray(x)) {
    console.log('hi,' + x.join(' and '));
  } else {
    console.log('hi,' + x.toUpperCase())
  }
}

hiPeople('a')
hiPeople(['a', 'b'])

// 取前三个,返回值类型也是number[]或string,ts自动推断
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3)
}

console.log(getFirstThree([1, 2, 3, 4]));
console.log(getFirstThree('hello'));