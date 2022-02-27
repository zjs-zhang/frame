<template>
  <div class="do-active">
    <!-- <span
      >{{ getLeftNum.length }} item{{
        getLeftNum.length === 1 ? "" : "s"
      }}
      left</span
    > -->
    <span
      >{{ getTypeLength("Active") }} item{{
        getTypeLength("Active") === 1 ? "" : "s"
      }}
      left</span
    >
    <div>
      <button
        @click="changeType('All')"
        :class="{ bactive: this.$store.state.type === 'All' }"
      >
        All
      </button>
      <button
        @click="changeType('Active')"
        :class="{ bactive: this.$store.state.type === 'Active' }"
      >
        Active
      </button>
      <button
        @click="changeType('Completed')"
        :class="{ bactive: this.$store.state.type === 'Completed' }"
      >
        Completed
      </button>
    </div>
    <button
      v-show="getTypeLength('Completed')"
      class="clear"
      @click="clearCompleted"
    >
      Clear completed
    </button>
    <!-- :class="{ hide: getTypeNums('completed') === 0, clear: true }" -->
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  name: "DoActive",
  computed: {
    // getLeftNum() {
    //   return this.$store.getters.getLeftNum;
    // },
    // isShow() {
    //   return this.$store.getters.isShow;
    // },
    getTypeLength() {
      //传参数直接在上面传，在这里只能传固定值
      return this.$store.getters.getTypeLength;
    },
    // ...mapGetters(["getTypeLength"]),
  },
  methods: {
    changeType(showType) {
      this.$store.commit({ type: "changeType", showType: showType });
    },
    clearCompleted() {
      // this.$store.commit({ type: "clearCompleted" });
      this.$store.dispatch("clearCompleted");
    },
  },
};
</script>
<style>
.do-active {
  display: flex;
  /* justify-content: space-between; */
  padding-top: 5px;
}
.do-active span {
  font-size: 14px;
  margin-left: 8px;
}
.do-active > div {
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin-left: 40px;
  margin-right: 50px;
}
.do-active button {
  border: 1px solid transparent;
  outline: 0;
  background-color: #fff;
  padding: 3px 5px;
}
.do-active button:hover,
.do-active button.bactive {
  border: 1px solid rgba(175, 47, 47, 0.2);
}
.do-active .clear:hover {
  text-decoration: underline;
  border: 1px solid transparent;
}

/* .hide {
  占位但不可见
  visibility: hidden;
} */
</style>
