<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
      <p>{{ fullName }}</p>
    </div>
    <hr />
    <ul>
      <User
        v-for="user in userList"
        :key="user.id"
        :user="user"
        @change-user-age="changeUserAge"
      />
    </ul>
    <div>{{text}}</div>
    <Model :count.sync="count" v-model="text"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import User from '../components/User.vue'
import Model from '../components/Model.vue'
export interface IUser {
  id: number
  name: string
  age: number
  // 0 女  1 男
  sex?: 0 | 1
}
@Component({
  name: 'About',
  // computed: {
  //   fullname() {
  //     return this.firstName+this.lastName
  //   }
  // },
  components: {
    User,
    Model
  }
})
export default class About extends Vue {
  firstName = 'zhang'
  lastName = 'san'
  count = 100
  text='hello world'
  userList: Array<IUser> = [
    {
      id: 1,
      name: '张三',
      age: 18,
      sex: 1
    },
    {
      id: 2,
      name: '李四',
      age: 20,
      sex: 0
    },
    {
      id: 3,
      name: '王五',
      age: 19
    }
  ]
  get fullName() {
    return this.firstName + this.lastName
  }
  set fullName(newValue) {
    console.log(newValue)
    this.firstName = newValue.split(' ')[0]
    this.lastName = newValue.split(' ')[1]
  }
  created() {
    setTimeout(() => {
      this.fullName = 'li si'
    }, 1000)
  }
  changeUserAge(id: number) {
    // console.log(1111)
    // 如果直接对 find 查询后的对象 进行修改的话， 编译出错 有可能 find 找不到，那么就不能直接修改 age 需要加一层判断
    const user = this.userList.find((item) => item.id === id)
    // if (user) {
    //   user.age++
    // }
    user && user.age++
  }
}
</script>
