<template>
  <div class="pagination">
    <ul>
      <li v-for="list in lists" :key="list.id">{{ list.title }}</li>
    </ul>
    <!-- :current-page="currentPage" -->
    <el-pagination
      @current-change="changeCurrent"
      layout="prev, pager, next"
      :total="100"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "Pagination",
  data() {
    return {
      lists: [],
      // currentPage: 1,
    }
  },
  created() {
    // axios
    //   .get("http://localhost:3008/articals?_page=1&_limit=20")
    //   .then((res) => {
    //     setTimeout(() => {
    //       this.lists = res.data
    //     }, 500)
    //   })
    this.getData(1)
    console.log(this.lists)
  },
  methods: {
    //取消请求
    getData(page) {
      // 从 axios 内获取一个取消请求的构造函数

      // 这里不能使用$axios,发请求的时候可以使用（想要变成全局的变量，前面加上this）

      // const CancelToken = axios.CancelToken
      // 使用取消请求的函数创建一个取消对象 对象向内包括取消请求的方法和 token
      // const source = CancelToken.source()
      // source.cancel("Operation canceled by the user.")
      // axios
      //   .get(`http://localhost:3008/articals?_page=${page}&_limit=20`, {
      //     cancelToken: source.token,
      //   })
      //   .then((res) => {
      //     setTimeout(() => {
      //       this.lists = res.data
      //     }, 500)
      //   })
      const CancelToken = axios.CancelToken
      //取消上一次的请求
      //当没发过任何请求的时候 this 内是没有 cancle 方法的所以无法调用，但是首次执行获取操作并不需要取消请求
      if (this.cancel) {
        this.cancel()
      }
      this.$axios
        // .get(`http://localhost:3008/articals?_page=${page}&_limit=20`, {
        .get(`https://cnodejs.org/api/v1/topics?page=${page}&limit=20`, {
          cancelToken: new CancelToken((c) => {
            // executor 函数接收一个 cancel 函数作为参数
            this.cancel = c
          }),
        })
        .then((res) => {
          // setTimeout(() => {
          this.lists = res.data.data
          // }, 500)
        })
    },
    changeCurrent(page) {
      console.log(page)
      //   axios
      //     .get(`http://localhost:3008/articals?_page=${page}&_limit=20`)
      //     .then((res) => {
      //       setTimeout(() => {
      //         this.lists = res.data
      //       }, 500)
      //     })
      // },
      this.getData(page)
    },
  },
}
</script>
<style>
.pagination ul li {
  list-style: none;
}
.el-icon-arrow-left:before {
  content: "«" !important;
  font-size: 18px;
}
.el-icon-arrow-right:before {
  content: "»" !important;
  font-size: 18px;
}
.el-pager li,
.el-pagination .btn-prev,
.el-pagination .btn-next {
  border: 1px solid #ddd;
  color: #778087;
}
.el-pager li.active,
.el-pager li:hover {
  color: #80bd01 !important;
}
</style>
