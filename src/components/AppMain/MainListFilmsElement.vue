<script>
import { store } from '../../store.js'

export default {
  data(){
    return{
      store,
    }
  },
  props:{
    media:{
      type: Object,
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
    getStarsValue(vote) {
      const starNumber = Math.ceil(vote / 2); 
      return vote ? '★'.repeat(starNumber) : '-'; 
    },
  },
}
</script>

<template>
  <li class="card-media">
    <img :src="getImageUrl(media.poster_path)" :alt="media.title ? media.title : media.name">
    <p>title: {{ media.title ? media.title : media.name  }}</p>
    <p>original-title: {{ media.original_title ? media.original_title : media.original_name }}</p>
    <div class="lang-media">
        <p>language: {{ media.original_language }}</p>
        <img :src="store.getLanguageFlag(media.original_language)" :alt="media.original_language" />
    </div>
    <p>vote: {{ getStarsValue(media.vote_average) }}</p>
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