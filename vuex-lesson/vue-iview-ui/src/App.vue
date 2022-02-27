<template>
  <div class="iview-table">
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="name">
        <h3 v-if="!(currentIndex === index)" @dblclick="handleClick(index)">
          {{ row.name }}
        </h3>
        <Input v-else :value="row.name" @on-blur="handleBlur(index)" />
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      currentIndex: -1,
      columns: [
        {
          title: "Name",
          key: "name",
          slot: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    }
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index
      // 修改完 data 之后就想要获取对应的真实 dom 节点，不能直接获取需要使用 $nextTick(updated生命周期)
      // 在这获取对应的 input 的 ref 并且使用原生 focus 方法让其获得焦点
      const el = event.target.parentNode
      // 需要在之前获取 h3 对应的父级节点，因为在 $nextTick 之后 h3 消失了获取不到，多以先获取父级节点
      this.$nextTick(() => {
        el.querySelector("input").focus()
      })
    },
    //失去焦点事件
    handleBlur(index) {
      // console.log(111)
      this.currentIndex = -1
      this.data[index].name = event.target.value
    },
  },
}
</script>
<style>
.iview-table {
  width: 800px;
  margin: 20px auto 0;
}
</style>
