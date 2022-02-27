<template>
  <div>
    <h3>Products</h3>
    <ul>
      <Product v-for="product in products" :key="product.id" :product="product">
        <button
          :disabled="getQuantityById(product.id) === product.inventory"
          @click="addToCart(product.id)"
        >
          Add to cart
        </button>
      </Product>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Product from "./Product";
export default {
  name: "ProductsList",
  components: {
    Product,
  },
  computed: {
    // products() {
    //   return this.$store.state.products.products
    // },
    ...mapState({
      products: (state) => state.products.products,
    }),
    ...mapGetters(["getQuantityById"]),
  },
  methods: {
    ...mapMutations(["addToCart"]),
  },
};
</script>
<style></style>
