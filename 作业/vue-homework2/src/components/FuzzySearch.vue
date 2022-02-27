<template>
  <div class="fuzzy-search">
    <!-- <input type="text" v-model="search" />
    <div>
      <input type="checkbox" v-model="isStocked" />
      <span>Only show products in stock</span>
    </div>-->
    <SearchForm />
    <ShowContent />
    <!-- <div class="box">
      <div class="header">
         
      </div>
      <div class="sports">
        <h4>Sporting Goods</h4>
        <ul v-if="searchData().length">
          <li
            v-for="item in searchData()"
            :key="item.id"
            v-show="item.category === 'Sporting Goods'"
          >
            <span :class="`left ${!item.stocked?'active':''}`">{{ item.name }}</span>
            <span class="right">{{ item.price }}</span>
          </li>
        </ul>
        <div v-else>无</div>
      </div>
      <div class="electro">
        <h4>Electronics</h4>
        <ul v-if="searchData().length">
          <li v-for="item in searchData()" :key="item.id" v-show="item.category === 'Electronics'">
            <span :class="`left ${!item.stocked?'active':''}`">{{ item.name }}</span>
            <span class="right">{{ item.price }}</span>
          </li>
        </ul>
        <div v-else>无</div>
      </div>
    </div>-->
  </div>
</template>

<script>
// import SearchForm from "./SearchForm";
// import ShowContent from "./ShowContent";
export default {
  name: "FuzzySearch",
  components: {
    SearchForm,
    ShowContent,
  },
  // data: function () {
  //   return {
  //     search: "Search...",
  //     isStocked: false,
  //     goods: [
  //       {
  //         id: "1abc1",
  //         category: "Sporting Goods",
  //         price: "$49.99",
  //         stocked: true,
  //         name: "Football",
  //       },
  //       {
  //         id: "1abc2",
  //         category: "Sporting Goods",
  //         price: "$9.99",
  //         stocked: true,
  //         name: "Baseball",
  //       },
  //       {
  //         id: "1abc3",
  //         category: "Sporting Goods",
  //         price: "$29.99",
  //         stocked: false,
  //         name: "Basketball",
  //       },
  //       {
  //         id: "1abc4",
  //         category: "Electronics",
  //         price: "$99.99",
  //         stocked: true,
  //         name: "iPod Touch",
  //       },
  //       {
  //         id: "1abc5",
  //         category: "Electronics",
  //         price: "$399.99",
  //         stocked: false,
  //         name: "iPhone 5",
  //       },
  //       {
  //         id: "1abc6",
  //         category: "Electronics",
  //         price: "$199.99",
  //         stocked: true,
  //         name: "Nexus 7",
  //       },
  //     ],
  //   };
  // },
  // methods: {
  //   searchData() {
  //     const input = this.search;
  //     const checked = this.isStocked;
  //     if (checked) {
  //       if (input === "Search...") {
  //         return this.goods.filter((ele) => {
  //           return ele.stocked === true;
  //         });
  //       } else {
  //         return this.goods.filter((ele) => {
  //           return ele.stocked === true && ele.name.includes(input);
  //         });
  //       }
  //     } else {
  //       if (input === "Search...") {
  //         return this.goods;
  //       } else {
  //         return this.goods.filter((ele) => {
  //           return ele.name.includes(input);
  //         });
  //       }
  //     }
  //   },
  // },
};
</script>

<style>
.fuzzy-search {
  width: 500px;
  height: 300px;
  margin: 0 auto;
}
</style>
