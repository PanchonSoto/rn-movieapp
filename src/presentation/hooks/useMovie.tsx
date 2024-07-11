import { useEffect, useState } from "react";

import * as UseCase from '../../core/use-cases';
import { movieDBfetcher } from "../../config/adapters/movieDB.adapter";

import { FullMovie } from "../../core/models/movie.model";
import { Cast } from "../../core/models/cast.entity";


export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);

    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(()=>{
        loadMovie();
    },[movieId]);


    const loadMovie = async() => {
        setIsLoading(true);
        
        const moviePromise = UseCase.getMovieByIdUseCase(movieDBfetcher, movieId);
        const castPromise = UseCase.getMovieCastUseCase(movieDBfetcher, movieId);

        const [fullMovie, cast] = await Promise.all([moviePromise, castPromise]);

        setMovie(fullMovie);
        setCast(cast);

        setIsLoading(false);
    }


    return {
        isLoading,
        movie,
        cast       
    }
}
