"use strict";
function move(animal) {
    if ("swim" in animal) {
        // 两种可能
        // animal: Fish | Human
        // 使用类型断言解决
        return animal.swim();
    }
    else {
        // animal: Bird | Human
        return animal.fly();
    }
}
