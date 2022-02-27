<template>
  <div>
    <!-- <slot></slot> -->
    <div class="side">
      <slot name="sidebar"></slot>
    </div>
    <div class="left">
      <slot name="list"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Container",
}
</script>
<style></style>
