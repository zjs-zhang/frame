<template>
  <div class="container">
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
// 在组件内js部分必须默认导出一个对象，而且该对象下一般必须设置一个属性 name 属性值可以和组件名一致，不能和 html 标签命名冲突
export default {
  name: "App",
  //组件注册
  components: {
    // Header:Header,
    Header,
    Section,
    Footer,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
</style>
