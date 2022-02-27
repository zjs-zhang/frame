#### vue-router 进阶

##### 导航守卫(控制路由跳转，路由跳转的时候会默认触发的一些函数)

- 全局前置守卫

```js
router.beforeEach(to ,from,next)=>{
    //to 是当前的地址  from是原来的地址
    //next参数是一个函数，该函数的作用是通行，必须有
    next()

}
```

- 全局解析守卫(同前置守卫,在前置守卫之后执行)(`beforeResolve`) ，在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
- 全局后置钩子 `afterEach`(跳转之后执行)，`不用接受next参数`
- 路由独享守卫 `beforeEnter` ，对于单一的路由对象
- 组件内的守卫

```js
beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log("组件内的路由跳转之前的守卫")
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("组件内的路由改变但是还是展示该组件")
    //可获取数据进行修改（热门、热榜案例）
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log("组件离开当前路由的守卫")
  }
```

##### 路由元信息

一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 \$route.matched 来检查路由记录中的 meta 字段。meta 为路由对象下的一个属性

##### 过渡动效(多个元素的过渡)

具体见 `vue-other`（transition）

##### 数据获取(导航完成之前和导航完成之后，之后交互较好)

```js
next((vm) => {
  // 在这个组件的路由守卫内想要获取组件实例的话，只能在 next 函数内获取  ,next 函数调用的时候传递的参数写成函数，该函数会默认接收组件实例作为参数
  // vm 就代表当前组件实例
  console.log(vm)
  vm.setNum(newNum)
})
```

##### 滚动行为

```js
//写在组件实例中
scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      // 当按下浏览器的前进后退按钮 savePoition 就存在，或者使用 路由的 back  go 等方法也可以
      return savedPosition
    } else {
    // 没按下前进后退直接滚动到顶部
      return { x: 0, y: 0 }
    }
  }
```

- 滚动到锚点的行为参考文档案例[滚动行为](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8)

#### element-ui 库(vue-ui) [参考文档](https://element.eleme.cn/#/zh-CN/component/quickstart)

##### vue 的常用 ui 库，element-ui

普通的安装方式

- 安装 npm i element-ui
- 使用
  - 完全引入(不推荐)，直接将 element-ui 和他的 css 导入到 main.js，并且使用 Vue.use 方法将 element-ui 的所有组件，创建成项目全局的组件
  - 按需引入
    - 安装 babel-plugin-component 插件，辅助按需引入
    - 在项目根目录下的 .babel.config.js 添加一项 plugins 配置 (配置更改了需要重启服务器)
    - 在 main.js 中导入所需要的组件，并使用 Vue.use 方法组件创建成项目全局的组件

##### 插槽

- 当父组件使用子组件的时候，向子组件的开始和结束标签之间传递内容，我们将这个内容称为插槽(slot)

```html
<!-- 父组件 -->
<!-- <Button>哈哈哈</Button> -->
<!-- 子组件 -->
<button>
  <!-- 接收父组件传过来的 '哈哈哈' -->
  <slot></slot>
</button>
```

- 具名插槽

```html
<!-- <template v-slot:list> -->
<!-- 简写 -->
<!-- 父组件 -->
<Container>
  <!-- container布局组件 -->
  <template #list>
    <div class="list">列表</div>
  </template>
  <!-- 默认插槽 -->
  <div class="sidebar">侧导航</div>
</Container>
<!-- 子组件 -->
<slot name="list"></slot> <slot></slot>
```

- 组件上的`v-model`
  (v-model 指令写在了组件身上，就相当于将 :value 和 @input 事件简写了 而且 @input 事件就是修改 value 的)

##### element 组件

- element-ui 的组件可以直接使用标签的原生事件名绑定事件
- 使用的是 element 的按需加载，所以不管是组件还是方法都得使用 use 或者 prototype 设置成全局的

```js
import { Button, Switch, Message, InfiniteScroll } from "element-ui"
Vue.prototype.$message = Message
Vue.use(Button)
```

- 导航菜单
  通过 el-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定
- 树形控件(点击文字部分才会触发`node-click`事件)
  - 懒加载中只要节点前有三角就会触发`loadNode`方法，而且该方法中需要调用 resolve(loadNode 的第二个参数)函数，给函数传递当前目录的数组
- 无限滚动
  `:infinite-scroll-distance="10"`可以解决不向下无限加载的问题

#### vue 的 ui 库

- pc 端：element-ui / iView-ui
- 移动端：cube-ui / Mint-ui

#### css 预处理器

- scss 语法
  - 需要安装`node-sass`和`sass-loader`工具类（开发依赖）
  - 1.样式嵌套 2.设置变量 3.运算 4.if 或 for 5.样式的导入
- less 语法
  - 需要安装`less-loader`和`less`
  - 和 scss 的用法大致一样
- stylus 语法

  - 需要安装`stylus`和`stylus-loader`（需用命令行安装低版本的~3）工具类

  #### 安装包

  在 vue 项目中安装依赖(包) 分两类

  1. 项目必须(运行)依赖(axios vue-router element-ui ...) 项目没有这个包不可能运行 --save -S
  2. 项目开发依赖(sass less stylus ...) 工具类的(编译工具,插件类辅助工具) --save-dev -D
     安装包的方式目前来说会影响项目成品的大小

#### 数据可视化

- echarts [官网](https://echarts.apache.org/zh/index.html)
- dataV[官网](http://datav.jiaminghi.com/)
- AntV G2[官网](http://antv-2018.alipay.com/zh-cn/g2/3.x/index.html)
- d3[官网](https://d3js.org/)

#### 组件间的通信

父子

- 父组件向子组件传递 props
- 子组件修改父组件的 data ,父定义好修改方法,传递自定义事件

  - 简化父组件定义方法传递给子组件

  ```js
  // 父组件
  <Son :num="num" @update:num="num = $event" />
  <!-- 简化写法 -->
  <Son :num.sync="num" />
  // 子组件
  <button @click="$emit('update:num', 900)">点击修改</button>
  ```

  - 对象形式的修改

  ```js
  <Son v-bind.sync="obj" />
  <script>
  props: {
    //传递给子组件单个属性名 进行展示
    a: {
      type: Number,
    },
  },
  </script>
  ```

- v-model 双向绑定
  ```js
  <Son :value="num" @input="num = $event" />
  <!-- 上面的简写 -->
  <Son v-model="num" />
  ```
- 使用$parent $children
- 插槽
- provide/inject(可向下传递多级 依赖注入)

  - provide 提供的数据是不可响应的，如果想提供响应数据，可以将数据做成响应的 Vue.observable

  ```js
  // 将provide写成一个方法即可获取到data内的数据
  provide() {
    return {
      //   x: this.number,
      //此时传递的是一个方法（数据可响应）
      x: this.getNum,
      // 可直接传递一个函数
      // x: () => this.number,
      // setX: (newNum) => (this.number = newNum),
    }
    // x: "hello",
  },
  methods: {
    getNum() {
      return this.number
    },
  }

  inject:['x']
  ```

- ($attrs / $listeners)（一层一层传递）

  ```js
  // app里面
  <Parent2 :a="10" b="草莓" @x="() => console.log(1)" />
  // Parent2里面
  // 父组件接收到的所有 props 除了 class 和 style 之外的，想要全部传递给子组件(相同的属性后面会覆盖前面,不同的直接添加)
  <Son2 v-bind="$attrs" v-on="$listeners" />
  // 属性用v-bind搭配$attrs使用,自定义事件使用v-on搭配$listeners使用
  // 儿子组件可接收到父组件的全部属性，使用this.$attrs获得
  ```
