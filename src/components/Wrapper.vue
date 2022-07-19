<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
    name: 'Wrapper',

    data(){
        return{
            title: 'Main wrapper'
        }
    },
    computed: {},

}
</script>

<style>
    .wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>