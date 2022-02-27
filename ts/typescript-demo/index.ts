//  javascript  的数据类型 7
//  原始的数据类型  null undefined Number Boolean String Symbol (BigInt)
//  Object

// ts 需要编译之后才能正常运行在浏览器或者node环境下
// 全局安装一个 typescript 工具  将 ts 编译成 js 文件   |  tsc index.ts    直接在文件夹内编译成 index.js
// 全局安装一个 ts-node 工具，可以直接在 node 环境下运行 ts 文件 |    ts-node  index.ts

//布尔
let isDone: boolean = true
console.log(isDone)
let isDone1: Boolean = new Boolean(false)
// let re: RegExp = /[0-9]

//数字
let num: number = 10
//变量不想赋值成任何的初始值  可以赋值成undefined
let num1: number = undefined

//字符串
let str: string = "hello"

//undefined  undefined是所有类型的子类型
let und: undefined = undefined

//null
let nul: null = null

//空值void  只能是 null 和 undefined 定义一个空值没有用 一般在函数的返回值的时候设置
let unuseable: void = undefined

//Any 任意值 可以赋值任意类型的值(不赋值默认是any类型)
let anything: any = 'hello'
let something
something = 7
something = 'hello'

//类型推论
// let num3 = 10
// num3 = 'hello'
// let str1 = 'str'
// str1 = true

//联合类型
//既可以是数字类型也可以是字符串类型
let number: number | string = '10'

//数组类型
//数字数组  数组的泛型
let arr: Array<number | string> = [1, 2, 3, '4']
let arr2: (number | string)[] = [1, 2, 3]
let arr1 = [1, 2, 3, '4']

//元组（元组类型允许表示一个已知元素数量和类型的数组）
let x: [number, number] = [1, 2]
// x[2] = 3 赋值失败 

// 对象类型 Object
//接口
// interface Person {
//   //只读属性 
//   readonly firstName: string
//   name: string;
//   //可选属性
//   age?: number;
//   hobby: string[],
//允许新增其他属性并且属性值是 any,属性值不可以写成具体的number 或者其他 写了的话会对之前已经存在的属性进行校验
// [propName: string]: any
// }

// let user: Person = {
//   name: '小二',
//   hobby: ['play', 'eat'],
//   x: '10',
//   firstName: '张'
// }
//报错 不可修改
// user.firstName='li'

//函数类型

//在ts 内函数的声明 需要声明参数和返回值的类型
// 函数式创建
function add(a: number, b: number): number {
  return a + b
}
//变量式创建
//必须设置变量的类型  函数类型  （参数类型）=> 返回值类型
let add1: (a: number, b: number) => number = function (a: number, b: number): number {
  return a + b
}
// 类型推论 可以省略变量的 函数类型声明
let add2 = (a: number, b: number): number => a + b

//只能传两个参数
add(1, 2)
// add2=(aa,bb)=>'10'  返回值类型出错
//  函数没有返回值返回值类型设置成 void
function fun(x: string): void {
  console.log(x);
}
//函数没有返回值输出 undefined
console.log(fun('10'));
function fun1(x: string, y?: string, ...rest: number[]): void {
  console.log(x + y);
  console.log(rest);
}
fun1('hello', 'world', 1, 2, 3, 4, 5, 6, 7)

//创建一个函数 将传递的数字或者字符串进行倒序输出

// function reverse(x: number | string): number | string {
//   if (typeof x === "number") {
//     return Number(x.toString().split("").reverse().join(""))
//   } else {
//     return x.split("").reverse().join("")
//   }
// }
// console.log(reverse("1 2 3"))

//函数重载
//从下往下依次判断 符合直接执行函数
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""))
  } else {
    return x.split("").reverse().join("")
  }
}
console.log(reverse("1 2 3"))

//类型断言
//值 as 类型 （用的较多）
//<类型>值
// interface Cat {
//   name: String
//   //定义一个run方法,返回值为空
//   run(): void
// }
// interface Fish {
//   name: String
//   //定义一个run方法,返回值为空
//   swim(): void
// }
// const cat: Cat = {
//   name: "小黑",
//   run: () => {
//     console.log("跑")
//   },
// }
// const fish: Fish = {
//   name: "小黑",
//   swim: () => {
//     console.log("游")
//   },
// }

// function isFish(animal: Cat | Fish): boolean {
//   if ((animal as Fish).swim) {
//   if (typeof (<Fish>animal).swim==='function') {
//     //在这里判断animal是否有swim属性 
//        //会报错ts编译失败
//     // 需要使用类型断言 先断言animal是Fish接口类型
//     return true
//   }
//   return false
// }
// console.log(isFish(fish))

// //内置对象
// const data = new Date()
// const re = new RegExp("[abc]")

// // DOM document
// console.log(document)
// //单一元素的类型 HTMLElement
// const box: HTMLElement = document.querySelector(".box")
// //元素集合类型 NodeList
// const box1: NodeList = document.querySelectorAll(".box")
// //MouseEvent  鼠标事件对象的类型
// box.onclick = function (e: MouseEvent): void {
//   console.log(e)
// }
// box.addEventListener("click", function (e: MouseEvent) {
//   console.log(e.target)
// })

// //function x(params:HTMLElement){}

// //BOM window
// console.log(window);
// (window as any).$ = "10"
// console.log((<any>window).$)

//类型别名
//使用type创建任意类型的别名

//字面量类型
type Fruit = 'apple' | 'patch' | 'banner'
//取值只能为类型中的三者其一
const str2: Fruit = 'banner'

//枚举类型
//一般存储的是常量
enum Days { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat }
const day: Days = Days['Mon']
//结果为1
console.log(day);

//类
// class Person{
//   //类内的属性和方法需要先定义好类型
//   //然后constructor 内才能给这些属性或方法赋值
//   name: string
//   age: number
//   constructor(name: string,age: number){
//     this.name=name
//     this.age=age
//   }
//   say(){
//     console.log(this.name);
//   }
// }
// const user1 = new Person('xiaohei',10)
//  const user:Person={
//    name:'小黑',
//    age: 10,
//    say(){
//      console.log(1);
//    }
//  }
// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   say() {
//     console.log(this.name)
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
// }
// const cat = new Cat("小黑")
// console.log(cat)

// ts 里面可以对 类 使用几个修饰符
// public
//private 私有属性 只能在类中访问
//readonly 只读属性 可以访问不可修改
//protected 子类可以访问

class Person {
  //类内的属性和方法需要先定义好类型
  //然后constructor 内才能给这些属性或方法赋值
  // public name: string
  // age: number
  constructor(name: string, readonly age: number) {
    this.name = name
    this.age = age
  }
  // 类里面的存取器  属性和获取和修改
  get name() {
    return ''
  }
  //name修改的时候 触发set方法
  set name(value) {
    console.log(value);

  }
  say() {
    console.log(this.name);
  }
}
const user = new Person('xioahong', 10)
user.name = 'heiehi'

//泛型

//创建一个任意长度的数组，而且创建出来的数组每一项都有默认值
function createArray<T>(length: number, value: T): Array<T> {
  let res: T[] = []
  for (let i = 0; i < length; i++) {
    res.push(value);
  }
  return res
}
const res = createArray<string>(4, 'x')
//声明文件
import $ = require("jquery")
console.log($)
