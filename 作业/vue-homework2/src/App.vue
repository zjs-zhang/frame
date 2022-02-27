<template>
  <div id="container">
    <ShowGoods />
    <ShoppingCart1 />
  </div>
</template>

<script>
import ShowGoods from "./components/ShowGoods";
import ShoppingCart1 from "./components/ShoppingCart1";
export default {
  name: "App",
  components: {
    ShowGoods,
    ShoppingCart1,
  },
};
</script>

<style></style>
