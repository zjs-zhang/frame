<template>
  <header>
    <HeaderTop />
    <Nav></Nav>
  </header>
</template>

<script>
import HeaderTop from "./HeaderTop";
import Nav from "./Nav";
export default {
  name: "Header",
  components: {
    HeaderTop,
    Nav,
  },
};
</script>

<style >
header {
  width: 100%;
  background-color: #0d0d0d;
}
/* nav a {
  background-color: #000;
} */
</style>