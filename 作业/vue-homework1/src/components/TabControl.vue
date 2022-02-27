<template>
  <div class="box">
    <ul class="cf">
      <li @mouseenter="show(0)" :class="ind===0?'active':''">综合</li>
      <li @mouseenter="show(1)" :class="ind===1?'active':''">公告</li>
      <li @mouseenter="show(2)" :class="ind===2?'active':''">赛事</li>
      <li @mouseenter="show(3)" :class="ind===3?'active':''">攻略</li>
      <li @mouseenter="show(4)" :class="ind===4?'active':''">社区</li>
    </ul>
    <div class="content">
      <div :style="`background-color:red;display:${ind===0?'block':'none'}`"></div>
      <div :style="`background-color:yellow;display:${ind===1?'block':'none'}`"></div>
      <div :style="`background-color:cyan;display:${ind===2?'block':'none'}`"></div>
      <div :style="`background-color:blue;display:${ind===3?'block':'none'}`"></div>
      <div :style="`background-color:pink;display:${ind===4?'block':'none'}`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data: function () {
    return {
      ind: 0,
    };
  },
  methods: {
    show(index) {
      // for (let i = 0; i < 5; i++) {
      //   document.querySelectorAll(".cur")[i].style.display = "none";
      // }
      // document.querySelectorAll(".cur")[index].style.display = "block";
      this.ind = index;
    },
  },
};
</script>

<style>
.box {
  width: 480px;
  margin: 0 auto;
  margin-top: 20px;
}
.box ul li {
  float: left;
  margin-right: 74px;
  color: #676767;
  font-size: 18px;
  padding: 10px 0;
  /* border-bottom: 1px solid blue; */
  cursor: pointer;
}
.box ul li:last-child {
  margin-right: 0;
}
.box .active {
  color: #1da6ba;
  font-weight: 700;
  background: url("../assets/tab-title-selected.png") no-repeat center bottom;
}
/* .box ul li:hover {
  color: #1da6ba;
  font-weight: 700;
  background: url("../assets/tab-title-selected.png") no-repeat center bottom;
} */
.content {
  border-top: 1px solid #ccc;
  margin-top: -3px;
}
.content > div {
  width: 480px;
  height: 300px;
  margin-top: 15px;
  display: none;
}
.content > div:first-child {
  display: block;
}
</style>