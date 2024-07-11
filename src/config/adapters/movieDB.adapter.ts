import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";



export const movieDBfetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '2694d5fcbacac44f24e5f99fd5960389',
        api_key: THE_MOVIE_DB_KEY,
        language: 'es'
    }
});
