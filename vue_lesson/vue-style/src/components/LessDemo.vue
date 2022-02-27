<template>
  <div class="less-demo">
    <h3>在vue中使用less语法写样式</h3>
  </div>
</template>
<script>
export default {
  name: "LessDemo",
}
</script>
<style lang="less">
@color: yellow;
.less-demo {
  h3 {
    color: @color;
  }
}
</style>
