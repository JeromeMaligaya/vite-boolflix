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
    getLanguageFlag(element){
    const flagFinded = store.languagesFLags.find(flag => flag[element]);

    return flagFinded ? flagFinded[element] : 'https://img.icons8.com/?size=100&id=5tk64ASe7tdw&format=png&color=000000';
    },
    
  }
}
</script>

<template>
    <header>
        <input type="text" name="" id="" class="me-2" v-model="store.searchedFilm" @keyup.enter="getFilmsList(store.searchedFilm)">
        <button type="button" @click="getFilmsList(store.searchedFilm)">SEND</button>
        <ul>
            <li v-for="(film, index) in store.listFilms" :key="index" class="card-film">
                <p>film {{ index }}</p>
                <p>title: {{ film.title }}</p>
                <p>original-title: {{ film.original_title }}</p>
                <div class="lang-film">
                    <p>language: {{ film.original_language }}</p>
                    <img :src="getLanguageFlag(film.original_language)" :alt="film.original_language" />
                </div>
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

        .lang-film{
            display: flex;
            align-items: center;
            gap: 5px;

            img{
                width: 25px;
            }
        }
    }


</style>
