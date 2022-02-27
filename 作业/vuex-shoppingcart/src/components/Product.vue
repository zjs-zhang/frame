<template>
  <li>
    <div>
      <span>{{ product.title }}</span>
      <span> - </span>
      <span>${{ product.price }}</span>
      <slot name="num"></slot>
    </div>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>
<style></style>
