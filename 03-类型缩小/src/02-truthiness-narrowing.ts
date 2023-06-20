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