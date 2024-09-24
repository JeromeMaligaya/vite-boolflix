<script>
import AppSearch from './AppHeader/AppSearch.vue';


export default {
  data(){
    return{

    }
  },
  components: {
    AppSearch,
  },
  methods: {

  },
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <AppSearch />
    </header>
</template>

<style lang="scss">
   header{
        padding: 15px 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1B1B1B;

        h1{
            color: red
        }
    }
</style>
