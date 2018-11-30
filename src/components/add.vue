<template>
    <div>
      <Mheader :back="true">
        添加
      </Mheader>
      <div class="content">
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
            <label for="bookCover">书的封面</label>
            <input type="text" v-model="onebook.bookCover" id="bookCover">
          </li>
          <li>
            <button @click="add">确认添加</button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import Mheader from '../base/Mheader'
    import {addBook} from '../api'
    export default {
        components:{Mheader},
        data(){
          return {onebook:{}}
        },
      methods:{
          async add(){
            await addBook(this.onebook);
            this.$router.push('/list');
          }
      }
    }
</script>

<style scoped>

</style>
