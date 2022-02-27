<template>
  <div>
    <h2>级联选择器组件</h2>
    <!-- 这里的展示相当于input，既可自己输入，也可由下边选择 -->
    <Cascader
      :data.sync="data"
      v-if="show"
      v-model="selectedValue"
      :props="defaultProps"
      :load="loadFun"
    />
    <!-- v-model="selectedValue"是以下写法的简化 -->
    <!-- :selectedValue="selectedValue" @input="selectedValue=$event.target.value" -->
    <button @click="show = false">测试解绑</button>
  </div>
</template>
<script>
//导入api模拟后台，发送请求获取数据
import fetchData from "./api";
import Cascader from "./components/Cascader";
export default {
  name: "App",
  components: {
    Cascader,
  },
  data() {
    return {
      show: true,
      selectedValue: [],
      data: [
        // {
        //   name: "一级 1",
        //   zones: [
        //     {
        //       name: "二级 1-1",
        //       zones: [
        //         {
        //           name: "三级 1-1-1",
        //         },
        //       ],
        //     },
        //     {
        //       name: "二级 1-2",
        //       zones: [
        //         {
        //           name: "三级 1-2-1",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   name: "一级 2",
        //   zones: [
        //     {
        //       name: "二级 2-1",
        //       zones: [
        //         {
        //           name: "三级 2-1-1",
        //         },
        //       ],
        //     },
        //     {
        //       name: "二级 2-2",
        //       zones: [
        //         {
        //           name: "三级 2-2-1",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   name: "一级 3",
        //   zones: [
        //     {
        //       name: "二级 3-1",
        //       zones: [
        //         {
        //           name: "三级 3-1-1",
        //         },
        //       ],
        //     },
        //     {
        //       name: "二级 3-2",
        //       zones: [
        //         {
        //           name: "三级 3-2-1",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   name: "一级 4",
        // },
      ],
      //数组的默认展示
      defaultProps: {
        label: "label",
        children: "children",
      },
    };
  },
  async created() {
    const res = await fetchData("0");
    this.data = res;
  },
  methods: {
    // async handle() {
    //   // 用户点击列表内的每一项的时候触发的事件，在此用户可以发送请求获取数据
    //   // 需要知道点击的是哪一个列表内的项获取其 id 根据这个 id 向后台发送请求获取数据
    //   //   [{河北},{秦皇岛}]   每次点击的时候 selectedValue 的最后一项就是当前点击的对象
    // const currentItem = this.selectedValue[this.selectedValue.length - 1];
    // const res = await fetchData(currentItem.id);
    //数据更新了，视图不更新，重新赋值或用this.$set
    // this.data.find((item) => item.id === currentItem.id).children = res;
    // this.$set(
    //   this.data.find((item) => item.id === currentItem.id),
    //   "children",
    //   res
    // );
    // 为什么直接修改了  currentItem ，也就是 selectedValue 内的数据 data 就直接改变了，
    //   // 因为 data 内的某个对象数据经过层层选择(并没有拷贝) 添加到了 selectedValue 内
    //   // 所以修改了 selectedValue 内的对象就相当于修改了 data 内的对象
    // this.$set(currentItem, "children", res);
    //   // 以上逻辑必须写在 cascader 组件内
    //   // 组件内操作的话需要用户请求来的数据，做法如下给组件定义一个 load 属性该属性是一个函数
    //   // 这个函数的作用就是用户获取数据，然后将数据传递到组件内部
    async loadFun(id, resolve) {
      // const currentItem = this.selectedValue[this.selectedValue.length - 1];
      // const res = await fetchData(currentItem.id);
      const res = await fetchData(id);
      resolve(res);
    },
  },
};
</script>
<style></style>