// 主要用于枚举
let x1: 'hello' = 'Hello'
// error TS2588: Cannot assign to 'x' because it is a constant.
// x = 'word'
console.log(x1);

function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {
  // ...
}
// 过在任一位置添加类型断言来更改推理：
// 断言方法1
// const req = { url: 'https://example.com', method: 'GET' as 'GET' };
// handleRequest(req.url, req.method);
// 断言方法2
// const req = { url: 'https://example.com', method: 'GET' };
// handleRequest(req.url, req.method as 'GET');

// 使用 as const 将整个对象转换为类型文字：
const req = { url: 'https://example.com', method: 'GET' } as const;
handleRequest(req.url, req.method);


function compareFn(a: number, b: number): 0 | 1 | -1 {
  return a === b ? 0 : a > b ? 1 : -1
}
console.log(compareFn(5, 2)); //1

// 布尔文字类型
// let b2: true = b //Cannot find name 'b'.
let b1: true = true //只能分配为true

// 类型推断
const obj1 = {
  count: 0
}
// 没有问题,不会报错
if (true) {
  obj1.count = 1
}
