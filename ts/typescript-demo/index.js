"use strict";
//  javascript  的数据类型 7
//  原始的数据类型  null undefined Number Boolean String Symbol (BigInt)
//  Object
exports.__esModule = true;
// ts 需要编译之后才能正常运行在浏览器或者node环境下
// 全局安装一个 typescript 工具  将 ts 编译成 js 文件   |  tsc index.ts    直接在文件夹内编译成 index.js
// 全局安装一个 ts-node 工具，可以直接在 node 环境下运行 ts 文件 |    ts-node  index.ts
//布尔
var isDone = true;
console.log(isDone);
var isDone1 = new Boolean(false);
// let re: RegExp = /[0-9]
//数字
var num = 10;
//变量不想赋值成任何的初始值  可以赋值成undefined
var num1 = undefined;
//字符串
var str = "hello";
//undefined  undefined是所有类型的子类型
var und = undefined;
//null
var nul = null;
//空值void  只能是 null 和 undefined 定义一个空值没有用 一般在函数的返回值的时候设置
var unuseable = undefined;
//Any 任意值 可以赋值任意类型的值(不赋值默认是any类型)
var anything = 'hello';
var something;
something = 7;
something = 'hello';
//类型推论
// let num3 = 10
// num3 = 'hello'
// let str1 = 'str'
// str1 = true
//联合类型
//既可以是数字类型也可以是字符串类型
var number = '10';
//数组类型
//数字数组  数组的泛型
var arr = [1, 2, 3, '4'];
var arr2 = [1, 2, 3];
var arr1 = [1, 2, 3, '4'];
//元组（元组类型允许表示一个已知元素数量和类型的数组）
var x = [1, 2];
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
function add(a, b) {
    return a + b;
}
//变量式创建
//必须设置变量的类型  函数类型  （参数类型）=> 返回值类型
var add1 = function (a, b) {
    return a + b;
};
// 类型推论 可以省略变量的 函数类型声明
var add2 = function (a, b) { return a + b; };
//只能传两个参数
add(1, 2);
// add2=(aa,bb)=>'10'  返回值类型出错
//  函数没有返回值返回值类型设置成 void
function fun(x) {
    console.log(x);
}
//函数没有返回值输出 undefined
console.log(fun('10'));
function fun1(x, y) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log(x + y);
    console.log(rest);
}
fun1('hello', 'world', 1, 2, 3, 4, 5, 6, 7);
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else {
        return x.split("").reverse().join("");
    }
}
console.log(reverse("1 2 3"));
//取值只能为类型中的三者其一
var str2 = 'banner';
//枚举类型
//一般存储的是常量
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wed"] = 10] = "Wed";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days[Days["Sat"] = 13] = "Sat";
})(Days || (Days = {}));
var day = Days['Mon'];
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
var Person = /** @class */ (function () {
    //类内的属性和方法需要先定义好类型
    //然后constructor 内才能给这些属性或方法赋值
    // public name: string
    // age: number
    function Person(name, age) {
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        // 类里面的存取器  属性和获取和修改
        get: function () {
            return '';
        },
        set: function (value) {
            console.log(value);
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.say = function () {
        console.log(this.name);
    };
    return Person;
}());
var user = new Person('xioahong', 10);
user.name = 'heiehi';
//声明文件
var $ = require("jquery");
console.log($);
