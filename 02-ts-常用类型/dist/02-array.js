"use strict";
//  arr里只能放number类型的数据
let arr = [1, 2, 3];
let arr2 = [1, 2, 3]; //<number> 里是泛型
arr2 = []; //可以通过
//  arr里只能放string类型的数据
let strArr = ['a', 'b', 'c'];
// strArr[1]=2 //报错：Type 'number' is not assignable to type 'string'.
