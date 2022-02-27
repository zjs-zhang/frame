<template>
  <div>
    <h2>选项卡</h2>
    <ul>
      <li @click="showType = 'TabHome'">Home</li>
      <li @click="showType = 'TabPosts'">Posts</li>
      <li @click="showType = 'TabAbout'">About</li>
    </ul>
    <br />
    <!-- v-show也可以，写三个v-show -->
    <!-- <TabHome v-if="showType === 'Home'" />
    <TabPosts v-else-if="showType === 'Posts'" />
    <TabAbout v-else-if="showType === 'About'" /> -->
    <!-- 语法糖 -->
    <!-- 使用 vue 自带的 component 元素加上特殊的 is 属性,简化上面 v-if 的写法 -->
    <!-- 注意 is 属性的属性值必须和组件名相同才能正确展示组件 -->
    <!-- 动态组件 -->
    <!-- <keep-alive include="Posts"> -->
    <!-- <component
      :is="showType"
      @change-title="changeTitle"
      :title="title"
    ></component> -->
    <!-- 自定义事件简化写法 -->
    <!-- $event 就代表子组件传递的参数 -->
    <!-- 子组件内调用传递的事件名必须写成 update:propName -->
    <!-- <component
      :is="showType"
      @update:title="title = $event"
      :title="title"
    ></component> -->
    <!-- <component :is="showType" :x.sync="title"></component> -->
    <!-- <keep-alive :max="2"> -->
    <keep-alive include="TabPosts">
      <component :is="showType"></component>
    </keep-alive>
    <!-- </keep-alive> -->
    <!--currentTabComponent 为已注册组件名  -->
    <!-- <component v-bind:is="currentTabComponent"></component> -->
  </div>
</template>
<script>
import TabHome from "./TabHome"
import TabPosts from "./TabPosts"
import TabAbout from "./TabAbout"
export default {
  name: "Tabs",
  components: {
    TabHome,
    TabPosts,
    TabAbout,
  },
  data() {
    return {
      showType: "TabHome",
      //   title: "",
    }
  },
  methods: {
    // changeTitle(newValue) {
    //   this.title = newValue
    // },
  },
}
</script>
<style>
ul li {
  float: left;
  list-style: none;
  border: 1px solid #000;
}
</style>
