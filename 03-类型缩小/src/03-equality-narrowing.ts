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
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor
  }
}

multiplyValue({ value: 5 }, 6)
multiplyValue({ value: null }, 6)
multiplyValue({ value: undefined }, 6)

// multiplyValue({ value: '5' }, 6); //报错
