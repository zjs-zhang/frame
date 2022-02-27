import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '../index'

const getList = () => new Promise<Array<number>>((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 46, 8, 9, 1])
  }, 1000);
})
//ICompanyInfo 是 company 里面的某一个 state 数据的接口
interface ICompanyInfo {
  name: string,
  create_at: string,
  info: string
}

// ICompany 表示的是我的整个 company 模块内 state 的接口
export interface ICompany {
  companyInfo: ICompanyInfo,
  arr: Array<number>
}
@Module({
  dynamic: true,
  name: 'company',
  store
})
class Company extends VuexModule {
  companyInfo: ICompanyInfo = {
    name: '第嘉',
    create_at: '2020-12-11',
    info: "前端开发营地"
  }
  arr: Array<number> = []
  @Mutation
  getArr(payload: Array<number>) {
    this.arr = payload
  }
  get length() {
    return this.arr.length
  }
  @Action
  async fetchArr(){
    const newArr = await getList()
    this.getArr(newArr) 
  }
}
// / 导出模块给组件使用
// CompanyStore 就是 company 模块内 state 数据以及其他的 mutation  action getters 等
export const CompanyStore = getModule(Company)

