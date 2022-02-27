<template>
  <div>
    <h1>vue 的进阶阶段</h1>
    <MixinDemo />
    <MixinDemo1 />
    <hr />
    <CustomDirective />
    <br />
    <hr />
    <FilterDemo />
    <hr />
    <UseMethodDemo />
    <hr />
    <h2>函数式组件</h2>
    <Title :level="3">
      <!-- <template v-slot:text>
        <a href="#">hello world</a>
      </template> -->
      hello world
    </Title>
    <!-- <Title /> -->
    <TitleJSX :level="2">hello JSX</TitleJSX>
    <hr />
    <ScopedSlotDemo>
      <!-- <template v-slot:default="slotProps">
        <span>{{ slotProps.obj.name }}</span>
      </template> -->
      <template v-slot:default="{ obj }">
        <span>{{ obj.name }}</span>
      </template>
    </ScopedSlotDemo>
    <hr />
    <h3>借助 render 函数传递自定义的 html 内容</h3>
    <List :arr="['z', 'j', 's']" :render="render" />
    <!-- render传的是一个函数 -->
    <h3>作用于插槽方式创建自定义列表内容</h3>
    <ListSlot :data="['z', 'j', 's']">
      <template v-slot="{ item }">
        <span>{{ item }}</span>
      </template>
    </ListSlot>
  </div>
</template>
<script>
import MixinDemo from "./components/MixinDemo";
import MixinDemo1 from "./components/MixinDemo1";
import CustomDirective from "./components/CustomDirective";
import FilterDemo from "./components/FilterDemo";
import ScopedSlotDemo from "./components/ScopedSlotDemo";
import ListSlot from "./components/ListSlot";
// import Title from "./components/Title";
import TitleJSX from "./components/TitleJSX";
import List from "./components/List";
export default {
  name: "App",
  components: {
    MixinDemo,
    MixinDemo1,
    CustomDirective,
    FilterDemo,
    // Title,
    ScopedSlotDemo,
    TitleJSX,
    List,
    ListSlot,
  },
  created() {
    console.log(this.$http);
    console.log(this.$xx);
  },
  methods: {
    // 下面是 jsx 语法默认不支持 因为不是函数组件内部的 render 函数,所以需要函数组件内传递过来 h
    render(h, item) {
      return <h1>{item}</h1>;
    },
  },
};
</script>
<style></style>