import * as Types from './mutations-type'
const mutations = {
  [Types.ADD_CARD](state,book){
    let product = state.carList.find(item=>item.bookId ===book.bookId);
    if(product){
      book.bookCount +=1;
      state.carList = [...state.carList]
    }else{
      book.bookCount = 1;
      //将原有数据改变  state.carList = [...state.carList,book]
      state.carList.push(book);
    }
  }

};
export default mutations;
