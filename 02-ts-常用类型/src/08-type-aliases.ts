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