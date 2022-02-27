import data from "../data/data.json"
//fetch 请求方式
export default function fetchData(pid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = data.filter((item) => item.pid === pid)
      resolve(res)
    }, 800)
  })
}
