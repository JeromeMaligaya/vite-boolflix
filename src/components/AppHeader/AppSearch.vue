<script>
import axios from 'axios';

export default {
  data(){
    return{
        searchedFilm: "",
        listFilms:[],
        apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=ffdc9af86d5c7f48e60450138dfdd802",
    }
  },
  components: {

  },
  methods: {
    getFilmsList(){
        axios.get(this.apiUrl, {
            params: {
                query: this.searchedFilm,
            }
        })
            .then(response => {
                // handle success
                console.log('response', response);
                this.listFilms = response.data.results;
                console.log('listFilms', this.listFilms)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
  },
}
</script>

<template>
    <header>
        
    </header>
</template>

<style lang="scss">

</style>
