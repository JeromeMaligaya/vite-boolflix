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
}
</script>

<template>
  <ul id="list-media">
    <MainListFilmsElement 
      v-for="media in store.listMedias" :key="media.id" :media="media"
    />
  </ul>
</template>

<style lang="scss">
  #list-media{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
</style>