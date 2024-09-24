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
  <ul>
    <MainListFilmsElement 
      v-for="media in store.listMedias" :key="media.id" :media="media"
    />
  </ul>
</template>

<style lang="scss">

</style>