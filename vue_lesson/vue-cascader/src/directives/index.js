//默认导出可以，命名导出方便导入
//这里的clickFun需要是个函数，但是这个函数需要传参，传参执行完毕后得到一个返回值，但返回值必须是个函数，因此使用箭头函数
// 不可直接传参，函数的一个参数是event
const clickFun = (el, binding) =>
  function(event) {
    // console.log("点击事件触发了")
    const e = event.target
    if (e === el || el.contains(e)) {
      return
    } else {
      binding.value()
    }
  }
//解绑只能解除add添加的事件，要保证是同一个函数，需在外面定义，里面才能拿到相同的函数
let fun = null
export const clickOut = {
  inserted(el, binding) {
    fun = clickFun(el, binding)
    document.addEventListener("click", fun)
  },
  unbind() {
    // 解除 document 的 click 事件
    // 当 cascader 组件销毁的时候，指令的 unbind 触发，解除点击事件
    alert(1)
    document.removeEventListener("click", fun)
  },
}
