import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//多组件所公用的公共储存仓库
export default new Vuex.Store({
  state: {   //当前数据的状态，类似于组件对象的data对象
    adminName: '',//当前的管理员名
    globalSettings:{  //项目的全局设置信息
      apiUrl: 'http://127.0.0.1:8090'  //初始默认值
    }
  },
  mutations: {   //控制数据的进化（即修改state），类似于组件对象中的methods--用mutations修改数据可以保证数据的‘响应式’
    setAdminName(state,value){
      state.adminName = value;
    },
    setGlobalSetttings(state,value){
      state.globalSettings = value;
    }
  },
  actions: {

  }
})
