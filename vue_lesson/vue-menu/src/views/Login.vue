<template>
  <div>
    <el-input v-model="name" placeholder="请输入职位"></el-input>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async login() {
      if (this.name.trim()) {
        //dispatch返回一个promise
        await this.$store.dispatch("menuTree", this.name);
        this.$router.push("/");
      }
    },
  },
};
</script>
<style></style>
