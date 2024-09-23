<script>
import MainListFilmsElement from './MainListFilmsElement.vue';
import { store } from '../../store.js'

export default {
  data(){
    return{
      store
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
    <MainListFilmsElement />
  </ul>
</template>

<style lang="scss">

</style>