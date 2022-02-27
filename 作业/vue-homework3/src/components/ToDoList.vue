<template>
  <div v-if="doList.length" class="do-list">
    <!-- <DoList :lists="flag?doList:arr" /> -->
    <DoList :lists="showTodos" :delTodo="delTodo" />
    <DoActive :type="type" :activeNum="activeNum" @change-type="changeType" />
  </div>
</template>

<script>
import DoList from "./DoList";
import DoActive from "./DoActive";
export default {
  name: "ToDoList",
  components: {
    DoList,
    DoActive,
  },
  data() {
    return {
      // arr: [],
      // flag: false,
      type: "all",
    };
  },
  props: ["doList", "delTodo"],
  computed: {
    activeNum() {
      return this.doList.filter((item) => !item.isCrossOut).length;
    },
    showTodos() {
      const { type } = this;
      return this.doList.filter((item) =>
        type === "all"
          ? item
          : type === "active"
          ? !item.isCrossOut
          : item.isCrossOut
      );
    },
  },
  methods: {
    // active(sign) {
    //   this.flag = false;
    //   if (sign === "no") {
    //     this.arr = this.doList.filter((item) => {
    //       return item.isCrossOut === false;
    //     });
    //   } else if (sign === "yes") {
    //     this.arr = this.doList.filter((item) => {
    //       return item.isCrossOut === true;
    //     });
    //   } else {
    //     this.arr = this.doList;
    //   }
    // },
    changeType(type) {
      this.type = type;
    },
  },
};
</script>

<style>
.do-list {
  border: 1px solid #ccc;
  box-shadow: 0 1px 5px #aaa;
  border-top: 0;
}
</style>
