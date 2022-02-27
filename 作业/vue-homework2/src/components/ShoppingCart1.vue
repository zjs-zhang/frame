<template>
  <div class="cart">
    <div v-if="!arr.length" class="empty">
      <img src="../assets/g-gwc-k.jpg" alt />
    </div>
    <div v-else class="shop-cart">
      <CartHeader />
      <CartList :productList="arr" :changeQuantity="changeQuantity" :changeValue="changeValue" />
      <CartFooter :total="total" @delete="empty" />
    </div>
  </div>
</template>

<script>
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartFooter from "./CartFooter";
export default {
  name: "ShoppingCart1",
  components: {
    CartHeader,
    CartList,
    CartFooter,
  },
  data() {
    return {
      arr: [
        {
          id: "1",
          //编号
          number: 7,
          name: "iphone5s",
          price: 4000,
          // 购买数量
          quantity: 1,
          isChecked: true,
        },
        {
          id: "2",
          number: 1340,
          name: "iphone7",
          price: 3000,
          quantity: 1,
          isChecked: true,
        },
        {
          id: "3",
          number: 7758,
          name: "imac",
          price: 7000,
          quantity: 1,
          isChecked: true,
        },
        {
          id: "4",
          number: 2017,
          name: "ipad",
          price: 6000,
          quantity: 1,
          isChecked: true,
        },
      ],
    };
  },
  computed: {
    total() {
      return this.check.reduce(
        (res, item) => ({
          totalPrice: res.totalPrice + item.price * item.quantity,
          totalNum: res.totalNum + item.quantity * 1,
        }),
        {
          totalPrice: 0,
          totalNum: 0,
        }
      );
    },
    check() {
      return this.arr.filter((item) => {
        return item.isChecked === true;
      });
    },
  },
  methods: {
    changeQuantity(id, sign, value) {
      //不能传索引值
      // 已知一个 id 已知一个数组
      // 将该数组内和 id 匹配的那一条的 quantity  加 1
      const currentProduct = this.arr.find((item) => item.id === id);
      if (sign === "+") {
        currentProduct.quantity++;
      } else if (sign === "-") {
        if (currentProduct.quantity > 1) {
          currentProduct.quantity--;
        }
      } else if (sign === "input") {
        currentProduct.quantity = value;
      }
    },
    empty() {
      this.arr = [];
    },
    // 另一种输入框的方法
    // changeValue(id, newValue) {
    //   const currentProduct = this.arr.find((item) => item.id === id);
    //   const value = currentProduct.quantity;
    //   currentProduct.quantity = newValue;
    //   // console.log(value);
    //   if (newValue < 1) {
    //     currentProduct.quantity = value;
    //   }
    // },
  },
};
</script>

<style>
.empty {
  width: 1000px;
  margin: 0 auto;
}
.empty img {
  width: 60%;
  margin: 0 auto;
}
.shop-cart {
  width: 1000px;
  height: 40px;
  line-height: 40px;
  margin: 50px auto 0;
}
</style>