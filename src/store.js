import { reactive } from "vue";

export const store = reactive({
    searchedFilm: "",
    listFilms: [],
    listSeries: [],
    listMedias: [],
    apiUrlFilms: "https://api.themoviedb.org/3/search/movie?api_key=ffdc9af86d5c7f48e60450138dfdd802",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=ffdc9af86d5c7f48e60450138dfdd802",
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
    getLanguageFlag(element) {
        const flagFinded = store.languagesFLags.find(flag => flag[element]);

        return flagFinded ? flagFinded[element] : 'https://img.icons8.com/?size=100&id=5tk64ASe7tdw&format=png&color=000000';
    },

})