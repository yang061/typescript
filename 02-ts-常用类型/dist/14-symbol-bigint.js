"use strict";
//es2020以上才能使用,需要在tsconfig.json中把target变为es2020
const oneHundred = BigInt(100);
console.log(oneHundred); //100n
const firstName = Symbol('name');
const secondName = Symbol('name');
// : This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
if (firstName === secondName) {
    console.log('ok');
}
