<template>
    <div>
      <Counter></Counter>
    </div>
</template>

<script>
    import Counter from './components/count'
    export default {
        name: "App",
        components:{Counter},
        data(){
          return {msg:'hello'}
        }
    }
</script>

<style scoped>

</style>
