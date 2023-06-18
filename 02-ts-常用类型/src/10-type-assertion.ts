// 如果你正在使用 document.getElementById ，TypeScript 只知道这将返回某种类型的
// HTMLElement ，但你可能知道你的页面将始终具有 HTMLCanvasElement 给定 ID 的值 。

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas')

// 在我们不知道类型是什么时，我们可以把它定义为一个差不多的类型
const x = ('hello' as unknown) as number