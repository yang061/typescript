function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue(new Date()) //Sun, 18 Jun 2023 09:55:01 GMT
logValue('hello') //HELLO