onclick 和 addEventerListener 是指向绑定事件的元素。
一些浏览器，比如 IE6~IE8 下使用 attachEvent，this 指向是 window。
顺便提下：面试官也经常考察 ev.currentTarget 和 ev.target 的区别。
ev.currentTarget 是绑定事件的元素，而 ev.target 是当前触发事件的元素。比如这里的分别是 ul 和 li。
但也可能点击的是 ul，这时 ev.currentTarget 和 ev.target 就相等了。
call 的用处简而言之就是可以让 call()中的对象调用当前对象所拥有的 function。

实例的构造函数属性（constructor）指向构造函数
每个对象都有 **proto** 属性，但只有函数对象才有 prototype 属性
，所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype 属性所在的函数（Person）
原型对象（Person.prototype）是 构造函数（Person）的一个实例
所有函数对象的 **proto** 都指向 Function.prototype，它是一个空函数（Empty function）
所有对象的 **proto** 都指向其构造器的 prototype
实例（tidy）与构造函数的原型对象（dog.prototype）之间存在一个连接

Promise 方法链通过 return 传值，没有 return 就只是相互独立的任务而已

深浅拷贝
concat 和 slice 是可以实现对原数组的拷贝的
concat 和 slice 只是对数组的第一层进行深拷贝
赋值运算符 = 实现的是浅拷贝，只拷贝对象的引用值；
JavaScript 中数组和对象自带的拷贝方法都是“首层浅拷贝”；
JSON.stringify 实现的是深拷贝，但是对目标对象有要求；undefined、function、symbol 会在转换过程中被忽略。。。
若想真正意义上的深拷贝，请递归。
jquery 中的$.extend,lodash 的\_.cloneDeep 拷贝的方法

事件循环是 js 实现异步的一种方法，也是 js 的执行机制
Event Loop 即事件循环，是指浏览器或 Node 的一种解决 javaScript 单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。
无状态和数据不可变是函数式编程的核心概念
函数式编程提出函数应该具备的特性：没有副作用和纯函数
纯函数的概念很简单就是两点：
不依赖外部状态（无状态）： 函数的的运行结果不依赖全局变量，this 指针，IO 操作等。
没有副作用（数据不变）： 不修改全局变量，不修改入参。
多参考 Ramda