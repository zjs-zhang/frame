#### ts 内原始数据类型

声明变量的时候定义数据类型 小写的名称

- 布尔

```js
let isDone: boolean = true
let isDone1: Boolean = new Boolean(false)
// let re: RegExp = /[0-9]
```

- 数字

```js
let num: number = 10
//变量不想赋值成任何的初始值  可以赋值成undefined
let num1: number = undefined
```

- 字符串

```js
let str: string = "hello"
```

- null

```js
let nul: null = null
```

- undefined
  (undefined 是所有类型的子类型)

```js
let und: undefined = undefined
```

- 空值 void  
  只能是 null 和 undefined, 定义一个空值没有用, 一般在函数的返回值的时候设置

```js
let unuseable: void = undefined
```

- any 任意值  
  (可以赋值任意类型的值(不赋值默认是 any 类型))

```js
  let anything:any = 'hello'
  let something;(any类型 可赋值成任何值 类型推论)
  something = 7
  something = 'hello'
```

##### 类型推论

声明变量的时候没有声明类型,如果赋值了,类型推论就会帮助你自动定义类型且类型不可改变

##### 联合类型

```js
//既可以是数字类型也可以是字符串类型
let number: number | string = "10"
```

##### 类型断言（将联合类型断言为其中的某一种类型）

- 值 as 类型（用的较多）
- <类型>值
- 将任意一个类型断言成 any
- window 全局对象在 ts 内默认不能直接使用，需要定义，只有文件运行在浏览器上才会有 window document

##### 类型别名

使用 type 创建任意类型的别名 type NumOrStr = number | string

##### 数组类型

- 基础的数组

```js
let arr: Array<number> = [1, 2, 3]
let arr2: (number | string)[] = [1, 2, 3]
```

- 数组的泛型

```js
let arr: Array<number | string> = [1, 2, 3, "4"]
//类型推论
let arr1 = [1, 2, 3, "4"]
```

- 元组 （元组类型允许表示一个已知元素数量和类型的数组）

```js
let x: [number, number] = [1, 2]
// x[2] = 3 赋值失败
```

##### 对象类型

接口

```js
  interface Person {
    //只读属性
    readonly firstName: string
    name: string;
    //可选属性
    age?: number;
    hobby: string[],
    //允许新增其他属性并且属性值是 any,属性值不可以写成具体的number 或者其他 写了的话会对之前已经存在的属性进行校验
    [propName: string]: any
  }

  let user: Person = {
    name: '小二',
    hobby: ['paly', 'eat'],
    x: '10',
    firstName: '张'
  }
  //报错 不可修改
  // user.firstName='li'
```

##### 内置对象

```js
const data = new Date()
const re = new RegExp("[abc]")
```

##### DOM document

- 单一元素的类型 HTMLElement

```js
const box: HTMLElement = document.querySelector(".box")
```

- 元素集合类型 NodeList

```js
const box1: NodeList = document.querySelectorAll(".box")
```

- MouseEvent 鼠标事件对象的类型

```js
box.onclick = function (e: MouseEvent): void {}

box.addEventListener("click", function (e: MouseEvent) {
  console.log(e.target)
})
```

##### BOM window

window 可直接使用，但不能给其添加属性，会报错，需将其使用类型断言，断言为 any 类型，再给 window 添加属性

```js
  console.log(window);    //分号必须加
  (window as any).$ = "10"
  console.log((<any>window).$)
```

##### 函数类型

在 ts 内函数的声明 需要声明参数和返回值的类型

- 函数式创建

```js
function add(a: number, b: number): number {
  return a + b
}
```

- 变量式创建

```js
//必须设置变量的类型  函数类型  （参数类型）=> 返回值类型
let add1: (a: number, b: number) => number = function (
  a: number,
  b: number
): number {
  return a + b
}
// 类型推论 可以省略变量的 函数类型声明
let add2 = (a: number, b: number): number => a + b

//只能传两个参数
add(1, 2)
// add2=(aa,bb)=>'10'  返回值类型出错
```

- 函数没有返回值返回值类型设置成 void

```js
function fun(x: string): void {
  console.log(x)
}
//函数没有返回值输出 undefined
console.log(fun("10"))
```

- 函数参数可选以及剩余参数 默认值

```js
function fun1(x: string, y?: string, ...rest: number[]): void {
  console.log(x + y)
  console.log(rest)
}
fun1("hello", "world", 1, 2, 3, 4, 5, 6, 7)
```

- 函数重载（符合即执行，不符合重新加载）

```js
  //从上往下依次判断 符合即直接执行函数
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
```

##### 字面量类型

```js
type Fruit = "apple" | "patch" | "banner"
//取值只能为类型中的三者其一
const str2: Fruit = "banner"
```

##### 枚举类型（一般存储常量）

```js
  //这里的 Days 相当于{"Sun":1,... ,"1":"Sun"}  没赋值取默认 赋值了按照赋值的数来 判断
  //数字类型默认从0开始依次增加，如果起初赋值了，则从赋的那个值开始增加如果是字符串类型，不会自动赋值，需手动赋值，
  enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat}
  const day: Days = Days['Mon']
  //结果为1
  console.log(day);
```

##### 类

```js
  class Person{
    //类内的属性和方法需要先定义好类型
    //然后constructor 内才能给这些属性或方法赋值
    name: string
    age: number
    constructor(name: string,age: number){
      this.name=name
      this.age=age
    }
    say(){
      console.log(this.name);
    }
    // const user1 = new Person('xiaohei',10)
  const user:Person={
    name:'小黑',
    age: 10,
    say(){
      //这里的say方法会覆盖上面的
      console.log(1);
    }
   }
  }
```

- 类的继承 super *proto*中存有方法
- 修饰符
  - public
  - private 私有属性 只能在类中访问
  - readonly 只读属性 可以访问不可修改
  - protected 子类可以访问
- 存取器
  只带有 get 不带有 set 的存取器自动被推断为 readonly

```js
  // 类里面的存取器  属性和获取和修改
  get name(){
    return ''
  }
  //name修改的时候 触发set方法
  set name(value){
    console.log(value);
  }
```

##### 泛型（可传递任意类型）

```js
//创建一个任意长度的数组，而且创建出来的数组每一项都有默认值
function createArray<T>(length: number, value: T): Array<T> {
  let res: T[] = []
  for (let i = 0; i < length; i++) {
    res.push(value)
  }
  return res
}
//这里的泛型传递可省略 返回值类型可省略
const res = createArray < string > (4, "x")
```

##### 声明文件（下载以@types 为前缀的包）

作用有：

- 告诉编译器，某个项（对象，变量，包，类等等）已经存在了，不用检查
- 可做代码提示，有何属性和方法

```js
import $ = require("jquery")
```

### 在 vue2.x 中使用 ts

#### 项目创建

使用 vue ui 创建项目，创建项目的时候选择了自定义安装一些插件，选择安装了 Babel Typescript Vuex Router，其中 Typescript 进行了一些配置(1. 是否使用类类型的 vue 组件 2. 是否编译 ts 以及一些兼容)，

#### 编译过程中遇到的常见编译错误，项目还可以正常运行

- props 子组件获取的时候，ts 认为 props 初始化的没有赋值，就会报错， 解决方案是 给 props 添加非空断言
- 在 @Component 内的某个函数内使用 this，ts 编译 this 认为他是 Vue，并不是组件。所以出错。 解决方案是将这些使用 this 的函数写到 class 内
- $route $router 使用的时候提示 this 里没有这个属性，需要在 class 内先声明，而且声明的时候得非空断言，并设置类型 类型可以设置成 any
- 使用一些查找类方法的时候 有时候可能查找不到，就不能直接对查找的结果进行修改。 解决方案 现获取结果 然后判断 最后在进行操作

#### 语法

vue-property-decorator 是一个 vue 类组件装饰器 快捷方便的使用类组件内的属性和方法

##### @component

@component 装饰器 是一个方法，作用有：

- 导入子组件
- 此装饰器启用了 类里面的装饰器 才可用
- 组件的生命周期钩子函数 写在 @Component 装饰器内
- 设置计算属性

##### @Prop & @Emit

- @Prop 装饰器可以获取父组件传递的 props 装饰的是后面或者下一行的属性和方法
- @Emit 装饰器 可以接收父组件传递的事件
- 组件想要和 vuex 做交互，提倡使用 vuex-class 做交互，不直接在 vuex 去取一些辅助方法(mapState ...)，下载 vuex-class ,还有一个工具 vuex-module-decorators 稍微比上面好用一点

```js
import { State } from "vuex-class"
```

##### @PropSync

- @PropSync 对于 .sync 传递的接收写法

```js
  @PropSync("count")
  cnt!:number
  @Emit('update:count')
  changeCount(num:number){}
```

##### @Model 装饰器 用法

- @Model(eventName, 类型校验) eventName 代表的是 v-model 传递的事件名 默认传递 input
- input 事件虽然在装饰器里面接收了，但并不是子组件的一个方法 说白了就是接收了一个自定义事件 input
- 装饰器装饰的就是传递过来的 props 也就是 value

```html
<input type="text" :value="value" @input="$emit('input',$event.target.value)" />
```

```js
  @Model('input',{type:String})
  //这里可给 value 换名 如直接写成 text 上面直接使用text
  value:string
  // @Emit('input')
  // changeText(){}
```

##### vuex-module-decorators / @Module

@Module 装饰器内可以直接将这个模块添加到 store 内,不需要在创建 store 的时候导入模块
用法

- 先导入 store
- 在装饰器内 写上 store 并且添加 dynamic 属性 属性值为 true,动态创建模块 将模块自动添加到 store 内

```js
  //模块内
  @Module({
    dynamic:true,
    name:'company',
    store
  })
  //store内
  import {ICompanyInfo} from './modules/compony'
  // 所有模块内的数据接口类型,都声明在这
  // 也就是 store 内的 state 的对象的接口类型
  interface IRootState{
    company:ICompanyInfo
  }
  const store=new Vuex.Store<IRootState>({})
```

- 要通过 vuex-module-decorators 装饰器下的 getModule 方法将所创建的模块导出，组件内再导入即可

```js
//模块内
export const CompanyStore = getModule(Company)
//组件内
import { CompanyStore } from "../store/modules/compony"
console.log(CompanyStore.companyInfo)
```

##### @Mutation(不要与 @Action 内的方法重名) / @Action

```js
  @Mutation
    getArr(payload: Array<number>) {
      this.arr = payload
    }
  // 组件内使用 CompanyStore.getArr 获取
  @Action
  async fetchArr(){
    const newArr = await getList()
    this.getArr(newArr)
  }
```

vuex 内的计算属性可直接使用 CompanyStore.属性 获取

#### lint 格式化的一些问题
