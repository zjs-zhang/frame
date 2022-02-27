#### vue 框架

想要使用 vue 开发项目，需要安装 vue 的开发环境。官方网站提供了安装环境的脚手架工具 vue-cli。使用命令 `npm install -g @vue/cli` 全局安装脚手架工具。工具安装好之后就可以搭建 vue 的开发环境了。有两种方式搭建

- vue create 命令，在想要创建项目的文件夹下执行 `vue create 项目名`。
- 图形化界面工具。任意位置执行 `vue ui` 在浏览器中调出图形化界面，创建 vue 项目。

  - 选择上方的创建按钮
  - 选好项目所要创建的位置
  - 选择默认的预设模版
  - 创建
  - 创建完成之后，选择 任务-->serve-->运行-->启动 app
  - 此时 vue 的基础项目已经搭建完毕。

  ##### vue 初始项目结构

- node_modules 该项目依赖包的存放位置
- .gitignore 作为 github 仓库忽略上传的记录
- package.json 记录了 node 项目的基础配置，和一些 vue 项目的配置
- package-lock.json 详细记录项目所用到的包
- README.md 项目介绍文件
- public 该文件下存在的是项目的 html 模版,意思就是你写的所有的 vue 代码其实都是以该模版为基础的，一般不需要修改，偶尔可能会引入一些文件(css js 等工具类的)
- babel.config.js babel 的配置文件，babel 是一个 js 编译工具，作用是编译新版本的 js 语法。
- src 文件夹是 vue 项目的源代码
  - assets 存储静态文件的文件夹，一般存放一些 公共的 css 图片等
  - components 存放 vue 组件的，文件夹名称可以修改
  - app.vue 该文件就是 vue 的最外层组件
  - main.js 该项目的入口文件，意思是 webpack 会将该文件打包编译。该文件内写的是 vue 一些全局设置。

##### spa 单页面应用

vue 项目创建的就是单页面应用。整个项目就在一个页面内。参考文档[单页面](https://www.jianshu.com/p/0c32c85c668b)

##### vue 使用

- main.js 知识点

###### 组件的复用技巧 props

当一个组件需要在很多个组件内使用，而且多多少少显示的内容不一样，其实是需要根据组件所在位置进行轻微的修改。此时就可以借助 vue 内的 props 知识点处理。
父组件嵌套子组件的时候希望子组件要根据我的想法修改一些内容。
props 的使用
在父组件内，直接当做自定义属性传递即可

```html
<button text="Download Now" color="#00f" />
```

在子组件内，需要使用导出对象下的 props 属性接收
方式一数组

```js
export default {
  name: "Button",
  props: ["text", "color"],
}
```

方式二对象

```js
export default {
  name: "Button",
  // 对象方式 高级可以做简单的校验
  props: {
    text: {
      //  可以设置属性的类型和默认值
      type: String,
      default: "default button",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
```

接收完毕之后需要在 template 中使用，使用方式分为两大类

- 在标签的尖括号之间使用，直接用双花括号嵌套 props 名称即可

  ```html
  <button class="btn">{{text}}</button>
  ```

- 在标签的属性内使用,需要使用 vue 指令 `v-bind` 也可以直接省略使用 `:`

  ```html
  <!--  语法就是 v-bind:属性名='这里面直接写js即可'  v-bind: 可以简写成 : -->
  <button :style="`background-color: ${color}`" class="btn">按钮</button>
  ```

  ###### vue 组件的 data（虚拟 dom 的实现）

  只要是组件的 html 内容(结构，样式...)发生改变的话，那么这个改变必须由 data 内的某个 数据 控制。
  使用方法

- 需要将变化对应的内容设置成 data
  ```js
  export default {
    name: 'App',
    data: function () {
      return {
        bgColor: 'red',
      }
    },
    ...
  ```
- data 的使用
  - 在 template 中使用直接当成变量，使用模板语法写到标签内即可
  - 在 script 内使用的使用要用 `this.名` 访问
- data 的修改

  - 在 template 中的函数内直接对 data 赋值即可
  - 在 script 函数内使用 `this.名` 重新赋值,这种比较常用

##### vue 组件内的事件绑定

直接使用 v-on 指令绑定事件，也可以简写成 @

```js
<button @click="change" class="change">切换颜色</button>
```

change 是一个函数名，该函数必须声明在，组件导出的对象下的 methods 属性内，注意的是 这里面的函数在 template 内使用的时候直接使用方法名，而在 script 中使用的时候需要使用 `this.方法名`

```js
  methods: {
    //  methods 内的方法一般只能设置成普通函数，因为要用到 this 关键字
    change() {
      this.bgColor = 'blue'
      // this 指的是组件实例，指的就是这个组件本身
      // 我们可以直接通过 this 能访问到  组件的 data methods  props ...
    },
  },
```

##### 组件的生命周期

组件从出现到渲染页面或者再页面中销毁，各个阶段 vue 都提供了对应的函数，供开发者使用。这些函数被称作生命周期钩子。生命周期钩子是同步函数。
初始渲染阶段

- beforeCreate
- created: data 等其他组件的数据处理完毕,可以在页面初始的时候发送请求更新数据。发送请求使用的是 axios 插件。
- beforeMount
- mounted: 组件在页面渲染完毕，可以获取组件内的真实 dom 节点。
  数据更新阶段

- beforeUpdate 数据更新时调用，发生虚拟 dom 打补丁之前
- updated 数据更新完毕，dom 渲染完毕

组件的销毁阶段

- beforeDestory 组件即将被销毁，并不是组件的内容在页面上消失
- destoryed 组件销毁完毕，我们在这个生命周期内，可以手动解除一些跟该组件的无关的一些操作(setInterval 跟浏览系相关的一些事情)

###### 组件间的通信

父子组件

- 使用 props，props 一般用来传递值,也可以传递函数(一般不使用)
- 自定义事件， 向子组件传递函数，一般是当父组件的 data 想要让子组件修改时使用。
  - 当你要实现子组件同步父组件的 data 时，一般采取父组件内定义事件传递给子组件执行的方案，此方案可以使用 .sync 修饰符简化
    自定义事件的基础写法，组件名写成 update:title
    父组件内的两种自写法
  ```html
  <!-- 还有一种就是将事件函数定义在父组件内的 methods 内 -->
  <!-- 下面的这个写法 $event 代表的就是子组件调用函数传递的参数 -->
  <Box :title="title" @update:title="title = $event"></Box>
  ```
  简化
  ```html
  <!-- 上面写法的语法糖 -->
  <Box :title.sync="title"></Box>
  ```
  子组件内
  ```js
  this.$emit("update:title", "新的值")
  ```
- 给子组件设置 ref
- 父组件内使用 \$children 可以获取所有子组件的实例组成的数组
- 子组件内使用 \$parent 获取父组件实例

兄弟组件

- 将兄弟间需要相互使用的 data 共享到父组件内，那么兄弟之间的交互就变成了父子之前的交互了

##### 小问题

- gitbash 不可用，使用 powershell 运行 vue ui 提示

  ```
  无法加载文件 C:\Users\sunnyzz\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https
  :/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
  ```

  以管理员身份打开命令行输入 `Set-ExecutionPolicy RemoteSigned` 然后输入 Y 。再次运行 vue ui 即可
