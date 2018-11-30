<template>
    <div>
      <Mheader :back="true">列表页</Mheader>
      <div class="content" ref="scroll" @scroll="load">
        <ul>
          <router-link v-for="(book,index) in books" :key="index" :to="{name:'detail',params:{bid:book.bookId}}" tag="li">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{book.bookPrice}}</b>
              <div><button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop="addCard(book)">添加</button></div>

            </div>
          </router-link>
        </ul>
        <div class="mloading" @click="add">加载更多</div>
      </div>
    </div>
</template>

<script>
  import Mheader from '../base/Mheader'
  import {getBooks} from '../api'
  import {removeBook} from "../api";
  import {pagination} from '../api'
  import * as Types from '../store/mutations-type'

  export default {
        name: "list",
        components:{
          Mheader:Mheader,
        },
    mounted(){
      let scroll = this.$refs.scroll;
      let top = scroll.offsetTop;
      let distance = 0;
      let isMove = false;
      scroll.addEventListener('touchstart',(e)=>{
        if(scroll.scrollTop!=0||scroll.offsetTop!=top) return;
        let start = e.touches[0].pageY;
        let move = (e)=>{
          isMove = true;
          let current = e.touches[0].pageY;
          distance = current - start;
          if(distance>0){
            if (distance<=50) {
              scroll.style.top = distance+top+'px';
            }else {
             distance = 50;
             scroll.style.top = top + 50+'px';
            }

          }else{
            scroll.removeEventListener('touchmove',move);
            scroll.removeEventListener('touchend',end);
          }
        };

        let end = (e)=>{
          if(!isMove) return;
          isMove = false;
         clearInterval(this.timers);
         this.timers = setInterval(()=>{
            if (distance<=0){
              clearInterval(this.timers);
              distance = 0;
              scroll.style.top = top +'px';
              scroll.removeEventListener('touchmove',move);
              scroll.removeEventListener('touchend',end);
              this.books=[];
              this.offset =0;
              this.getData();
              return
            }
            distance-=1;
            scroll.style.top = top + distance + 'px';
          },1);
        };
        scroll.addEventListener('touchmove',move);
        scroll.addEventListener('touchend',end);
      },false)
    },
      created(){
          this.getData()
      },
      methods:{
        // async getData(){
        //    let {data:books} = await getBooks();
        //    this.books = books;
        // },
        add(){
          this.getData();
        },
        addCard(book){
          this.$store.commit(Types.ADD_CARD,book)
        },
        load(){
          clearTimeout(this.time);
          this.time = setTimeout(()=>{
            let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
            console.log(1);
            if(scrollTop+clientHeight+20>scrollHeight){
              this.getData();
            }
          },10)

        },
        async remove(id){
          console.log(1);
          await removeBook(id);
          this.books = this.books.filter(item=>item.bookId!== id);
        },
        async getData(){
          if(this.hasMore&&!this.isLoading){
            this.isLoading = true;
          let morebook = await pagination(this.offset);
          let books = morebook.data.books;
          let hasMore = morebook.data.hasMore;
          this.books= [...this.books,...books];
            this.hasMore = hasMore;
            this.isLoading = false;
          this.offset = this.books.length;
          }
        }
      },
      data(){
        return {books:[],offset:0,hasMore:true,isLoading:false}
      }
    }
</script>

<style scoped lang="less">
ul{
  padding:10px;
  display:flex;
  flex-direction: column;
  margin:10px 20px;
  li{
    display: flex;
    margin:10px;

  }
  img{
    width: 50%;
    height: 150px;
  }
  button{
    display: block;
    outline: none;
    background: red;
    border: none;
    border-radius: 5px;
  }

}
.mloading{
  width:150px;height:30px;line-height:30px;font-size:16px;text-align:center;border-radius:3px;opacity:0.7;background:#000;margin:10px auto 30px;color:#fff;
}
</style>
