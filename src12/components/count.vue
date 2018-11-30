<template>
    <div>
      计数器:<button @click="cut">-</button>
      总数:{{$store.state.count}}
      计数器:<button @click="add">+</button>
      {{$store.getters.val}}
    </div>
</template>

<script>
    import * as types from '../store/mutations-type/mutatinon-type'
    export default {
        name: "count",
        methods:{
          add(){//提交add的mutation,载荷
            this.$store.commit(types.ADD,2)
          },
          cut(){
            this.$store.commit(types.CUT)
          }
        }
    }
</script>

<style scoped>

</style>
