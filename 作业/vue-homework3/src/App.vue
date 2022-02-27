<template>
  <div id="wrap">
    <InputBox @add="add" @select-all="selectAll" :changeAllState="changeAllState" :doList="doList" />
    <ToDoList :doList="doList" :delTodo="delTodo" />
  </div>
</template>

<script>
import InputBox from "./components/InputBox";
import ToDoList from "./components/ToDoList";
export default {
  name: "App",
  components: {
    InputBox,
    ToDoList,
  },
  data() {
    return {
      doList: [],
    };
  },
  computed: {
    changeAllState() {
      return this.doList.every((item) => item.isCrossOut);
    },
  },
  methods: {
    add(newValue) {
      // this.inputValue = newValue;
      this.doList.push({
        //id 保证每个都不一样，用格林威治时间，转化为字符串
        id: new Date().getTime().toString(),
        text: newValue,
        isCrossOut: false,
      });
      console.log(this.doList);
    },
    //改变选择状态
    // changeCheckState(id) {
    //   const current = this.doList.find((item) => item.id === id);
    //   current.isCrossOut = !current.isCrossOut;
    // },
    delTodo(id) {
      this.doList = this.doList.filter((item) => item.id !== id);
    },
    selectAll(value) {
      this.doList = this.doList.map((item) => {
        const newItem = { ...item };
        newItem.isCrossOut = value;
        return newItem;
      });
      // this.doList.forEach((ele) => {
      //   ele.isCrossOut = value;
      // });
    },
  },
};
</script>

<style>
#wrap {
  width: 490px;
  margin: 0 auto;
}
</style>
