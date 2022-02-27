##### 使用 json-server 模拟后台数据库

- 全局安装 json-server `npm i -g json-server` 可能有点慢
- 在需要的地方新建 xxx.json 文件,还文件内写法如下
  ```json
  {
    "users": [
      {
        "id": 121,
        "username": "小王"
      },
      {
        "id": 21,
        "username": "小二"
      }
    ]
  }
  ```
  这样的 json 文件生成的数据代表 users 列表数据
- 在该 json 文件所在的地方打开命令行工具，启动数据库服务。`json-server --watch xxx.json -p 3000`，命令执行完毕之后，数据库就启动了，不要关闭该服务。按照上述 json 文件，启动的服务可以使用 'http://localhost:3008/users' 接口就能访问用户列表了。
- 更详细的接口文档说明参考[json-server](https://github.com/typicode/json-server)

##### 将自己的项目跑在本地服务器上

- 全局安装 serve `npm i -g serve`
- 在你的项目内打开命令行工具执行 `serve .`
- 执行完毕之后你的当前项目内的所有文件已经被跑在了 `http://localhost:5000` 服务器上，默认打开 index.html
