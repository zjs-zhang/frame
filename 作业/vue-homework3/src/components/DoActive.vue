<template>
  <div class="do-active cf">
    <span>{{activeNum}} item{{activeNum===1?'':'s'}} left</span>
    <div>
      <span @click="$emit('change-type','all')" :class="type==='all'?'color':''">All</span>
      <span @click="$emit('change-type','active')" :class="type==='active'?'color':''">Active</span>
      <span
        @click="$emit('change-type','completed')"
        :class="type==='completed'?'color':''"
      >Completed</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoActive",
  props: ["type", "activeNum"],
};
</script>

<style>
.do-active div {
  float: right;
  margin-right: 120px;
  height: 40px;
  line-height: 40px;
}
.do-active > span {
  display: block;
  float: left;
  line-height: 40px;
  margin-left: 12px;
}
.do-active div span {
  margin-right: 20px;
  cursor: pointer;
  padding: 2px 4px;
  border: 1px solid transparent;
  border-radius: 3px;
}
.do-active div span:hover {
  border: 1px solid rgb(248, 134, 134);
}
.do-active .color {
  border: 1px solid rgb(248, 134, 134);
}
</style>
