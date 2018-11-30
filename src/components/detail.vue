<template>
    <div class="detail">
      <Mheader :back="true">列表页</Mheader>
      <ul>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" v-model="onebook.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="onebook.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model="onebook.bookPrice" id="bookPrice">
        </li>
        <li>
          <button @click="updata">确认修改</button>
        </li>
      </ul>
    </div>
</template>

<script>
   import {getOneBook,upDataBook} from "../api";
   import Mheader from "../base/Mheader"

   export default {
        name: "detail",
        components:{Mheader},
        created(){
          this.getBook();
        },
     watch:{
       $route(){
         this.getBook();
       }
     },
        methods:{
          async getBook(){
            let {data:onebook} = await getOneBook(this.bid);
            this.onebook = onebook;
            if(Object.keys(this.onebook).length<1){this.$router.push('/list');}
          },
          async updata(){
            await upDataBook(this.bid,this.onebook);
            this.$router.push('/list');
          }
        },
        computed:{
          bid(){
            return this.$route.params.bid
          }

        },
        data(){
          return {onebook:{}};
        },

    }
</script>

<style scoped lang="less">
  .detail{
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    right: 0;

  }
  ul{
    margin-top: 60px;
  }
</style>
