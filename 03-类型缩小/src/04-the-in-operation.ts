type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // 两种可能
    // animal: Fish | Human
    // 使用类型断言解决
    return (animal as Fish).swim();
  } else {
    // animal: Bird | Human
    return (animal as Bird).fly();
  }
}