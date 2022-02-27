<template>
  <div class="goods-list">
    <h4>{{goodsType}}</h4>
    <ul>
      <GoodsItem v-for="item in goodsList" :key="item.id" :goods="item" />
    </ul>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "GoodsList",
  components: {
    GoodsItem,
  },
  props: ["goodsType", "goodsList"],
};
</script>

<style>
</style>