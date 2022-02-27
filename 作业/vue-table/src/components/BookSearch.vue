<template>
  <div class="book-search">
    <input ref="bookTitle" type="text" :value="searchInfo.title" placeholder="标题" />
    <select ref="bookImport" :value="searchInfo.importance">
      <!-- <option disabled hidden selected>请选择</option> -->
      <option value="0">重要性</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <select ref="bookCountry" :value="searchInfo.country">
      <option value>类型</option>
      <option value="China">China</option>
      <option value="USA">USA</option>
      <option value="Japan">Japan</option>
      <option value="Eurozone">Eurozone</option>
    </select>
    <button
      @click="$emit('change-search-info',$refs.bookTitle.value,Number($refs.bookImport.value),$refs.bookCountry.value)"
    >搜索</button>
    <button @click="$emit('open')">添加</button>
  </div>
</template>
<script>
export default {
  name: "BookSearch",
  props: ["searchInfo"],
};
</script>
<style></style>
