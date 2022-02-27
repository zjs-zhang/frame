<template>
  <div>
    <h3>在vue中使用swiper(目前使用5版本)</h3>
    <SwiperDemo />
    <EchartsDemo />
    <EchartsDijia />
  </div>
</template>
<script>
import SwiperDemo from "./components/SwiperDemo";
import EchartsDemo from "./components/EchartsDemo";
import EchartsDijia from "./components/EchartsDijia";
export default {
  name: "App",
  components: {
    SwiperDemo,
    EchartsDemo,
    EchartsDijia,
  },
};
</script>
<style></style>
