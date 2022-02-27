<template>
  <div class="swiper-demo">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    <button @click="handleClick">切换方向</button>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "SwiperDemo",
  //一进页面即执行
  mounted() {
    //想要改变swiper内的配置，要拿到整个实例，设置成全局，之后使用swiper的方法进行修改
    this.mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
  methods: {
    handleClick() {
      //改变切换的方向（拿到整个实例）
      this.mySwiper.changeDirection();
    },
  },
};
</script>
<style>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>
