// ts自动检测出x的类型。 let X : string | number
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