<template>
  <div class="pic-slide">
    <h2>FANART创作馆</h2>
    <div class="show cf">
      <!-- <div>
        <img src="../assets/258.jpg" alt />
        <div class="bottom">
          <p>穿和服的千珏你喜欢吗？灵魂莲华—千珏</p>
          <span>雨生种</span>
          <span>97</span>
        </div>
      </div>
      <div>
        <img src="../assets/258 (1).jpg" alt />
        <div class="bottom">
          <p>千珏实在太可爱啦</p>
          <span>雨生种</span>
          <span>38</span>
        </div>
      </div>
      <div>
        <img src="../assets/258 (2).jpg" alt />
        <div class="bottom">
          <p>灵魂莲华 阿狸</p>
          <span>残月荧光</span>
          <span>55</span>
        </div>
      </div>
      <div>
        <img src="../assets/258 (3).jpg" alt />
        <div class="bottom">
          <p>永恩同人</p>
          <span>艮艮</span>
          <span>36</span>
        </div>
      </div>
      <div>
        <img src="../assets/258 (4).jpg" alt />
        <div class="bottom">
          <p>屠龙勇士奥拉夫</p>
          <span>.</span>
          <span>32</span>
        </div>
      </div>
      <div>
        <img src="../assets/258 (5).jpg" alt />
        <div class="bottom">
          <p>灵魂莲华 莉莉娅</p>
          <span>残月荧光</span>
          <span>29</span>
        </div>
      </div>
      <div>
        <img src="../assets/258 (6).jpg" alt />
        <div class="bottom">
          <p>永恩VS亚索</p>
          <span>那是我的劫难</span>
          <span>96</span>
        </div>
      </div>
      <div>
        <img src="../assets/258 (7).jpg" alt />
        <div class="bottom">
          <p>真实伤害</p>
          <span>鱼岁</span>
          <span>34</span>
        </div>
      </div>-->
      <!-- <div v-for="item in divList" :key="item.id">
        <img :src="item.src" alt />
        <div class="bottom">
          <p>{{item.textp}}</p>
          <span>{{item.spanOne}}</span>
          <span>{{item.spanTwo}}</span>
        </div>
      </div>-->
      <DivItem
        v-for="item in divList"
        :key="item.id"
        :img="item.src"
        :text="item.textp"
        :firstSpan="item.spanOne"
        :secSpan="item.spanTwo"
      />
    </div>
  </div>
</template>

<script>
import DivItem from "./DivItem";
export default {
  name: "PicShow",
  components: {
    DivItem,
  },
  data: function () {
    return {
      divList: [
        {
          id: 1,
          src: require("../assets/258.jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 97,
        },
        {
          id: 2,
          src: require("../assets/258 (1).jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 97,
        },
        {
          id: 3,
          src: require("../assets/258 (2).jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 97,
        },
        {
          id: 4,
          src: require("../assets/258 (3).jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 97,
        },
        {
          id: 5,
          src: require("../assets/258 (4).jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 97,
        },
        {
          id: 6,
          src: require("../assets/258 (5).jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 97,
        },
        {
          id: 7,
          src: require("../assets/258 (6).jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 97,
        },
        {
          id: 8,
          src: require("../assets/258 (7).jpg"),
          textp: "穿和服的千珏你喜欢吗？灵魂莲华—千珏",
          spanOne: "雨生种",
          spanTwo: 25,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.pic-slide {
  width: 810px;
  margin: 20px auto 0;

  padding-top: 10px;
}
.pic-slide h2 {
  color: #0b0b0b;
  font-size: 24px;
  padding-left: 8px;
  border-left: 4px solid #1da6ba;
  margin-bottom: 20px;
}
.show > div {
  width: 192px;
  margin-right: 10px;
  float: left;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
}
.show > div:last-child {
  margin-right: 0;
}
.show > div img {
  width: 100%;
  display: block;
  transition: transform 0.3s;
}
.show > div:hover img {
  transform: scale(1.2);
}
.show > div:hover .bottom {
  bottom: 0;
}
.bottom {
  width: 100%;
  position: absolute;
  bottom: -100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: bottom 0.3s;
  padding: 10px 5px;
}
.bottom p {
  color: #fff;
  font-size: 13px;
}
.bottom span {
  color: #b2b2b2;
  font-size: 14px;
  transition: color 0.2s;
}
.bottom span:hover {
  color: #fff;
}
.bottom span:last-child {
  float: right;
  margin-right: 10px;
  position: relative;
}
.bottom span:last-child:after {
  content: "";
  display: block;
  width: 23px;
  height: 17px;
  background-image: url("../assets/index-spr.png");
  background-position: -456px -226px;
  position: absolute;
  left: -25px;
  top: 0;
}
.bottom span:last-child:hover:after {
  background-image: url("../assets/index-spr.png");
  background-position: -428px -226px;
}
</style>