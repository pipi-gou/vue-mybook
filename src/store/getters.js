let getters = {
  count:(state)=>state.carList.reduce((prev,next)=>prev+next.bookCount,0)
};
export default getters;
