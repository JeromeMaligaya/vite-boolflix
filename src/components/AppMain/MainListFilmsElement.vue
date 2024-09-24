<script>
import { store } from '../../store.js'

export default {
  data(){
    return{
      store,
    }
  },
  props:{
    listFilms:{
      type: Array,
      Required: true
    }
  },
  components: {

  },
  methods: {
    getImageUrl(mediaPath) {
      const imageUrl = 'http://image.tmdb.org/t/p/w500/';
      return mediaPath ? imageUrl + mediaPath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9H39OhrjpTZZkqqCRVV3rzhrtGVpvi6IWKg&s';
    },
  },
}
</script>

<template>
  <li v-for="(media, index) in store.listMedias" :key="index" class="card-media">
    <img :src="getImageUrl(media.poster_path)" :alt="media.title ? media.title : media.name">
    <p># {{ index }}</p>
    <p>title: {{ media.title ? media.title : media.name  }}</p>
    <p>original-title: {{ media.original_title ? media.original_title : media.original_name }}</p>
    <div class="lang-media">
        <p>language: {{ media.original_language }}</p>
        <img :src="store.getLanguageFlag(media.original_language)" :alt="media.original_language" />
    </div>
    <p>vote: {{ parseFloat(media.vote_average).toFixed(2) }}</p>
  </li>
</template>

<style lang="scss" scoped>
  
  .card-media{
        border: 2px black dashed;
        margin-bottom: 20px;
        p{
            margin: 0;
            padding: 0;
        }

        .lang-media{
            display: flex;
            align-items: center;
            gap: 5px;

            img{
                width: 25px;
            }
        }
    }
</style>