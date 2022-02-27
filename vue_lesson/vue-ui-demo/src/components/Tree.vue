<template>
  <div>
    <!-- 普通树 一次性请求数据-->
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
    <!-- 懒加载的树 点一下加载一条数据-->
    <el-tree :props="props" :load="loadNode" lazy> </el-tree>
  </div>
</template>
<script>
export default {
  name: "Tree",
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      //设置目录文字和子目录对应的属性名
      defaultProps: {
        //子目录
        children: "children",
        //目录文字
        label: "label",
      },
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    //node-click事件点击的是某个节点的文字部分（非三角部分）
    //vm 代表一级1的大组件（一级1，一级2，一级3分别是三个组件）
    handleNodeClick(data, node, vm) {
      console.log(data);
      console.log(vm);
      //   if(!data[this.defaultProps.children]){}
      if (!data.children) {
        setTimeout(() => {
          console.log("修改页面地址，发送请求获取数据");
        }, 1000);
      }
    },
    // loadNode(node, resolve) {
    //   console.log(node);
    //   if (node.level === 0) {
    //     return resolve([{ name: "region" }]);
    //   }
    //   if (node.level > 1) return resolve([]);

    //   setTimeout(() => {
    //     const data = [
    //       {
    //         name: "leaf",
    //         leaf: true,
    //       },
    //       {
    //         name: "zone",
    //       },
    //     ];

    //     resolve(data);
    //   }, 500);
    // },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "region" }]);
      }
      if (node.level === 2) return resolve([{ name: "a" }, { name: "b" }]);

      if (node.level === 1) {
        setTimeout(() => {
          const data = [
            {
              name: "leaf",
              leaf: true,
            },
            {
              name: "zone",
            },
          ];

          resolve(data);
        }, 500);
      }
      if (node.level > 2) {
        return resolve([]);
      }
    },
  },
};
</script>
<style></style>