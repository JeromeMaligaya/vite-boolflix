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
        <input type="text" name="" id="" class="me-2" v-model="searchedFilm" @keyup.enter="getFilmsList(searchedFilm)">
        <button type="button" @click="getFilmsList(searchedFilm)">SEND</button>
        <ul>
            <li v-for="(film, index) in listFilms" :key="index" class="card-film">
                <p>film {{ index }}</p>
                <p>title: {{ film.title }}</p>
                <p>original-title: {{ film.original_title }}</p>
                <p>language: {{ film.original_language }}</p>
                <p>vote: {{ parseFloat(film.vote_average).toFixed(2) }}</p>
            </li>
        </ul>
    </header>
</template>

<style lang="scss">

    .card-film{
        border: 2px black dashed;
        margin-bottom: 20px;
        p{
            margin: 0;
            padding: 0;
        }
    }

</style>
