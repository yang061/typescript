type Fish1 = {
  name: string,
  swim: () => void
}

type Bird1 = {
  name: string,
  fly: () => void
}
// 使用类型谓词,方法 传进来的参数 + is + 类型

function isFish(pet: Fish1 | Bird1): pet is Fish1 {
  return (pet as Fish1).swim !== undefined
}


function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function processValue(value: any) {
  if (isNumber(value)) {
    // 有类型谓词，value 的类型被缩小为 number
    console.log(value.toFixed(2)); // 正确：value 的类型被缩小为 number
  } else {
    console.log('Invalid value');
  }
}

const numValue: number = 10;
processValue(numValue);