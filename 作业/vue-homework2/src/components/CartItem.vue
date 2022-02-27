<template>
  <li class="item">
    <span>{{ product.number }}</span>
    <input type="checkbox" id="checked" v-model="product.isChecked" />
    <span>{{ product.name }}</span>
    <button @click="$emit('change-quantity', product.id, '-')" class="btn">-</button>
    <!-- <input
      class="number"
      type="number"
      @change="$emit('change-value', product.id, $event.target.value)"
      :value="product.quantity"
    />-->
    <input class="number" type="text" @blur="handleBlur" :value="product.quantity" />
    <button @click="$emit('change-quantity', product.id, '+')" class="btn add">+</button>
    <span>￥{{ product.price }}</span>
    <span>￥{{ product.price * product.quantity }}</span>
    <span class="del" @click="$emit('remove')">移除</span>
  </li>
</template>

<script>
export default {
  name: "CartItem",
  props: ["product"],
  methods: {
    //判断输入值，符合即修改
    handleBlur() {
      const value = event.target.value;
      if (Number(value) >= 1) {
        //输入的为大于1的数字，即改变
        this.$emit("change-quantity", this.product.id, "input", Number(value));
      } else {
        //0和其他的都变回原来的
        event.target.value = this.product.quantity;
      }
    },
  },
};
</script>

<style>
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
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
li span:first-child {
  width: 100px;
}
#checked {
  margin-right: 40px;
}
</style>
