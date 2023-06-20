function printAll(strs: string | string[] | null) {
  // 为了不出现类型错误，我们需要把类型缩小
  if (typeof strs === 'object') {
    // strs是数组
    // 报错: 'strs' is possibly 'null'，因为typeof null 也是'object'
    for (const s of strs) {
      console.log(s);
    }
  } else if (strs === 'string') {
    // strs为字符串
  } else {
    // strs为null
  }
}