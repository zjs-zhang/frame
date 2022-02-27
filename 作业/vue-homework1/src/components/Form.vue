<template>
  <div>
    <div>
      <h2>input :text|password</h2>
      <label for>用户名</label>
      <input type="text" v-model="username" />
      <!-- input和change事件对于表单 -->
      <!-- <input type="text" :value="username" @input="handleChange"/> -->
      <br />
      <label for>密码</label>
      <input type="text" v-model="password" />
      <!-- <input type="text" :password="password" /> -->
      <br />
      <textarea v-model="text"></textarea>

      <button @click="handleClick">获取用户名</button>
    </div>
    <div>
      <h2>复选框</h2>
      <!-- 单一复选框 -->
      <!-- <input type="checkbox" :checked="singleChecked" /> -->
      <input type="checkbox" v-model="singleChecked" />
      <!-- 一组复选框 -->
      <!-- 想要一个选中的结果数组 -->
      <h3>喜欢的水果</h3>苹果
      <input type="checkbox" value="苹果" v-model="fruit" />
      香蕉
      <input type="checkbox" value="香蕉" v-model="fruit" />
      草莓
      <input type="checkbox" value="草莓" v-model="fruit" />
      西瓜
      <input type="checkbox" value="西瓜" v-model="fruit" />
      <!-- 已经有了整套数组，想要修改数组里的某个数据 -->
      <h3>购物车列表</h3>
      <div v-for="item in goods" :key="item.name">
        <input type="checkbox" v-model="item.isChecked" />
        <span>{{item.name}}</span>
      </div>
      <button @click="handleClick1">获取选中的</button>
    </div>
    <div>
      <h2>单选按钮 radio 和 选择框 select</h2>
      <!-- radio 选择性别 -->
      <div>
        <span>男</span>
        <input type="radio" v-model="sex" value="男" />
        <br />
        <span>女</span>
        <input type="radio" v-model="sex" value="女" />
        <br />
      </div>
      <div>
        <select v-model="word">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
      </div>
      <button @click="handleClick2">获取</button>
    </div>
    <div>
      <h2>表单的修饰符 给 v-model 指令使用</h2>
      <!-- .lazy    v-model.lazy='xxx'  意思是懒加载 默认v-model 在 input:text | password 和 textarea 使用的时候是 域的内容变化就监听去修改data，使用的是 input 事件，而加上了 lazy 之后使用的就是 change 事件，是失去焦点在修改 data -->
      <!-- .number 意思就是直接将相关的 data 转化成数字，默认输入的内容是字符串，如果你想要的结果是数字就可以使用 .numebr 修饰符 -->
      <!-- .trim 去点左右空白 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function () {
    return {
      username: "zhang",
      password: "",
      text: "",
      singleChecked: false,
      fruit: ["西瓜"],
      goods: [
        {
          name: "p3",
          price: 1000,
          isChecked: true,
        },
        {
          name: "p4",
          price: 1000,
          isChecked: false,
        },
        {
          name: "p5",
          price: 1000,
          isChecked: true,
        },
      ],
      sex: "男",
      word: "b",
    };
  },
  methods: {
    // handleChange() {
    //   //将username设置成输入的值
    //   //   如何获取输入的值
    //   //event.target.value=this.username
    //event.target.checked=this.singleChecked
    // },
    handleClick() {
      console.log(this.username, this.password);
    },
    handleClick1() {
      console.log("单选状态-----", this.singleChecked);
      console.log("复选结果-----", this.fruit);
      console.log("购物车商品---", this.goods);
    },
    handleClick2() {
      console.log(this.sex);
      console.log(this.word);
    },
  },
};
</script>

<style>
</style>