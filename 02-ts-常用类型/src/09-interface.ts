interface Point {
  x: number,
  y: number
}

function printCoord(pt: Point) {

}
// 接口使用
printCoord({
  x: 100,
  y: 200
})

// 类型拓展--接口拓展
interface Animal {
  name: string
}
// 在Animal的类型基础再添加新的类型属性
interface Bear extends Animal {
  // 是否喜欢蜂蜜
  honey: boolean
}

// 拓展接口中含有honey属性，不传递就会报错
const bear: Bear = {
  name: 'Tom',
  honey: true
}

console.log(bear.name);
console.log('honey', bear.honey);

// 类型拓展--类型别名
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear: Bear = {
  name: 'be',
  honey: false
}

console.log('bear', bear);

// 向现有类型添加字段
// 1.接口方法
interface MyDog {
  name: string
}

interface MyDog {
  age: number
}
// 如果只写一个属性name,会报错，必须要name,age都有
const w: MyDog = {
  name: '旺财',
  age: 1
}

// 2.type方法。在创建类型后不能进行同名拓展，不能修改
type MyDog = {
  name: string
}

// 报错：error TS2300: Duplicate identifier 'MyDog'. 
type MyDog = {
  age: number
}    