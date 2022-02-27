<template>
  <div class="scss-demo">
    <h3>
      在vue中使用scss语法写样式
    </h3>
    <div>
      hello
      <h3>bvbv</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "ScssDemo",
}
</script>
<style lang="scss">
// 样式的导入
// @代表根目录src
// @import "@/assets/public.scss";
@import "../assets/public.scss";
// 变量
$color: red;
.scss-demo {
  & > h3 {
    color: $color;
    width: $width;
  }
  div {
    color: teal;
  }
  &:hover > h3 {
    color: lightgreen;
  }
}
</style>
