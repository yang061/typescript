function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
// Date() 结果是字符串,new Date() 可以实例化为Date类型
// greet("小杨", Date());
greet("小杨", new Date());
var uname = "小杨";
