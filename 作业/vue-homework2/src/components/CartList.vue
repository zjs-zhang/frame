<template>
  <ul>
    <CartItem
      v-for="(item, index) in productList"
      :key="item.id"
      :product="item"
      @change-quantity="changeQuantity"
      @remove="productList.splice(index, 1)"
      @change-value="changeValue"
    />
  </ul>
</template>

<script>
import CartItem from "./CartItem";
export default {
  name: "CartList",
  components: {
    CartItem,
  },
  props: ["productList", "changeQuantity", "changeValue"],
};
</script>

<style></style>
