<script>
import MainListFilms from './AppMain/MainListFilms.vue';

export default {
  data(){
    return{

    }
  },
  components: {
    MainListFilms,
  },
  methods: {

  },
}
</script>

<template>
    <main>
        <MainListFilms />
    </main>
</template>

<style lang="scss">
  main{
    padding: 10px 25px;
    background-color: #1B1B1B;
  }
</style>
