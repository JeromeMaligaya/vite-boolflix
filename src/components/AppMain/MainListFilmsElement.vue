<script>
export default {
  data(){
    return{
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

    ],
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
    getLanguageFlag(element) {
        const flagFinded = this.languagesFLags.find(flag => flag[element]);

        return flagFinded ? flagFinded[element] : 'https://img.icons8.com/?size=100&id=5tk64ASe7tdw&format=png&color=000000';
    },
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
    <div class="img-box">
      <img class="image-media" :src="getImageUrl(media.poster_path)" :alt="media.title ? media.title : media.name">
    </div>
    <div class="card-info">
      <p>title: {{ media.title ? media.title : media.name  }}</p>
      <p>original-title: {{ media.original_title ? media.original_title : media.original_name }}</p>
      <div class="lang-media">
          <p>language: {{ media.original_language }}</p>
          <img :src="getLanguageFlag(media.original_language)" :alt="media.original_language" />
      </div>
      <p>vote: <span class="stars-vote">{{ getStarsValue(media.vote_average) }}</span></p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
  
  .card-media{
      flex-basis: calc((100%/6));
      margin-bottom: 20px;
      position: relative;

      &:hover {
        .img-box {
          opacity: 0;
        }
        .card-info {
          opacity: 1;
        }
      }
      .img-box{
        width: 100%;
        height: 300px;

        .image-media{
          width: 100%;
          height: 100%;
          object-fit: cover;      
        }
      }
      .card-info{
        background-color: #000;
        width: 100%;
        height: 300px;
        padding: 15px 10px;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;

        p, .lang-media{
          margin-bottom: 10px;
        }
        p{
          padding: 0;
          color: #fff;
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
    }
</style>