<template>
  <swiper v-if="swiperSlides.length>1" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop : true,
          autoplay:true,
        },
      }
    },
  }
</script>
<style scoped>
  img{
    width: 100%;
  }
</style>
