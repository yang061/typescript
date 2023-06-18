# 一、typescript入门

## 1.优化编译

### 1.1 解决TS和JS冲突问题

```typescript
`tsc- -init`生成tsconfig.json文件
```

### 1.2 自动编译

```typescript
`tsc --watch` 监听ts文件，以便实时编译为js文件
```

### 1.3 发出错误

```typescript
`tsc --noEmitOnError` 让ts在报错时，不会编译为js文件
```



## 2.显式类型

> 即 手工的给变量定义的类型。如果不按照定义的类型传递参数，ts会报错。

* **注意：**`ts`会自动推断变量的类型

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  // Date() 结果是字符串,new Date() 可以实例化为Date类型
  // greet("小杨", Date());
   greet("小杨",new Date());
```



## 3.降级编译

> 即 在编译时向下兼容浏览器。比如ES6在一些浏览器是不兼容的，就可以使用降级编译。

**方法：**在`tsconfig.json`中修改代码

```typescript
/* Language and Environment */
"target": "es5", 
```



## 4.严格模式



```typescript
/* Type Checking */
"strict": true,
"noImplicitAny": true, 
"strictNullChecks": true, 
```

* noImplicitAny

  > 打开该 noImplicitAny 标志将对类型隐式推断为，当
  >
  > 任何变量发出错误时都应用 any 类型。

* strictNullChecks

  > 默认情况下，值为 null 和 undefined 可分配给任何其他类型。
  >
  > 该strictNullChecks 标志，使得操作 null 和 undefined 更加明确，它使我们不用担心是否忘记处理
  >
  > null 和 undefined 。



# 二、typescript常用类型

## 1.**基元类型**

​	JavaScript有三个非常常用的原语： `string` ， `number` ，和` boolean `。每个在 TypeScript 中都有对应的类型。我们发现，这些名称与我们在 JavaScript 应用 typeof 返回的类型的名称相同：

- string 表示字符串值，如 "Hello, world"
- number 表示数字值，如 42 。
- boolean 只有两个值 true 和 false

​	类型名称 String , Number , 和 Boolean （以大写字母开头）是合法的，但指的是一些很少出现在代码中的**特殊内置类型**。对于类型，始终使用 string , number , 或 boolean 。

```typescript
let str:string = 'hello world'
let number:number = 22
let bool:boolean = true
```



## 2.数组

​	表达方式：`type[]`或`Array<type>`,type是任意合法的类型。

```typescript
//  arr里只能放number类型的数据
let arr:number[] =[1,2,3]
let arr2:Array<number> =[1,2,3] //<number> 里是泛型
arr2 = [] //可以通过

//  arr里只能放string类型的数据
let strArr:string[]=['a','b','c']
// strArr[1]=2 //报错：Type 'number' is not assignable to type 'string'.
```



## 3.any类型

​	any禁用所有的类型检查，但是不代表它不会报错，在编译后的js代码中也会出现报错的情况

> 相当于js，什么类型都可以用

* 想要关闭出现any的情况，可以在tsconfig.json中开启**noImplicitAny**。



## 4.变量上的类型注释

​	当你使用 const , var , 或声明变量时 let ，可以选择添加类型注释来显式指定变量的类型：

```typescript
// 类型注释
let myName:string = '张三'

// 自动推断类型
let myAge = 20
myAge ='haha' //报错Type 'string' is not assignable to type 'number'.
```

> TypeScript 不使用“左边的类型”风格的声明，比如 int x = 0; 类型注解总是在被输入的东西之后。



## 5.函数

### 5.1 参数类型注释

> ​	声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型。参数类型注释位于参数名称之后：

```typescript
function person(name:string){
  // name不定义类型就是any类型，在严格模式下不允许
  console.log(`hello,我是${name}`);
}
person('张三')
```

### 5.2 返回类型注释

> 与变量类型注释非常相似，通常不需要返回类型注释，因为 TypeScript 会根据其 return 语句推断函数的返回类型。
>
> 例子中的类型注释不会改变任何东西。某些代码库会出于文档目的明确指定返回类型，以防止意外更改或仅出于个人偏好。

```typescript
// 一般可以自动推断函数返回类型，除非为了防止别人修改
function getFavoriteColor():string{
  return `我的最喜欢的颜色是蓝色`
}
```

### 5.3 匿名函数

> 类似于自动判断类型

```typescript
// 这里没有类型注释，但是TypeScript可以发现错误
const names = ["Alice", "Bob", "Eve"];
// 函数上下文类型
names.forEach(function (s) {
console.log(s.toUpperCase());
});
// 上下文类型也适用于箭头函数
names.forEach((s) => {
console.log(s.toUpperCase());
})
```



## 6.对象类型

- 这指的是任何带有属性的 JavaScript 值，几乎是所有属性！要定义对象类型，我们只需列出其属性及其类型。

```typescript
// 打印坐标
function printCoord(pt: { x: number, y: number }) {
  console.log('坐标的x值是' + pt.x);
  console.log('坐标的y值是' + pt.y);
}
// 调用函数
printCoord({
  x: 3,
  y: 4
})

// 对象里的值是可选的 使用?(可选)，此时last的类型是string||undefined
function printName(obj: { first: string, last?: string }) {
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
})

// 不能多传参
printName({
  first: 'hell',
  last: 'o'
  fullName: 0
})
```



## 7.联合类型

- 联合类型是由两个或多个其他类型组成的类型，表示可能是这些类型中的任何一种的值。我们将这些类型中的每一种称为联合类型的成员。
- 联合类型使用时需要用代码缩小联合，就像在没有类型注释的 JavaScript 中一样。 当 TypeScript 可以根据代码结构为值推断出更具体的类型时，就会发生缩小

```typescript
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
```



## 8.类型别名

> 给类型定义一个名字，可以单独使用这个类型。使用`type`定义

* **注意：**`type`定义的只是类型，不是说等于这个值

```typescript
// 别名一般首字母大写
type People = {
  name: string,
  age: number
}
// 使用类型别名
function printPeople(p: People) {
  console.log('hello,我是' + p.name, '今年是' + p.age + '岁了');
}
printPeople({
  name: '张三',
  age: 20
})


type ID = number | string
function printId(id: ID) {

}
printId(1)
printId('hello')

// 过滤用户输入
type UserInputSanitizedString = string
function sanitizedInput(str: string): UserInputSanitizedString {
  return str.slice(0, 3)
}

let userInput = sanitizedInput('hello')
console.log('userInput', userInput);
```



## 9.接口

### 9.1 关键字和使用

* **作用：**定义类型

* **关键字：**interface

```typescript
interface Point {
x: number;
y: number;
}
function printCoord(pt: Point) {
console.log("坐标x的值是： " + pt.x);
console.log("坐标y的值是： " + pt.y);
}
printCoord({ x: 100, y: 100 });
```

### 9.2 类型别名和接口区别

1. 几乎所有可以使用接口（`interface`）定义的类型都可以用类型别名（`type`）定义

2. **接口**可以通过`extends`关键字进行拓展，类型别名可以通过`&`关键字进行拓展

```tsx
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
```

3. 在现有类型拓展中，**接口**可以通过**重新定义**进行添加字段；`type`方法在创建类型后就**不能**进行同名拓展（不能修改）

```tsx
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
```



## 10.类型断言

- 在遇到`typescript`不认识的类型时，可以使用类型断言
- 与类型注释一样，类型断言由编译器删除，**不会影响**代码的运行时行为。
- 还可以使用**尖括号语法**（除非代码在 .tsx 文件中），它是等效的：

```tsx
// 如果你正在使用 document.getElementById ，TypeScript 只知道这将返回某种类型的
// HTMLElement ，但你可能知道你的页面将始终具有 HTMLCanvasElement 给定 ID 的值 。

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas')

// 在我们不知道类型是什么时，我们可以把它定义为一个差不多的类型
const x = ('hello' as unknown) as number
```



## 11.文字类型

​	文字类型是把一个字符串变为一个类型，定义了就不能修改，使用方法如下：

```typescript
let x: "hello" = "hello";
// 正确
x = "hello";
// 错误
x = "howdy";  //Type “howdy” is not assignable to type "hello",这里的hello已经是一种类型
```

**注意：**如果像上面使用，文字类型并不是很有价值

### 11.1 作用

文字类型作用之一：联合使用，可以**细化变量类型**（缩小范围）

如：

```typescript
function printText(s: string, alignment: "left" | "right" | "center") {
// ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre"); //centre 不是"left" | "right" | "center"中的一个，所以报错


function compareFn(a: number, b: number): 0 | 1 | -1 {
  return a === b ? 0 : a > b ? 1 : -1
}
console.log(compareFn(5, 2)); //1
```

文字类型可以和非文字类型结合使用：

```typescript
interface Options {
width: number;
}
function configure(x: Options | "auto") {
// ...
}
configure({ width: 100 });
configure("auto");
configure("automatic"); //报错


// 布尔文字类型
// let b2: true = b //Cannot find name 'b'.
let b1: true = true //只能分配为true
```

### 11.2 文字推理

​	当你使用**对象初始化变量**时，TypeScript 假定该对象的属性稍后可能会更改值。

如:

```typescript
const obj1 = {
  count: 0
}
// 没有问题,不会报错
if (true) {
  obj1.count = 1
}

function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {
// ...
}
const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method); //Argument of type 'string' is not assignable to parameter of type '"GET" | "POST" | "GUESS"'.
```

> 在上面的例子 req.method 中推断是 string ，不是 "GET" 。因为代码可以在创建 req 和调用之间进行评估，TypeScript 认为这段代码有错误。

**解决方法：**

1. **可以通过在任一位置添加类型断言来更改推理：**

```ts
function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {
  // ...
}
// 过在任一位置添加类型断言来更改推理：
// 断言方法1
// const req = { url: 'https://example.com', method: 'GET' as 'GET' };
// handleRequest(req.url, req.method);
// 断言方法2
const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method as 'GET');
```

> 方案 1 表示“我打算 req.method 始终拥有文字类型 "GET" ”，从而防止之后可能分配 "GUESS" 给该字段。
>
> 方案 2 的意思是“我知道其他原因 req.method 具有 "GET" 值”。

2. **可以使用** `as const` **将整个对象转换为类型文字：**

```ts
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

> 该 `as const` 后缀就像 const 定义，定义后不能修改，确定了类型`req.method`是`GET`而不是`string`



## 12.null和undefined类型

`null`是不存在；`undefined`是未定义|未初始化

这些类型的行为取决于您是否设置 `strictNullChecks` 选择

* `strictNullChecks：false`关闭

> 即没有进行非空检查

* `strictNullChecks：true`打开

> 需要在对该值使用方法或属性之前测试这些值，即会进行非空检查

如：

```ts
function doSth(x: string | null) {
  if (x === null) {
    // 做一些事情
  } else {
    console.log('hello', +x.toUpperCase());
  }
}
```

* 非空断言运算符（ `! 后缀`）

  `! `在任何表达式之后写入实际上是一种**类型断言**，即该值`不是 null or undefined` ：

```ts
// !代表进行非空判断,?代表可选
function liveDangerously(x?: null | number) {
  console.log(x!.toFixed()); //'x' is possibly 'null'.
}
```



## 13.枚举

* **关键字：**`enum`

```ts
// ts源码
enum Direction {
Up = 1,
Down,
Left,
Right,
}
// 访问枚举变量 Direction.Up
console.log(Direction.Up) // 1

//编译后的js代码
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Left);
```



## 14.不太常见的原语

* **bigint:** 非常大的整数
* **symbol:**通过函数创建全局唯一引用

### 14.1 bigint



### 14.2 symbol
