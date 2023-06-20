"use strict";
function getArea1(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            //never可以做穷尽性检查，如果shape的类型只有circle | square，那default中类型应该是never
            //如果shape的类型不只有circle | square，说明在default中，还有其他类型，就会报错：不能将该类型(剩下的类型)分配给never
            const _exhaustiveCheck = shape; //'Triangle' is not assignable to type 'never'.
            return _exhaustiveCheck;
    }
}
