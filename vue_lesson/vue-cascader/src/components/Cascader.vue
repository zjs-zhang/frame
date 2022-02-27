<template>
  <div class="cascader-wrap" v-click-out="close">
    <div class="cascader-title" @click="toggle">{{ showValue }}</div>
    <div v-if="isVisible" class="cascader-content">
      <!-- <ul>
        <li
          v-for="(item, index) in data"
          :key="index"
          @click="currentItem = item"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul>
        <li v-for="(item, index) in listData" :key="index">{{ item.label }}</li>
      </ul> -->
      <!-- CascaderItem组件进行递归 -->
      <!-- 这里的change调用app的input自定义事件，当作函数传递给下一级 -->
      <!-- <CascaderItem
        :data="data"
        :change="change"
        :value="value"
        :level="level"
        :props="props"
        :load="load"
      /> -->
      <CascaderItem
        :data="data"
        :change="change"
        :value="value"
        :level="level"
        :props="props"
      />
    </div>
  </div>
</template>
<script>
import { clickOut } from "../directives";
import CascaderItem from "./CascaderItem";
import deepClone from "lodash/cloneDeep";
export default {
  name: "Cascader",
  components: {
    CascaderItem,
  },
  data() {
    return {
      isVisible: false,
      //   currentItem: null,
      //level代表点击的是第几层，根据选择的层数进行相应数据的展示
      level: 0,
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
    props: {
      type: Object,
      default: () => ({}),
    },
    load: {
      type: Function,
    },
  },
  computed: {
    //     listData() {
    //       return this.currentItem && this.currentItem.children
    //         ? this.currentItem.children
    //         : [];
    //     },

    showValue() {
      return this.value.map((item) => item[this.props.label]).join("/");
    },
  },
  //click-out自定义指令，写成局部的
  directives: {
    //写成驼峰方式
    clickOut,
    // clickOut: {
    //   inserted(el, binding) {
    //     document.addEventListener("click", function () {
    //       const e = event.target;
    //       if (e=== el || el.contains(e)) {
    //         return;
    //       } else {
    //         binding.value();
    //       }
    //     });
    //   },
    // },
  },
  mounted() {
    //拿到body标签，绑定点击事件(注意普通函数和箭头函数的this指向)
    //高度自适应，body范围小，选取整个文档
    //可以写成自定义指令
    // const that = this;
    // document.addEventListener("click", () => {
    //   const el = event.target;
    //   const cascaderWrap = document.querySelector(".cascader-wrap");
    //   if (el.className === "cascader-wrap" || cascaderWrap.contains(el)) {
    //     return;
    //   } else {
    //     this.close();
    //   }
    // });
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
    close() {
      this.isVisible = false;
    },
    change(newValue) {
      // this.$emit("input", newValue);

      // 这段代码就是修改了 selectedValue 修改成  newValue
      // 相当于在父组件执行  this.selectedValue = newValue
      // 在这里接收用户的请求数据修改 data ，data 变 selectedValue 就会跟着改变
      const id = newValue[newValue.length - 1].id;
      this.load(id, (res) => {
        // 修改 data
        // [{label:'北京'},{label:'河北',children: res},{label:'上海'},{label:'黑龙江'}]
        const newData = deepClone(this.data);
        // console.log(newData)
        // newData.find((item) => item.id === id).children = res
        // newData 是一个二叉树数据 我们现在已知一个 id 想要在树中查找到 id 匹配的那一个
        // 深度遍历  广度遍历
        // [{},{children: [{},{}]},{}]
        let stack = [...newData];
        // stack 可以认为是一个队列，每次需要检查的数据一次排队
        let currentItem;
        // currentItem 是每次队列内查到的那一项
        for (let i = 0; i < stack.length; i++) {
          currentItem = stack[i];
          if (currentItem.id !== id) {
            if (currentItem.children) {
              // 当该项没匹配成功并且里面存在 children 的话继续将其 children 放入队列内
              stack.push(...currentItem.children);
              // concat 方法不会修改原数组，所以采用了 push
            }
          } else {
            // 当找到了匹配的结束 for 循环
            break;
          }
        }
        // 队列全部查询完毕之后  currentItem 肯定就是需要的那一个，然后更新 data 即可
        if (currentItem) {
          currentItem.children = res;
          this.$emit("update:data", newData);
        }
      });
      this.$emit("input", newValue);
    },
  },
};
</script>
<style>
.cascader-wrap {
  border: 1px solid red;
  user-select: none;
}
.cascader-title {
  width: 800px;
  min-height: 30px;
  border: 1px solid #aaa;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cascader-content {
  display: flex;
}
.cascader-content ul {
  margin-right: 15px;
}
</style>
