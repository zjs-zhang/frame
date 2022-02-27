<template>
  <nav>
    <ul class="cf">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Surropt</a>
      </li>
      <li>
        <a href="#">Downloads</a>
      </li>
      <li>
        <a href="#">Contacts</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style >
nav {
  width: 1040px;
  margin: 0 auto;
}
nav ul li {
  list-style: none;
  float: left;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #f9f9f9;
  overflow: hidden;
}
nav a {
  display: block;
  width: 190px;
  text-align: center;
  height: 56px;
  line-height: 56px;
  color: #000;
  font-size: 16px;
  background-color: #f2f2f2;
}
nav a:hover {
  color: #fff;
  background-color: #ec3e03;
}
nav ul li:first-child {
  border-radius: 8px 0 0 8px;
  border-left: 0;
}
nav ul li:last-child {
  border-radius: 0px 8px 8px 0px;
  border-right: 0;
}
</style>