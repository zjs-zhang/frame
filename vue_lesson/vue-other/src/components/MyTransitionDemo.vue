<template>
  <div>
    <h2>官方提供的vue的进入和离开的过渡</h2>
    <h3>过渡</h3>
    <button @click="show = !show">Toggle</button>
    <br />
    <!-- <transition :duration="1000">...</transition> -->
    <!-- <transition :duration="{ enter: 500, leave: 800 }">...</transition> -->
    <transition
      appear
      name="fade"
      appear-class="rotate-enter"
      appear-active-class="rotate-active"
    >
      <!-- <span class="text1" v-if="show">hello</span> -->
      <span class="text2" v-if="show">hello</span>
    </transition>
    <h3>动画</h3>
    <button @click="show1 = !show1">Toggle</button>
    <br />
    <transition name="bounce">
      <!-- <span class="text1" v-if="show">hello</span> -->
      <p v-if="show1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id. Pellentesque
        habitant morbi tristique senectus et netus.
      </p>
    </transition>
    <h2>多个元素的过渡效果</h2>
    <transition name="fade1" mode="out-in">
      <!-- 按照之前的过渡效果去设置的话，两个元素会同时执行动画，如果希望一个元素效执行效果，然后另外一个在执行的话需要给 transition 加上 mode 属性 -->
      <!-- <button v-if="!state" @click="state=true" key="on">on</button>
      <button v-else @click="state=false" key="off">off</button>-->
      <!-- 不需要使用 v-if 控制而是使用 :key 控制 -->
      <button @click="state = !state" :key="state">
        {{ state ? "off" : "on" }}
      </button>
    </transition>
    <h2>列表的进入/离开过渡</h2>
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <button @click="shuffle">shuffle</button>
    <transition-group name="list" tag="ul">
      <li class="item" v-for="num in numList" :key="num">{{ num }}</li>
    </transition-group>
  </div>
</template>
<script>
import _ from "loadsh"
export default {
  name: "MyTransitionDemo",
  data() {
    return {
      show: true,
      show1: true,
      state: true,
      numList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      nextNum: 9,
    }
  },
  methods: {
    add() {
      this.numList.splice(Math.random() * this.numList.length, 0, this.nextNum)
      this.nextNum++
    },
    remove() {
      this.numList.splice(Math.random() * this.numList.length, 1)
    },
    shuffle() {
      this.numList = _.shuffle(this.numList)
    },
  },
}
</script>
<style>
/* .text1 {
  color: red;
} */
/* 渐入渐出效果 */
/* 离开过程中,和出现的过程中 */
/* .fade-leave-active,
.fade-enter-active {
  transition: opacity 1s;
} */
/* 离开结束 出现的开始*/
/* .fade-leave-to,
.fade-enter {
  opacity: 0;
} */
/* 左进入右消失 */
.text2 {
  color: red;
  border: 1px solid red;
  margin-left: 100px;
  display: block;
  width: 40px;
  text-align: center;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 2s, transform 2s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter {
  opacity: 0;
  transform: translateX(-100px);
}
.rotate-enter {
  transform: rotate(3600deg);
}
.rotate-active {
  transition: transform 1s;
}
/* 动画 */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  /* reverse 是反向播放 */
  animation: bounce-in 0.5s reverse;
}
/* 自定义动画 */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
/* 多个元素过渡 */
.fade1-leave-active,
.fade1-enter-active {
  transition: opacity 1s;
}

/* 离开结束 出现的开始*/
.fade1-leave-to,
.fade1-enter {
  opacity: 0;
}
ul .item {
  float: none;
  list-style: outside;
  border: 0;
  margin-left: 100px;
}
.list-leave-active,
.list-enter-active {
  transition: all 1s;
}

/* 离开结束 出现的开始*/
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.list-enter {
  transform: translateX(-100px);
  opacity: 0;
}
/* 当元素位移的时候 */
.list-move {
  transition: transform 1s;
}
</style>
