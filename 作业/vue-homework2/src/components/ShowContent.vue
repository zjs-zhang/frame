<template>
  <div class="show-content">
    <div class="title">
      <span class="left">Name</span>
      <span class="right">Price</span>
    </div>
    <GoodsList
      v-for="item in typeList"
      :key="item"
      :goodsType="item"
      :goodsList="goods.filter(
        (goods) =>
          goods.category === item &&
          goods.name.includes(searchContent) &&
          (isStocked ? goods.stocked : true)
      )"
    />
  </div>
</template>

<script>
import GoodsList from "./GoodsList";
export default {
  name: "ShowContent",
  components: {
    GoodsList,
  },
  props: ["searchContent", "isStocked"],
  data: function () {
    return {
      goods: [
        {
          id: "1abc1",
          category: "Sporting Goods",
          price: "$49.99",
          stocked: true,
          name: "Football",
        },
        {
          id: "1abc2",
          category: "Sporting Goods",
          price: "$9.99",
          stocked: true,
          name: "Baseball",
        },
        {
          id: "1abc3",
          category: "Sporting Goods",
          price: "$29.99",
          stocked: false,
          name: "Basketball",
        },
        {
          id: "1abc4",
          category: "Electronics",
          price: "$99.99",
          stocked: true,
          name: "iPod Touch",
        },
        {
          id: "1abc5",
          category: "Electronics",
          price: "$399.99",
          stocked: false,
          name: "iPhone 5",
        },
        {
          id: "1abc6",
          category: "Electronics",
          price: "$199.99",
          stocked: true,
          name: "Nexus 7",
        },
      ],
    };
  },
  //
  computed: {
    // 该做法 vue 提供了更好的方案
    // 当你想要对现有的 data 进行数据操作转换成其他数据的时候，可以使用函数处理，但是推荐使用 vue 组件的计算属性
    typeList() {
      return this.goods.reduce((res, item) => {
        if (!res.includes(item.category)) {
          res.push(item.category);
        }
        return res;
      }, []);
    },
  },
  //
  // methods: {
  //   showList(type) {
  //     return this.goods.filter(
  //       (good) =>
  //         good.category === type &&
  //         good.name.includes(this.searchContent) &&
  //         (this.isStocked ? good.stocked : true)
  //     );
  //   },
  // },
};
</script>

<style>
.show-content {
  margin-top: 15px;
}
.title span {
  font-weight: bold;
}
span.left {
  display: inline-block;
  width: 100px;
}
</style>