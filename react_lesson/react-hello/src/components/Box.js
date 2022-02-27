// 创建一个box组件
// 创建成 class 组件
import { Component } from 'react'
// import React from 'react'
// class Box extends React.Component{}
// class 组件的创建需要继承 Component 类
//类内必须有一个 render 函数，该函数必须返回一个 html 节点
class Box extends Component {
  // 类似 vue 的 data
  state = {
    count: 0
  }
  render() {
    // const { count } = this.state
    return <div>
      <h2>{this.state.count}</h2>
      {/* 事件绑定 */}
      <button onClick={this.add}>按钮</button>
    </div>
  }
  // react 类组件的事件定义，直接在 class 内部声明方法即可
  // react 的类组件里面的方法除了 render 之外的，其他的方法想要使用 this 的话，需创建成箭头函数
  add = () => {
    console.log('jia');
    // 不能直接修改state，需使用setState方法
    // this.state.count++
    this.setState({
      // 与 state 中的 count 合并
      count: this.state.count + 1
    })
    //这里不能拿到最新的state，因为setState属于异步操作
    console.log(this.state.count);
  }
}
export default Box