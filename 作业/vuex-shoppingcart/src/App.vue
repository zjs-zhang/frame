<template>
  <div>
    <h2>Vuex Shopping Cart</h2>
    <hr />
    <ProductsList />
    <hr />
    <CartList />
  </div>
</template>
<script>
import ProductsList from "./components/ProductsList"
import CartList from "./components/CartList"
export default {
  name: "App",
  components: {
    ProductsList,
    CartList,
  },
}
</script>
<style></style>
