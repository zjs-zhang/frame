<template>
  <div class="carts">
    <div v-if="!arr.length" class="empty">
      <img src="../assets/g-gwc-k.jpg" alt />
    </div>
    <div v-else class="shop-cart">
      <div class="cart-header">
        <span>产品编号</span>
        <span>产品名称</span>
        <span class="number">购买数量</span>
        <span>产品单价</span>
        <span>产品总价</span>
        <span>操作</span>
      </div>
      <ul>
        <LiItem
          v-for="(item,index) in arr"
          :key="item.id"
          :id="item.number"
          :name="item.name"
          :number="item.quantity"
          :singlePrice="`￥${item.price}`"
          :totalPrice="`￥${item.price*item.quantity}`"
          del="移除"
          @handleReduce="handleReduce(index)"
          @handleAdd="item.quantity++;getTotal();getNum()"
          @handleRemove="arr.splice(index,1);getTotal();getNum()"
        />
      </ul>
      <div class="cart-footer">
        <span>总购买价</span>
        <span>￥{{totalPrice}}</span>
        <span class="num">购买数量</span>
        <span>{{totalQuantity}}</span>
        <a @click="arr=[]" href="#" class="empty-cart">清空购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
import LiItem from "./LiItem";
export default {
  name: "ShoppingCart",
  components: {
    LiItem,
  },
  data: function () {
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
          //编号
          number: 1340,
          name: "iphone7",
          price: 3000,
          // 购买数量
          quantity: 1,
          isChecked: true,
        },
        {
          id: "3",
          //编号
          number: 7758,
          name: "imac",
          price: 7000,
          // 购买数量
          quantity: 1,
          isChecked: true,
        },
        {
          id: "4",
          //编号
          number: 2017,
          name: "ipad",
          price: 6000,
          // 购买数量
          quantity: 1,
          isChecked: true,
        },
      ],
      totalPrice: 2000,
      totalQuantity: 4,
    };
  },
  methods: {
    handleReduce(index) {
      if (this.arr[index].quantity > 1) {
        this.arr[index].quantity--;
        this.getTotal();
        this.getNum();
        // console.log(this.arr);
      }
    },
    getTotal() {
      this.totalPrice = 0;
      for (let i = 0; i < this.arr.length; i++) {
        this.totalPrice += this.arr[i].quantity * this.arr[i].price;
      }
    },
    getNum() {
      this.totalQuantity = 0;
      for (let i = 0; i < this.arr.length; i++) {
        this.totalQuantity += this.arr[i].quantity;
      }
    },
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
.cart-header span {
  display: inline-block;
  width: 150px;
}
.cart-header .number {
  width: 240px;
}
.cart-footer {
  border-top: 1px solid #ccc;
}
.cart-footer span {
  display: inline-block;
  width: 150px;
}
.cart-footer .num {
  width: 90px;
}
.empty-cart {
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: rgb(201, 26, 26);
  border-radius: 4px;
  margin-left: 160px;
}
</style>