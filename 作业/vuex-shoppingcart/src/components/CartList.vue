<template>
  <div>
    <h3>Your Cart</h3>
    <ul v-if="cartList.length">
      <Product v-for="cart in cartList" :key="cart.id" :product="cart">
        <!-- 具名插槽在组件标签中使用 -->
        <template v-slot:num>
          <span> x </span>
          <span>{{ cart.quantity }}</span>
        </template>
      </Product>
      <!-- <li v-for="cart in cartList" :key="cart.id">
        <span>{{ cart.title }}</span>
          <span> x </span>
        <span>{{ cart.quantity }}</span>
      </li> -->
    </ul>
    <div v-else>Please add some products to cart</div>
    <span>Total:${{ getTotal.toFixed(2) }}</span>
    <br />
    <button :disabled="!cartList.length" @click="checkout(cartList)">
      Checkout
    </button>
  </div>
</template>
<script>
import Product from "./Product";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CartList",
  components: {
    Product,
  },
  computed: {
    ...mapGetters(["cartList", "getTotal"]),
  },
  methods: {
    ...mapMutations(["checkout"]),
  },
};
</script>
<style></style>
