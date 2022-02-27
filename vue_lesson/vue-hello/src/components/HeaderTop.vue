<template>
  <div class="header-top cf">
    <div class="logo">
      <h1>logo</h1>
    </div>
    <ul>
      <li>
        <a href="#">Site Map</a>
      </li>
      <li>
        <a href="#">Help</a>
      </li>
      <li>
        <a href="#">FAQs</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>

<style scoped>
.header-top {
  width: 940px;
  margin: 0 auto;
}
.logo h1 {
  float: left;
  width: 211px;
  height: 38px;
  text-indent: -999px;
  background-image: url("../assets/downloads_03.jpg");
}
ul {
  float: right;
}
ul li {
  list-style: none;
  float: left;
  margin-left: 15px;
}
ul li a {
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: #fff;
  line-height: 60px;
}
</style>