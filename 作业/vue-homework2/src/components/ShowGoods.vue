<template>
  <div class="fuzzy-search">
    <SearchForm
      @change-value="changeValue"
      @change-checked="changeChecked"
      :searchContent="searchContent"
      :isStocked="isStocked"
    />
    <ShowContent :searchContent="searchContent" :isStocked="isStocked" />
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
import ShowContent from "./ShowContent";
export default {
  name: "ShowGoods",
  components: {
    SearchForm,
    ShowContent,
  },
  data: function () {
    return {
      searchContent: "",
      isStocked: false,
    };
  },
  methods: {
    changeValue(newValue) {
      this.searchContent = newValue;
    },
    changeChecked(newStatus) {
      this.isStocked = newStatus;
    },
  },
};
</script>

<style>
.fuzzy-search {
  width: 500px;
  height: 300px;
  margin: 0 auto;
}
</style>