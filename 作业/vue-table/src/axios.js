// 封装 axios 请求
// 将请求整合到一处便于管理
import axios from "axios"
// axios 请求就会返回一个 promise
// 当你的请求都是基于一个服务器下的时候，可以给请求设置基地址
// 配置 axios 请求的默认基地址
axios.defaults.baseURL = "http://localhost:3008/books"
// export default (type, url, params) => {
//   // 访问对象下的属性，属性名为字符串，用axios[type]
//   return axios[type](url, params)
// }
export default (config) => {
  return axios(config)
  // 将函数的参数设置成对象的话比较好
  // 因为将对象拆分成三个参数的话必须传递三个参数才能一一对应.
  // 对象是有属性名的，属性名对应即可
}
// 发送 POST 请求 对应的config对象属性
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });
