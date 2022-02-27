<template>
  <div>
    <span>{{cnt}}</span>
    <button @click="changeCount(200)">修改count</button>
    <!-- <input type="text" :value="value" @input="changeText($event.target.value)"> -->
    <input type="text" :value="num" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script lang="ts">
import { Component, Emit, Model, PropSync, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @PropSync("count")
  cnt!:number
  @Emit('update:count')
  changeCount(num:number){}

  @Model('input',{type:String})
  num:string
  // @Emit('input')
  // changeText(){}

}
</script>

<style scoped>
</style>