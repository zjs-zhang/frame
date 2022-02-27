<template>
  <div class="stylus-demo">
    <h3>在vue中使用stylus语法写样式</h3>
  </div>
</template>
<script>
export default {
  name: "StylusDemo",
}
</script>
<style lang="stylus">
// 以下两种变量都可以
// color=red
$color=green

.stylus-demo h3
    color $color
    // color color
</style>
