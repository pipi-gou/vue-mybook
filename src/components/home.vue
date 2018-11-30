<template>
    <div>
      <Mheader>首页</Mheader>
      <div class="content">
        <loading v-if="loading"></loading>
        <template v-else>
        <swiper :swiperSlides="sliders"></swiper>
        <div class="container">
      <ul>
        <li v-for="hot in hotBooks">
          <img :src="hot.bookCover">
          <b>{{hot.bookName}}</b>
        </li>
      </ul>
      </div>
        </template>
      </div>

    </div>
</template>

<script>
  import Mheader from '../base/Mheader';
  import Swiper from '../base/swiper';
  // import {getSliders} from "../api";
  // import {getHotBooks} from "../api";
  import {getAll} from "../api";
  import loading from '../base/loading'

  export default {
   created(){
      // this.getSlider();
      // this.getHot();
     this.getAll();
      },
    data(){
     return {sliders:[],hotBooks:[],loading:true}
    },
    methods:{
     // async getSlider(){
     //   let {data:sliders} = await getSliders();
     //   this.sliders = sliders;
     // },
     //  async getHot(){
     //   let {data:hotBooks} = await getHotBooks();
     //   this.hotBooks =hotBooks;
     //  }
      async getAll(){
        let [sliders,hotBooks] = await getAll();
        this.sliders = sliders.data;
        this.hotBooks = hotBooks.data;
        this.loading = false;
      }
    },

        components:{
          Mheader,
          Swiper,
          loading
        }
    }
</script>

<style scoped lang="less">
  .container{
    margin: 0 auto;
    width: 90%;
    ul{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0;
      li{
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        img{
          max-width: 100%;
        }
      }
    }
  }

</style>
