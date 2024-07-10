import { useEffect, useState } from "react";
import { Movie } from "../../core/models/movie.model";

import * as UseCases from '../../core/use-cases';
import { movieDBfetcher } from "../../config/adapters/movieDB.adapter";


let popularPageNumber = 1;

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topTared, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad();
        
    }, [])

    const initialLoad = async() => {

        const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] = await Promise.all([
            UseCases.moviesNowPlayingUseCase(movieDBfetcher),
            UseCases.moviesUpcomingUseCase(movieDBfetcher),
            UseCases.moviesTopRatedUseCase(movieDBfetcher),
            UseCases.moviesPopularUseCase(movieDBfetcher)
        ]);

        setnowPlaying(nowPlayingMovies);
        setUpcoming(upcomingMovies);
        setTopRated(topRatedMovies);
        setPopular(popularMovies);

        setisLoading(false);
        // console.log('now=> ',nowPlayingMovies[0].title);
        // console.log('upcoming=> ', upcomingMovies[0].title);
        // console.log('topRatedMovies=> ',topRatedMovies[0].title);
        // console.log('popularMovies=> ', popularMovies[0].title);


    } 
    

    return {
        isLoading,
        nowPlaying,
        popular,
        topTared,
        upcoming,

        //methods
        popularNextPage: async() => {
            popularPageNumber++;
            const popularMovies = await UseCases.moviesPopularUseCase(movieDBfetcher, {
                page: popularPageNumber,
            });
            setPopular(prev=> [...prev,...popularMovies])
        }
    };
}
