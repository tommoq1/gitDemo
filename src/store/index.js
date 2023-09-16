import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Vue Components
// ___dispatch
// 服务员actions    动作、行为
// ___commit 
// 厨师mutations    改变、转变
// state

// 用于响应组件中的动作  
const actions = {
  step1(context,value){
    if(context.state.sum1<4){
      context.dispatch('step2',value)
    }else{
      context.dispatch('step3',value)
    }
  },
  step2(context,value){
    console.log('11')
    context.commit('ADD1',value)
  },
  step3(context,value){
    console.log('22')
    context.commit('ADD1',value)
  }
}
const mutations = {
  ADD1(state,value){
    state.sum1 += value
  },
}
const state = {
   sum1:0,
   name1:'名字',
   title:'标题',
}
// 用于将state中的数据进行加工
const getters = {
   bigSum(state){
      return state.sum1*10
   }
}
export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
})