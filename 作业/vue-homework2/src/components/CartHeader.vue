<template>
  <div class="cart-header">
    <span>产品编号</span>
    <span>产品名称</span>
    <span class="number">购买数量</span>
    <span>产品单价</span>
    <span>产品总价</span>
    <span>操作</span>
  </div>
</template>

<script>
export default {
  name: "CartHeader",
};
</script>

<style>
.cart-header span {
  display: inline-block;
  width: 150px;
}
.cart-header .number {
  width: 240px;
}
</style>