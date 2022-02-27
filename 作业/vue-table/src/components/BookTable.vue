<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>标题</th>
          <th>作者</th>
          <th>重要性</th>
          <th>阅读数</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="books.length">
        <BookItem
          v-for="book in books"
          :key="book.id"
          :book="book"
          @del-book="delBook"
          @open="open"
        />
      </tbody>
      <div v-else>暂无数据</div>
    </table>
  </div>
</template>
<script>
import BookItem from "./BookItem";
export default {
  name: "BookTable",
  components: {
    BookItem,
  },
  props: ["books", "delBook", "open"],
  data() {
    return {};
  },
};
</script>
<style></style>
