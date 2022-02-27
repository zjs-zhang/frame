<template>
  <li class="goods-item">
    <span :class="`left ${!goods.stocked?'active':''}`">{{goods.name}}</span>
    <span>{{goods.price}}</span>
  </li>
</template>

<script>
export default {
  name: "GoodsItem",
  //goods传一个对象，上面可以取对象里的任意值
  props: ["goods"],
};
</script>

<style>
.active {
  color: crimson;
}
</style>