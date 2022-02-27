<template>
  <div>
    <h1>公司简介</h1>
    <div>{{arr}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {CompanyStore} from '../store/modules/compony'
@Component({
  // created() {
  //   console.log(this.$store.state.company.companyInfo)
  // }
})
export default class Company extends Vue {
  get arr(){
    return CompanyStore.arr
  }
  created() {
    // console.log(CompanyStore.arr)
    // console.log(CompanyStore.getArr([1,2,3]))
    // console.log('store内的计算属性'+  CompanyStore.length);
   CompanyStore.fetchArr() 
  }
  
}
</script>

<style scoped>
</style>