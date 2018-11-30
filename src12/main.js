import Vue from 'vue';
import store from './store'
import App from './App';

new Vue({
  el:"#app",
  components:{App},
  template:'<App/>',
  store:store,//store 被注册得到了实力上,所有组件都有这个属性this.$store

});
