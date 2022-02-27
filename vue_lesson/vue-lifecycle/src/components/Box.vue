<template>
  <div class="box"></div>
</template>
<script>
export default {
  name: "Box",
  mounted() {
    //直接给组件实例新增了一个属性，就相当于给组件内部创建了一个全局变量，可直接使用
    // setInterval返回一个数 属于浏览器的方法，组件销毁不能停止，须手动清除
    this.run = setInterval(() => {
      console.log(1);
    }, 100);
    console.log("组件创建了");
  },
  beforeDestroy() {
    console.log("组件即将被销毁");
  },
  destroyed() {
    console.log("组件被销毁");
    //手动清除无关操作须在此生命周期进行
    clearInterval(this.run);
  },
};
</script>
<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>