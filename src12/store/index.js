import Vue from 'vue';
import logger from 'vuex/dist/logger'
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {count:0};
const getters = {
  val(state){
   return state.count%2?'奇数':'偶数'
  }
};

import mutations from './mutations'
export default new Vuex.Store({
  state:state,
  strict:true,
  mutations,
  getters,
  plugins:[logger()],
});
