//创建函数式组件
// import Vue from "vue"
const title = {
  install: function(Vue) {
    Vue.component("Title", {
      //无响应式数据
      // functional: true,
      render: function(createElement) {
        //这里的render只能返回vnode（可以是一个组件，也可以是h创建的）不能返回html 标签，这里不支持JSX语法
        return createElement(
          //context为render传入的第二个参数
          // "h" + context.props.level,
          "h" + this.level,
          {
            on: {
              click: this.handleClick,
            },
          },
          [
            //这样写相同的元素，不合法，vnode应唯一，要想生成多个相同的元素需要用工厂函数map实现
            createElement(
              "a",
              {
                attrs: {
                  href: "#",
                },
              },
              this.$slots.default
            ),
            createElement(
              "a",
              {
                attrs: {
                  href: "#",
                },
              },
              this.$slots.default
            ),
          ]
          //   this.$slots.text
          //   this.$slots.default
        )
      },
      //   data() {
      //     return {
      //       num: 1000,
      //     }
      //   },
      created() {
        console.log(this.$slots.text)
      },
      props: {
        level: {
          type: Number,
          default: 1,
        },
      },
      methods: {
        handleClick() {
          console.log(111)
        },
      },
    })
  },
}
export default title
