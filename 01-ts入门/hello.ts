function greet(person, date:Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  // Date() 结果是字符串,new Date() 可以实例化为Date类型
  // greet("小杨", Date());
   greet("小杨",new Date())
  
   let uname = "小杨";