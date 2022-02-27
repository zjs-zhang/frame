<template>
  <div>
    <el-button type="success">成功按钮</el-button>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
    <Button v-model="show">哈哈哈</Button>
    <!-- <Button :value="show" @input="changeShow">哈哈哈</Button> -->
    <Container>
      <!-- 具名插槽 -->
      <!-- <template v-slot:list> -->
      <!-- 简写 -->
      <template #list>
        <div class="list">列表</div>
      </template>
      <template #sidebar>
        <div class="sidebar">侧边导航栏</div>
      </template>
      <!-- 默认插槽 -->
      <!-- <div class="sidebar">侧边导航栏</div> -->
    </Container>
    <Element />
    <Tree />
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
import Button from "./components/Button"
import Container from "./components/Container"
import Element from "./components/Element"
import Tree from "./components/Tree"
export default {
  name: "App",
  components: {
    Button,
    Container,
    Element,
    Tree,
  },
  data() {
    return {
      value: true,
      show: false,
      imageUrl: "",
    }
  },
  updated() {
    console.log("修改了 ")
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg"
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!")
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!")
      }
      return isJPG && isLt2M
    },
  },
}
</script>
<style></style>
