export default {
  // 函数组件内的 render 函数默认接收 createElement 方法作为第一个参数，一般简写成 h
  render() {
    // 下面的 js 内嵌套了 html 语法，我们称这种写法为 JSX 语法，默认这种语法是不支持的需要 createElement 支持
    // JSX 语法内想要添加 js 需要先使用 {} 包裹
    // return h('h' + this.level, { on: { click: this.handleClick } }, 'hello 函数组件')
    const tag = "h" + this.level
    return (
      <tag
        onClick={this.test}
        style="width:200px;"
        class={this.level === 2 ? "active" : ""}
      >
        <a href="#">{this.$slots.default}</a>
      </tag>
    )
  },
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    test() {
      console.log("JSX")
    },
  },
}
