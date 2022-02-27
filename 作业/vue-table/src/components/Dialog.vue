<template>
  <div class="dialog-wrap" v-show="showDialog" @click="$emit('close')">
    <!-- 事件冒泡  @click.stop：阻止事件向上触发 （父子关系）-->
    <div class="dialog" @click.stop>
      <h3>Edit</h3>
      <form action>
        <div>
          <label for>
            <span>*</span>
            <span>类型</span>
          </label>
          <select ref="editCountry" :value="currentBook.country">
            <option value="China">China</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
            <option value="Eurozone">Eurozone</option>
          </select>
        </div>
        <div>
          <label for>
            <span>*</span>
            <span>标题</span>
          </label>
          <input ref="editTitle" :value="currentBook.title" type="text" />
        </div>
        <div>
          <label for>
            <span>*</span>
            <span>状态</span>
          </label>
          <select ref="editStatus" :value="currentBook.status">
            <option value="published">published</option>
            <option value="draft">draft</option>
            <option value="deleted">deleted</option>
          </select>
        </div>
        <div>
          <label for>重要性</label>
          <select ref="editImportance" :value="currentBook.importance">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <label for>点评</label>
          <textarea ref="editComment" :value="currentBook.comment" cols="30" rows="10"></textarea>
        </div>
      </form>
      <button>取消</button>
      <button @click.prevent="ok">确定</button>
      <!-- event.preventDefault  阻止默认行为  a的超链接 表单的默认提交和重置 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Dialog",
  props: ["showDialog", "currentBook"],
  methods: {
    ok() {
      // 区分是点击了编辑按钮的弹窗还是添加按钮的弹窗
      // 根据传递过来的计算属性 currentBook 的 id 属性去判断 什么时候添加还是编辑
      const newBook = { ...this.currentBook };
      newBook.country = this.$refs.editCountry.value;
      newBook.title = this.$refs.editTitle.value;
      newBook.status = this.$refs.editStatus.value;
      newBook.importance = this.$refs.editImportance.value;
      newBook.comment = this.$refs.editComment.value;
      if (newBook.id) {
        this.$parent.editBook(newBook);
      } else {
        this.$parent.addBook(newBook);
      }
      this.$parent.close();

      //可以直接修改对象props,不推荐
      //   currentBook.country = this.$refs.editCountry.value;
      //   currentBook.title = this.$refs.editTitle.value;
      //   currentBook.status = this.$refs.editStatus.value;
      //   currentBook.importance = this.$refs.editImportance.value;
      //   currentBook.comment = this.$refs.editComment.value;
    },
  },
};
</script>
<style>
.dialog-wrap {
  width: 100%;
  height: 100%;
  /* 参照物是屏幕，大小和屏幕一样大 */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.dialog {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  /* 移动自己的一半 */
  transform: translate(-50%, -50%);
  background: #fff;
}
</style>