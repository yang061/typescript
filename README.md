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