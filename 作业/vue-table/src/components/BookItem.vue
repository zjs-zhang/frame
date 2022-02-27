<template>
  <tr>
    <td>{{ book.id }}</td>
    <td>
      <span>{{ book.title }}</span>
      <span>{{ book.country }}</span>
    </td>
    <td>{{ book.author }}</td>
    <td>{{ book.importance }}</td>
    <td>{{ book.readNum }}</td>
    <td>{{ book.status }}</td>
    <td>
      <button @click="changeEditBook(book.id)">编辑</button>
      <button @click="$emit('del-book', book.id)">删除</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: "BookItem",
  props: ["book"],
  methods: {
    changeEditBook(id) {
      this.$emit("open");
      this.$parent.$parent.changeEditBookId(id);
    },
  },
};
</script>
<style></style>
