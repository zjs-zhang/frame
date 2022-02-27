<template>
  <div class="slide-show">
    <ul :style="`margin-left:${-820*ind}px`" class="pic">
      <li>
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200806/4e47575f89653ab9a6bd837bf27a6a7d.jpeg"
          alt
        />
      </li>
      <li>
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200723/1fbfc5d16668fe6c27dc34555a325588.jpeg"
          alt
        />
      </li>
      <li>
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200730/e129642fa0f06781b03dc335316ea152.jpeg"
          alt
        />
      </li>
      <li>
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200724/244ecf59d04f4b02062f366f9ed760c5.jpeg"
          alt
        />
      </li>
      <li>
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200805/141f130e3ac1240694774b65bb078e84.jpeg"
          alt
        />
      </li>
    </ul>
    <ul class="list">
      <!-- <li @mouseenter="change(0)" :class="index===0?'active': ''">绽灵花开之礼</li>
      <li @mouseenter="change(1)" :class="index===1?'active': ''">灵魂莲华2020</li>
      <li @mouseenter="change(2)" :class="index===2?'active': ''">灵魂莲华2020通行证</li>
      <li @mouseenter="change(3)" :class="index===3?'active': ''">8月6日LPL赛程</li>
      <li @mouseenter="change(4)" :class="index===4?'active': ''">宇宙故事更新：永恩</li>-->
      <!-- 自定义事件 前面的change是事件名 后面的是方法-->
      <!-- <Button @change="change(0)" text="1" :isActive="index===0" />
      <Button @change="change(1)" text="2" :isActive="index===1" />
      <Button @change="change(2)" text="3" :isActive="index===2" />
      <Button @change="change(3)" text="4" :isActive="index===3" />
      <Button @change="change(4)" text="5" :isActive="index===4" />-->
      <!-- 列表渲染（循环） item 代表数组中的每一项，index代表数组下标-->
      <Button
        v-for="(item,index) in 5"
        :key="item"
        @change="change(index)"
        :isActive="ind===index"
        :text="textList[index]"
      />
    </ul>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "SlideShow",
  components: {
    Button,
  },
  data: function () {
    return {
      ind: 0,
      textList: [
        "绽灵花开之礼",
        "灵魂莲华2020",
        "灵魂莲华2020通行证",
        "8月6日LPL赛程",
        "宇宙故事更新：永恩",
      ],
    };
  },
  methods: {
    change: function (value) {
      this.ind = value;
    },
  },
};
</script>

<style>
.slide-show {
  width: 820px;
  margin: 0 auto;
  overflow: hidden;
}
.pic {
  width: 4100px;
  transition: margin-left 0.3s;
}
.pic li {
  float: left;
  cursor: pointer;
}
.pic img {
  display: block;
}
/* .list li {
  float: left;
  width: 164px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #424242;
  font-size: 14px;
  background-color: #e3e2e2;
  border-bottom: 2px solid #e3e2e2;
} */
/* .list li:hover {
  color: #ab8e66;
  border-bottom: 2px solid #cea861;
  background-color: #f7f6f6;
} */
/* .list .active {
  color: #ab8e66;
  border-bottom: 2px solid #cea861;
  background-color: #f7f6f6;
} */
</style>