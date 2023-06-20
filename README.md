# 一、ts入门

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



# 二、ts常用类型

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

### 14.1 bigint(ES2020及以上)

​	用于非常大的整数的原语 BigInt 

```ts
// 通过bigint函数创建bigint
const oneHundred: bigint = BigInt(100);
// 通过文本语法创建BigInt
const anotherHundred: bigint = 100n;
```

### 14.2 symbol

​	用于通过函数创建全局唯一引用

```ts
const firstName = Symbol("name");
const secondName = Symbol("name");
if (firstName === secondName) {
// 这里的代码不可能执行,因为一直返回false
}
```



# 三、ts类型缩小

* **作用：**处理`联合类型`变量

​	有一个名为 `padLeft` 的函数，需要实现下列功能：如果 `padding` 是 `number` ，它会将其视为我们想要添加到` input` 的空格数；如果 `padding `是 `string `，它只在 `input `上做 `padding` 。让我们尝试实现：

```ts
function padLeft(padding: number | string, input: string) {
    //返回一个数组实例个数加1的空格，拼接在input的前面
	return new Array(padding + 1).join(" ") + input; 
}
```

>  **注意：**
>
> 在 `padding + 1` 处我们遇到错误。
>
> TypeScript 警告我们，运算符 `+ `不能应用于类型` string | number `和 `number` ，这是对的。换句话说，我们没有明确检查` padding` 是否为 `number `，也没有处理它是` string` 的情况

**修改如下：**

```ts
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
}
    return padding + input;
}
```

* 在我们的if检查中，`TypeScript`看到` typeof padding ==="number" `，并将其理解为一种特殊形式的代码，称为类型保护。

* 它查看这些**特殊的检查**（称为类型防护）和**赋值**；将类型细化为**比声明的更具体的类型的过程**被称为缩小。

  > **下面是缩小类型的方法**

## 3.1 typeof 类型守卫

​	TypeScript 期望`typeof`返回一组特定的类型字符串，可以理解为缩小在不同分支的类型。

```ts
typeof strs === "string"
                "number"
                "bigint"
                "boolean"
                "symbol"
                "undefined"
                "object"
                "function"
```
例子如下：
```ts
function printAll(strs: string | string[] | null) {
  // 为了不出现类型错误，我们需要把类型缩小
  if (typeof strs === 'object') {
    // strs是数组
    // 报错: 'strs' is possibly 'null'，
    //因为typeof null 也是'object' 这是一个历史遗留问题
    for (const s of strs) {
      console.log(s);
    }
  } else if (strs === 'string') {
    // strs为字符串
  } else {
    // strs为null
  }
}
```



## 3.2 真值缩小
```ts
function getUsersOnlineMessage(numUsersOnline: number) {
if (numUsersOnline) {
return `现在共有 ${numUsersOnline} 人在线!`;
}
return "现在没有人在线. :(";
}
```
在 JavaScript 中，像这样的 if 条件语句，首先将它们的条件“强制”转化为 boolean 以使其有意义，然后根据结果是 true 还是 false 来选择它们的分支。像这面这些值：

```tsx
0
NaN
"" （空字符串）
0n （ bigint 零的版本）
null
undefined
```

以上所有值强制都转换为 false ，其他值被强制转化为 true 。

* **其他方法：**
  1. 使用`Boolean`,传入非空字符串就返回`true`
  2. 使用`!!`,第一个`!`可以把对象转换为**文字布尔类型**，第二个`!`可以把类型转换为真正的`true`或`false`

```tsx
// 这两个结果都返回 true
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true, value: true
```

* 现在可以解决3.1d=遗留的问题

```ts
// 真值缩小
function printsAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    // 首先进行真值检查，能通过检查说明是数组
    for (let s in strs) {
      console.log('s', s);
    }
  } else if (typeof strs === 'string') {
    // 字符串
    console.log(strs);
  } else {
    // 为null
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number) {
  if (!values) {
    return values
  } else {
    // 存在
    return values.map((x) => {
      return x * factor
    })
  }
}

console.log(multiplyAll([2, 3, 4], 5)); //[ 10, 15, 20 ]
console.log(multiplyAll(undefined, 5)); //undefined
```



## 3.3 等值缩小

typescript 也使用分支语句做 `===`  ，` !== `，` == `，和` != `等值检查，来实现类型缩小。例如：

* `!= null`可以排除为`null`和`undefined`的情况

  > 因为在**真值缩小**中，我们知道`null`和`undefined`值都为`false`，所以使用不严格不等于可以同时排除两个情况。

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // 能走该分支说明，x和y都是string类型，所以都能调用toUpperCase
    x.toUpperCase()
    y.toUpperCase()
  } else {
    console.log('x', x);
    console.log('y', y);
  }
}

interface Container {
  value: number | null | undefined
}

function multiplyValue(container: Container, factor: number) {
    // 从类型中排除了undefined 和 null
    if (container.value != null) {
    console.log(container.value);
    // 现在我们可以安全地乘以“container.value”了
    container.value *= factor;
}
}

multiplyValue({ value: 5 }, 6)
multiplyValue({ value: null }, 6)
multiplyValue({ value: undefined }, 6)
//前三个通过
multiplyValue({ value: '5' }, 6); //报错

```



## 3.4 in操作符缩小

​	用于确定**对象**是否具有**某个名称的属性**：` in 运算符`。以此来缩小潜在类型的范围。

​	` "value" in x` 。这里的 `"value" `是**字符串文字**， `x `是**联合类型**。

* 对于值为 `true` 的分支，它要求 `x` 具有**可选**或**必需属性**的类型的值。这意味着 `x` 可能是一个**对象**，并且该对象可以包含一个属性名为 `"value"` 的属性。这个属性可以是可选的，也可以是必需的。

  > 换句话说，`x` 可能是一个具有 `"value"` 属性的对象，该属性可以有值也可以没有值。

* 对于值为 `false` 的分支，它要求具有**可选**或**缺失属性**的类型的值。这意味着 `x` 可能是一个对象，并且该对象不包含属性名为 `"value"` 的属性。

  > ​	换句话说，`x` 可能是一个没有 `"value"` 属性的对象，但它仍然可以具有其他可选属性或不包含任何可选属性。

1. 具有可选或必需的 `"value"` 属性的对象：

```ts
type ObjectWithValue = {
  value?: string; // 可选属性,可以不传递value属性
} | {
  value: string; // 必需属性
};

const obj1: ObjectWithValue = { value: "Hello" };

//下面的value是属性名称
if ("value" in obj1) {
  console.log(obj1.value); // 输出: Hello
}

```

2. 不包含 `"value"` 属性但可能有其他可选属性的对象：

```ts
type ObjectWithoutValue = {
  otherProp?: number; // 其他可选属性
};

const obj2: ObjectWithoutValue = { otherProp: 10 };

if ("value" in obj2) {
  //如果obj2中有value属性，才会执行
  console.log(obj2.value); // 不会执行，因为 obj2 没有 "value" 属性
} else {
  console.log("obj2 没有 value 属性"); // 输出: obj2 没有 value 属性
}

```

​	**其他例子：**

```ts
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim()
  }
  return animal.fly()
}
```

​	另外，可选属性还将存在于缩小的两侧，例如，人类可以游泳和飞行（使用正确的设备），因此应该出现在 in 检查的两侧：

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // 两种可能
    // animal: Fish | Human
    // 使用类型断言解决
    return (animal as Fish).swim();
  } else {
    // animal: Bird | Human
    return (animal as Bird).fly();
  }
}
```



## 3.5 instanceof 操作符缩小

* **关键字：**`instanceof`
* **作用**：检查一个值是否是另外一个值的实例

如：

```ts
x instanceof Foo //检查x的原型链中是否有Foo。prototype
```

**类型缩小例子：**

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue(new Date()) //Sun, 18 Jun 2023 09:55:01 GMT
logValue('hello') //HELLO
```



## 3.6 分配缩小

​	当我们为任何变量赋值时，TypeScript 会**查看赋值的右侧**并适当**缩小左侧**。

如下列例子：

```ts
// ts自动检测出x的类型。 
// let X : string | number
let x = Math.random() < 0.5 ? 10 : 'ok'
console.log(x);
// let x:number
x = 1
console.log(x);
// let x:string
x = 'okk'

console.log(x);

// 类型在第一次的时候已经固定了，除非你去修改
// let x : boolean
// x = true // Type 'boolean' is not assignable to type 'string | number'.
```



## 3.7 控制流分析

​	它通过分析**条件语句**（比如 if、switch）和**循环语句**（比如 for、while），以及**函数调用**和**返回值**，来判断变量在不同代码块中的类型可能会发生变化。

​	在 TypeScript 中，控制流分析用于确定**变量的类型**在**不同代码块**中的变化。当条件语句的结果或函数的返回值会影响变量的类型时，TypeScript 可以根据代码的逻辑路径来推断变量的类型。

​	总结起来，控制流分析就是根据代码的执行路径，推断变量在不同代码块中的类型变化，以提供更准确的类型检查和帮助开发人员编写可靠的代码。

**例子1：**

```ts
function example1() {
  let x: string | number | boolean //x的类型有三种
  x = Math.random() < 0.5
  // let x:boolean,x的类型被缩小为boolean
  console.log(x);
  // 下面的if判断代码执行时，x的类型已经变为string|number了，boolean已经被覆盖了
  if (Math.random() < 0.5) {
    x = 'hello'
    // x:string
    console.log('x');
  } else {
    x = 100
    // x:number
    console.log(x);
  }
  return x
}

let y = example1()
y = 'hello'
y = 100
y = true //Type 'boolean' is not assignable to type 'string | number'.
```

**例子2：**

```ts
function example(flag: boolean) {
  let x: number | string;

  if (flag) {
    x = 10;
    // 在这个分支中，x 的类型被推断为 number
  } else {
    x = "hello";
    // 在这个分支中，x 的类型被推断为 string
  }

  return x;
}

const result = example(true);
// result 的类型被推断为 number

console.log(result.toFixed(2));
// 这里可以安全地调用 toFixed 方法，因为 TypeScript 知道 result 是一个 number 类型

```



## 3.8 使用类型谓词

​	类型谓词是一种在TypeScript中用于**缩小变量类型范围**的语法。通过使用类型谓词，我们可以在特定的条件下，告诉TypeScript编译器某个变量的更具体的类型。

​	类型谓词的基本语法是一个**断言函数**，它返回一个**布尔值**。如果断言函数返回true，TypeScript编译器会将变量的类型缩小为断言的类型。

​	谓词的形式是 `parameterName is Type` ，其中`parameterName `必须是当前函数签名中的参数名称

**存在类型谓词：**

```ts
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function processValue(value: any) {
  if (isNumber(value)) {
    // 有类型谓词，value 的类型被缩小为 number
    console.log(value.toFixed(2)); // 正确：value 的类型被缩小为 number
  } else {
    console.log('Invalid value');
  }
}

const numValue: number = 10;
processValue(numValue);
```

**例子：**

```ts
type Fish = {
    name: string
    swim: () => void
}
type Bird = {
    name: string
    fly: () => void
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}
//函数内部通过检查 pet 的属性 swim 是否存在来进行判断，如果存在，则说明它是一只鱼。


function getSmallPet(): Fish | Bird {
    let fish: Fish = {
        name: 'gold fish',
        swim: () => {
        }
    }
    let bird: Bird = {
        name: 'sparrow',
        fly: () => {
        }
    }
    return true ? bird : fish
}
// 这里 pet 的 swim 和 fly 都可以访问了
let pet = getSmallPet()
if (isFish(pet)) {
    //由于我们在 isFish 函数中使用了类型谓词 pet is Fish，TypeScript 将正确地缩小 pet 的类型为 Fish，因此我们可以安全地调用 pet.swim() 方法。
    pet.swim()
} else {
    //由于 pet 不是鱼类型，因此 TypeScript 推断 pet 的类型为 Bird，因此我们可以安全地调用 pet.fly() 方法。
    pet.fly()
}
```



## 3.9 受歧视的 unions

```ts
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
```



## 3.10 never类型与穷尽性检查

​	TypeScript将使用一个 never 类型来代表一个不应该存在的状态。

​	`never` 类型可以分配给每个类型；但是，没有任何类型可以分配给never（除了never本身）。这意味着你可以使用缩小并依靠 never 的出现在 switch 语句中做详尽的检查。

```ts

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
```

