<template>
  <div class="cart-footer">
    <span>总购买价</span>
    <span>￥{{total.totalPrice}}</span>
    <span class="num">购买数量</span>
    <span>{{total.totalNum}}</span>
    <a @click="$emit('delete')" href="#" class="empty-cart">清空购物车</a>
  </div>
</template>

<script>
export default {
  name: "CartFooter",
  props: ["total"],
};
</script>

<style>
.cart-footer {
  border-top: 1px solid #ccc;
}
.cart-footer span {
  display: inline-block;
  width: 150px;
}
.cart-footer .num {
  width: 90px;
}
.empty-cart {
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: rgb(201, 26, 26);
  border-radius: 4px;
  margin-left: 160px;
}
</style>