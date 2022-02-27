<template>
  <div class="cascader-list">
    <!-- CascaderItem组件进行递归 -->
    <ul>
      <li v-for="(item, index) in data" :key="index" @click="select(item)">
        {{ item[props.label] }}
      </li>
    </ul>
    <CascaderItem
      v-if="listData.length"
      :data="listData"
      :value="value"
      :change="change"
      :level="level + 1"
      :props="props"
    />
  </div>
</template>
<script>
import deepClone from "lodash/cloneDeep";
export default {
  //在自己的内部想要使用自己必须声明name属性 无需注册
  name: "CascaderItem",
  data() {
    return {
      // currentItem: null,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
    change: {
      type: Function,
    },
    level: {
      type: Number,
      default: 0,
    },
    props: {
      type: Object,
      default: () => ({}),
    },
    // load: {
    //   type: Function,
    // },
  },
  computed: {
    listData() {
      // return this.currentItem && this.currentItem.children
      //   ? this.currentItem.children
      //   : []
      //根据点击添加到value中的数组进行CascaderItem组件的递归
      // const { props, value, level } = this;
      // return value[level] && value[level][props.children]
      //   ? value[level][props.children]
      //   : [];

      const { level, value, data } = this;
      // 如果 data 发生了改变，那么 list 就需要重新计算
      // 所以 list 的计算需要依赖 data ，但是如果依然依赖的是总的 data 的话，那就有需要进行 二叉树遍历了
      // 恰好组件自己的 listData 就是父组件传递过来的 data 的部分数据，数据里面就有我们需要的
      if (value[level]) {
        // 先要判断 value 内是否存在内容 因为 value 初始是空的
        // 如果存在了去 listData 里面找对应 id 的那条数据
        // 找到了之后获取其 children 没有 children 的话返回空数组
        const list = data.find((item) => item.id === value[level].id).children;
        return list || [];
      } else {
        return [];
      }
    },
  },
  methods: {
    select(item) {
      // this.currentItem = item;
      // 不推荐直接修改props -->value
      // this.value.push(item);
      //这里需要做深度拷贝（浅拷贝仍然相当于直接修改value） 使用lodash插件
      const newValue = deepClone(this.value);
      // console.log(newValue);
      // newValue.push(item)
      newValue[this.level] = item;
      //从this.level+1的位置开始删除后面的所有
      newValue.splice(this.level + 1);
      this.change(newValue);
      // this.load((res) => {
      //   // console.log(res);
      //   const itemCop = deepClone(item);
      //   itemCop.children = res;
      //   this.change([itemCop]);
      // });
      // if (this.load) {
      //   this.load(item.id, (res) => {
      //     const itemCop = deepClone(item);
      //     itemCop.children = res;
      //     const newValue = deepClone(this.value);
      //     newValue[this.level] = itemCop;
      //     this.change(newValue);
      //   });
      // }
      //这里的data数据没有修改，只是修改了selectedValue的值，所以需要修改data的数据
    },
  },
};
</script>
<style>
.cascader-list {
  display: flex;
}
.cascader-list ul {
  min-width: 70px;
  max-height: 200px;
  overflow: auto;
}
</style>
