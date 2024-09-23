<script>
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

  },
}
</script>

<template>
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
</template>

<style lang="scss" scoped>
  
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