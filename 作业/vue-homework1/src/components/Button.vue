<template>
  <li @mouseenter="handleClick" :class="isActive?'active':''">{{text}}</li>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "isActive"],
  methods: {
    handleClick() {
      this.$emit("change");
    },
  },
};
</script>

<style scoped>
li {
  float: left;
  width: 164px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #424242;
  font-size: 14px;
  background-color: #e3e2e2;
  border-bottom: 2px solid #e3e2e2;
}
.active {
  color: #ab8e66;
  border-bottom: 2px solid #cea861;
  background-color: #f7f6f6;
}
</style>