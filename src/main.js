// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwosomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from './store'
import 'lib-flexible/flexible'
Vue.use(VueLazyload,{
  preLoad:1.3,
  error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541330709782&di=1e42344dd515409c6c894927cb7e0999&imgtype=0&client=http%3A%2F%2Fphoto.16pic.com%2F00%2F45%2F24%2F16pic_4524591_b.jpg',
  loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541330734045&di=657663682f4e42e794bedd623a492a09&imgtype=0&client=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0158d05aa1ed29a801206d96a17bd4.gif',
  attempt:1
})
Vue.use(VueAwosomeSwiper)
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
