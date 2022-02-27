<template>
  <li>
    <input
      type="checkbox"
      :checked="listItem.isCrossOut"
      @change="listItem.isCrossOut = !listItem.isCrossOut"
    />
    <span :class="{ active: listItem.isCrossOut }">
      {{ listItem.text }}
    </span>
    <!-- <input type="text" :value="listItem" /> -->
    <button @click="$emit('del-todo', listItem.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "DoItem",
  props: ["listItem"],
};
</script>

<style>
li .active {
  text-decoration: line-through;
  color: #aaa;
}
ul li {
  height: 45px;
  border-bottom: 1px solid #ccc;
  /* padding-left: 15px; */
  line-height: 45px;
  position: relative;
}
li button {
  float: right;
  width: 40px;
  height: 30px;
  border-radius: 3px;
  margin: 5px 8px 0 0;
}
li input {
  position: absolute;
  top: 8px;
  left: 4px;
  width: 30px;
  height: 30px;
  opacity: 1;
}
li input + span {
  padding-left: 50px;
  background: url("../assets/1.svg") no-repeat left center;

  user-select: none;
}
/* checked为true时，改变 */
li input:checked + span {
  background: url("../assets/2.svg") no-repeat left center;
}
</style>
