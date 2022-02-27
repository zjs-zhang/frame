<template>
  <!-- <div class="wrap">
    <div class="a"></div>
    <div class="b"></div>
  </div> -->
  <div class="box">
    <!-- 布局：上下固定 中间内容自由滚动 -->
    <header></header>
    <section class="main">
      <div class="main-container">
        <div class="a">我是顶部</div>
        <div class="b">我是底部</div>
      </div>
    </section>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: "FlexDemo",
};
</script>
<style lang='scss'>
/* .wrap {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  display: flex;
  改变轴线 
  flex-direction: column;
}
.a {
  width: 50%;
  height: 200px;
  background-color: #aaa;
  float: left;
}

.b {
  width: 50%;
  height: 200px;
  background-color: teal;
  float: left;
} */
.box {
  width: 375px;
  height: 667px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 40px;
    background-color: lightgreen;
    flex-shrink: 0;
  }
  .main {
    width: 100%;
    overflow: auto;
    background-color: hotpink;
    .main-container {
      height: 2000px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  footer {
    width: 100%;
    height: 50px;
    background-color: cyan;
    flex-shrink: 0;
  }
}
</style>
