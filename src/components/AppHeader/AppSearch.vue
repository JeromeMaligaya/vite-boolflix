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
        axios.get(store.apiUrlFilms, {
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
    getSeriesList(){
        axios.get(store.apiUrlSeries, {
            params: {
                query: store.searchedFilm,
            }
        })
        .then(response => {
            // handle success
            console.log('response', response);
            store.listSeries = response.data.results;
            console.log('listSeries', store.listSeries)

            // listMedias assemble
            store.listMedias = [...store.listFilms, ...store.listSeries]
            console.log('listMedias', store.listMedias)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    },

    searchMedias(){
        this.getFilmsList(),
        this.getSeriesList()   
    }
    
  }
}
</script>

<template> 
    <div class="search-bar">
        <input type="text" name="serch-media" id="search-media" v-model="store.searchedFilm" @keyup.enter="searchMedias()">
        <button type="button" @click="searchMedias()">SEARCH</button>
    </div>
</template>

<style lang="scss">
    .search-bar{
        #search-media{
            margin-right: 5px;
        }
    }
</style>
