<template>
  <div id="app">
    <SlideShow />
    <TabControl />
    <PicShow />
    <GetList />
    <Form />
  </div>
</template>

<script>
import SlideShow from "./components/SlideShow";
import TabControl from "./components/TabControl";
import PicShow from "./components/PicShow";
import GetList from "./components/GetList";
import Form from "./components/Form";
export default {
  name: "App",
  components: {
    SlideShow,
    TabControl,
    PicShow,
    GetList,
    Form,
  },
};
</script>

<style>
</style>
