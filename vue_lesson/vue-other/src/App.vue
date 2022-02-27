<template>
  <div>
    <Tabs />
    <TransitionDemo />
    <MyTransitionDemo />
    <WatchDemo />
  </div>
</template>
<script>
import Tabs from "./components/Tabs"
import TransitionDemo from "./components/TransitionDemo"
import MyTransitionDemo from "./components/MyTransitionDemo"
import WatchDemo from "./components/WatchDemo"
export default {
  name: "App",
  components: {
    Tabs,
    TransitionDemo,
    MyTransitionDemo,
    WatchDemo,
  },
}
</script>
<style></style>
