<script>
import MainListFilmsElement from './MainListFilmsElement.vue';
import { store } from '../../store.js'

export default {
  data(){
    return{
      store,
    }
  },
  components: {
    MainListFilmsElement,
  },
  methods: {

  },
  computed: {
    listFilms() {
      return store.listFilms;
    },
  },
  mounted(){
    console.log('listFilms', this.listFilms)
  }
}
</script>

<template>
  <ul>
    <MainListFilmsElement 
      :listFilms="listFilms"
    />
  </ul>
</template>

<style lang="scss">

</style>