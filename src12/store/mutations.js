import * as types from './mutations-type/mutatinon-type'
const mutations = {
  [types.ADD](state,count){
    state.count+=count;
  },
  [types.CUT](state){
    state.count-=1;
  }
};
export default mutations;
