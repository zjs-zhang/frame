<template>
  <li class="item">
    <span>{{id}}</span>
    <span>{{name}}</span>
    <button @click="reduce" class="btn">-</button>
    <span class="number">{{number}}</span>
    <button @click="add" class="btn add">+</button>
    <span>{{singlePrice}}</span>
    <span>{{totalPrice}}</span>
    <span class="del" @click="remove">{{del}}</span>
  </li>
</template>

<script>
export default {
  name: "LiItem",
  props: ["id", "name", "number", "singlePrice", "totalPrice", "del"],
  methods: {
    reduce() {
      this.$emit("handleReduce");
    },
    add() {
      this.$emit("handleAdd");
    },
    remove() {
      this.$emit("handleRemove");
    },
  },
};
</script>

<style scoped>
li.item {
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ccc;
}
li span {
  display: inline-block;
  width: 150px;
}
.add {
  margin-right: 50px;
}
.btn {
  width: 20px;
}
li .number {
  width: 140px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #aaa;
  margin: 0 2px;
  font-size: 12px;
}
li span.del {
  width: 55px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(201, 26, 26);
  text-align: center;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
}
</style>