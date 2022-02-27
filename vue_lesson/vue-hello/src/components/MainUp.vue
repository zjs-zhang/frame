<template>
  <div class="main-up cf">
    <div class="up-left">
      <img src="../assets/downloads_18.jpg" alt />
    </div>
    <div class="up-right">
      <p
        class="title"
      >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentiurn.volup tatum deleniti atque corrupti quos.</p>
      <p
        class="fo-title"
      >Molestias excepturi sint occaecati cupiditate non provident, similigue sunt in culpa quioficia deserunt molitia animi, id est laborum et dolorum fuga Et harum quidern rerumfacilis est expedita optio curnque nihil impedit quo rminus id quipd maxime.</p>
      <a href="#">Download Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainUp",
};
</script>

<style scoped>
.main-up {
  background-color: #0d0d0d;
  padding: 20px 35px;
  border: 1px solid #2b2b2b;
  border-radius: 8px;
}
.up-left {
  float: left;
}
.up-right {
  width: 540px;
  float: right;
}
.title {
  font-size: 14px;
  color: #fff;
}
.fo-title {
  color: #808080;
  font-size: 14px;
}
a {
  display: block;
  width: 182px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
}
</style>