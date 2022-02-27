<template>
  <div class="main-down cf">
    <div class="down-left">
      <h2>Downloads</h2>
      <ul>
        <!-- 只要是在 template 想要使用 js 的话都遵循两个语法 -->
        <LiItem text="Natus error sit voluptatem ac cuur" />
        <LiItem text="Doloremque laudantiur totam" />
        <!-- <li>Natus error sit voluptatem ac cuur</li>
        <li>Doloremque laudantiur totam</li>
        <li>Doloremque laudantiur totam</li>
        <li>Inventore veritatis et quasi</li>
        <li>Architecto beatae vitae dicta sunt</li>-->
      </ul>
    </div>
    <div class="down-right">
      <h2>Installation Guide</h2>
      <p
        class="title"
      >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentiurn.volup tatum deleniti atque corrupti quos.</p>
      <p
        class="fo-title"
      >Molestias excepturi sint occaecati cupiditate non provident, similigue sunt in culpa quioficia deserunt molitia animi, id est laborum et dolorum fuga Et harum quidern rerumfacilis est expedita optio curnque nihil impedit quo rminus id quipd maxime.d est laborum et dolorum fuga Et harum quidern rerumfacilis est expedita optio curnque nihil impedit quo rminus id quipd maxime.d est laborum et dolorum fuga Et harum quidern rerumfacilis est expedita optio curnque nihil impedit quo rminus id quipd maxime.</p>
    </div>
  </div>
</template>

<script>
import LiItem from "./LiItem";
export default {
  name: "MainDown",
  components: {
    LiItem,
  },
};
</script>

<style scoped>
.main-down {
  margin-top: 15px;
}
.down-left {
  float: left;
  border: 1px solid #2b2b2b;
  color: #fff;
  padding: 0 24px 10px;
  border-radius: 8px;
}
h2 {
  font-size: 30px;
}
.down-left ul {
  margin: 0;
  padding: 0;
}

.down-right {
  float: right;
  width: 600px;
  color: #fff;
}
p {
  font-size: 14px;
  line-height: 22px;
}
.fo-title {
  color: #808080;
}
</style>
