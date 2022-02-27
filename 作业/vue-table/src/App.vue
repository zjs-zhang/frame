<template>
  <div id="container">
    <BookSearch
      :searchInfo="searchInfo"
      @change-search-info="changeSearchInfo"
      @open="open"
    />
    <BookTable
      v-if="isSuccess"
      :books="showBooks"
      :delBook="delBook"
      :open="open"
    />
    <!-- <BookTable v-if="books.length" :books="showBooks" :delBook="delBook" /> -->
    <div v-else>等待数据</div>
    <Dialog
      :showDialog="showDialog"
      @close="close"
      :currentBook="currentBook"
    />
  </div>
</template>

<script>
import BookTable from "./components/BookTable";
import BookSearch from "./components/BookSearch";
import Dialog from "./components/Dialog";
import $http from "./axios";
import axios from "axios";

export default {
  name: "App",
  components: {
    BookTable,
    BookSearch,
    Dialog,
  },
  data() {
    return {
      books: [],
      // 当你将下列数据的每一个属性，都分别对应一个点击事件做修改
      // 那么修改的方法没有必要写成三个分别修改，可以写成一个  xx(属性名,属性值){this[名] = 值 }
      searchInfo: {
        title: "",
        importance: 0,
        country: "",
      },
      isSuccess: false,
      showDialog: false,
      editBookId: "",
    };
  },
  // 因为该计算属性是在页面初始的时候就执行，所以在父组件的 computed 内无法获取子组件实例
  // 也就是不可以使用 $refs 和 $children（获取子组件实例的方法）
  // console.log(this.$refs.bookSearch)
  created() {
    // axios.get("http://localhost:3008/books").then((res) => {
    //   setTimeout(() => {
    //     this.isSuccess = true;
    //     this.books = res.data;
    //   }, 1000);
    // });
    // $http("get", "").then((res) => {
    //   setTimeout(() => {
    //     this.isSuccess = true;
    //     this.books = res.data;
    //   }, 1000);
    // });
    $http({ method: "get" }).then((res) => {
      setTimeout(() => {
        this.isSuccess = true;
        this.books = res.data;
      }, 1000);
    });
  },
  computed: {
    showBooks() {
      const { title, importance, country } = this.searchInfo;
      return this.books.filter(
        (book) =>
          (title ? book.title.match(new RegExp(title, "i")) : true) &&
          (importance ? book.importance === importance : true) &&
          (country ? book.country === country : true)
      );
      //   return title
      //     ? this.books.filter((book) => book.title.match(new RegExp(title, "i")))
      //     : importance
      //     ? this.books.filter((book) => book.importance === importance)
      //     : country
      //     ? this.books.filter((book) => book.country === country)
      //     : this.books;
    },
    //可以写成methods,直接传入书籍id，不用再设置data，但不推荐使用，写成计算属性较好
    currentBook() {
      return this.editBookId
        ? this.books.find((item) => item.id === this.editBookId)
        : {
            title: "",
            author: "",
            importance: 0,
            readNum: 0,
            status: "",
            country: "",
            comment: "",
          };
    },
  },
  methods: {
    delBook(id) {
      //需要保证后台和前端显示的数据一致，先将后台数据删除，之后再更新页面显示
      axios.delete(`http://localhost:3008/books/${id}`).then(() => {
        this.books = this.books.filter((item) => item.id !== id);
      });
    },
    changeSearchInfo(title, importance, country) {
      this.searchInfo.title = title;
      this.searchInfo.importance = importance;
      this.searchInfo.country = country;
      console.log(
        this.searchInfo.title,
        this.searchInfo.importance,
        this.searchInfo.country
      );
    },
    open() {
      this.showDialog = true;
    },
    close() {
      this.showDialog = false;
      this.editBookId = "";
    },
    changeEditBookId(id) {
      this.editBookId = id;
    },
    editBook(newBook) {
      //后台的数据修改
      // 当时使用数组下标对数组直接进行修改时不会触发视图更新
      // arr [1,2,3]
      // arr[0] = 5
      //  $http('patch', 'http://localhost:3000/books/id', 'newBook').then(res => {
      //   //  想执行的操作
      //  })
      axios
        .patch(`http://localhost:3008/books/${newBook.id}`, newBook)
        .then(() => {
          this.books = this.books.map((item) =>
            item.id === newBook.id ? newBook : item
          );
        });
      this.editBookId = "";
    },
    addBook(newBook) {
      // 删除对象下的属性
      // delete newBook.id;
      //向后台发送参数
      axios.post("http://localhost:3008/books", newBook).then(() => {
        this.books.push(newBook);
      });
    },
  },
};
</script>

<style></style>,
