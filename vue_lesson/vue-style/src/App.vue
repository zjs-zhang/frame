<template>
  <div>
    <h2>vue中使用的css扩展语法 scss less stylus</h2>
    <!-- <div class="box"></div> -->
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <ScssDemo />
    <LessDemo />
    <StylusDemo />
    <FlexDemo />
  </div>
</template>
<script>
import ScssDemo from "./components/ScssDemo";
import LessDemo from "./components/LessDemo";
import StylusDemo from "./components/StylusDemo";
import FlexDemo from "./components/FlexDemo";
export default {
  name: "App",
  components: {
    ScssDemo,
    LessDemo,
    StylusDemo,
    FlexDemo,
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>
<style scoped>
/* 如果样式标签内设置了scoped属性，那么该组件的所有标签都会自动生成一个data-v-xxx的属性，而且该组件设置的所有样式选择器都会加上该属性的属性选择器 实现组件样式私有化*/
.el-switch__core:after {
  background-color: pink !important;
}
/* 当使用了第三方插件库的时候 ，scoped属性只会将插件的组件的最外层标签加上scoped设置的属性，那么里面的标签想要使用类名修改样式就不行了 ，这时样式上就不能加scoped属性了*/
.el-switch {
  height: 30px;
}
</style>
