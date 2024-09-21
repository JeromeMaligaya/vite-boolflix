<script>
import axios from 'axios';

export default {
  data(){
    return{
        searchedFilm: "",
        listFilms:[],
        apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=ffdc9af86d5c7f48e60450138dfdd802",
        languagesFLags: [
            {
                en: "https://img.icons8.com/?size=100&id=xapj7ZzAUZKI&format=png&color=000000",
            },
            {
                it: "https://img.icons8.com/?size=100&id=JfBHeXaPw7Gu&format=png&color=000000",
            },
            {
                de: "https://img.icons8.com/?size=100&id=OyqucOGoByl9&format=png&color=000000",
            },
            {
                fr: "https://img.icons8.com/?size=100&id=5RtaKEr09Jy6&format=png&color=000000",
            },
            {
                es: "https://img.icons8.com/?size=100&id=nWg9OOe3Oyy0&format=png&color=000000",
            },
            {
                pt: "https://img.icons8.com/?size=100&id=U7gojzqjuzog&format=png&color=000000",
            },
            {
                zh: "https://img.icons8.com/?size=100&id=OafC2pWK4RV4&format=png&color=000000",
            },
            {
                ja: "https://img.icons8.com/?size=100&id=KvglG3FkCenH&format=png&color=000000",
            },

        ]
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

    },
    getLanguageFlag(element){
    const flagFinded = this.languagesFLags.find(flag => flag[element]);

    return flagFinded ? flagFinded[element] : 'https://img.icons8.com/?size=100&id=5tk64ASe7tdw&format=png&color=000000';
    },
    
  }
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
