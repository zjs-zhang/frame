<template>
  <div>
    <h2>vue的进入和离开的过渡</h2>
    <button @click="handleClick">Toggle</button>
    <br />
    <span v-if="showDom" :class="{content:!show,text:true}">hello</span>
    <h3>哈哈哈</h3>
  </div>
</template>
<script>
export default {
  name: "TransitionDemo",
  data() {
    return {
      show: true,
      showDom: true,
    };
  },
  methods: {
    handleClick() {
      // 需要判断效果是从离开-->出现还是从出现-->离开
      //   this.show = !this.show;
      if (this.show) {
        //   出现-->离开
        this.show = false;
        setTimeout(() => {
          this.showDom = false;
        }, 2000);
      } else {
        // 离开-- > 出现;
        //$nexTick 遗留
        // 上述操作其实就相当于初始化，所以 transtion 检测不到 opacity 变化
        this.showDom = true;
        setTimeout(() => {
          this.show = true;
        }, 1);
      }
    },
  },
};
</script>
<style>
.text {
  transition: opacity 2s;
}
.content {
  opacity: 0;
}
</style>