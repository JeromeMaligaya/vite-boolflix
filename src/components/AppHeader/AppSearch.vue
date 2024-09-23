<script>
import axios from 'axios';
import { store } from '../../store.js'

export default {
  data(){
    return{
        store,
    }
  },
  components: {

  },
  methods: {
    getFilmsList(){
        axios.get(store.apiUrl, {
            params: {
                query: store.searchedFilm,
            }
        })
        .then(response => {
            // handle success
            console.log('response', response);
            store.listFilms = response.data.results;
            console.log('listFilms', store.listFilms)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    },
    
  }
}
</script>

<template>
    <header>
        <input type="text" name="" id="" class="me-2" v-model="store.searchedFilm" @keyup.enter="getFilmsList(store.searchedFilm)">
        <button type="button" @click="getFilmsList(store.searchedFilm)">SEND</button>
    </header>
</template>

<style lang="scss">

</style>
