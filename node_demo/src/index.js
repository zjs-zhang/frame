//导入包
const $ = require("jquery")
// const x = require("./about.js")
import { a, b } from "./about"
console.log($)
console.log(a, b)
$("button").click(function () {
  $(".box").hide()
})
