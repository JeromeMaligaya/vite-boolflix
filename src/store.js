import { reactive } from "vue";

export const store = reactive({
    searchedFilm: "",
    listFilms: [],
    listSeries: [],
    listMedias: [],
    apiUrlFilms: "https://api.themoviedb.org/3/search/movie?api_key=ffdc9af86d5c7f48e60450138dfdd802",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=ffdc9af86d5c7f48e60450138dfdd802",
})