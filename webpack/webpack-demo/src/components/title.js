export default {
  render() {
    return <div>
      <h1 onClick={this.handleClick} style={{ width: '200px' }}>{this.title}</h1>
      <ul>{ this.arr.map(ele => <li>{ele}</li>) }</ul>
    </div>
    // 三个li标签数组,jsx会自动解析三个li（类似v-for功能）
  },
  data() {
    return {
      arr: [1, 2, 3]
    }
  },
  props: {
    title: {
      type: String,
      default: 'hello'
    }
  },
  methods: {
    handleClick() {
      console.log(111);
    }
  },
}

//原生事件的三种绑定形式

// document.querySelector('.xxx').onclick = function(){
//   console.log()
// }
// document.querySelector('.xxx').addEventListener('click',function(){

// })

// 在 html 标签内   <h1 onclick='fun()'></h1>    原生事件传递参数 参数必须是字符串格式的