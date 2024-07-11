import { useEffect, useState } from "react";

import * as MovieUseCase from '../../core/use-cases';
import { movieDBfetcher } from "../../config/adapters/movieDB.adapter";

import { FullMovie } from "../../core/models/movie.model";


export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);

    const [movie, setMovie] = useState<FullMovie>();

    useEffect(()=>{
        loadMovie();
    },[movieId]);


    const loadMovie = () => {
        setIsLoading(true);
        
        const movie = MovieUseCase.getMovieByIdUseCase(movieDBfetcher, movieId);

        movie.then(movie=>{
            setMovie(movie);
            setIsLoading(false);
        }).catch(err=>console.log(`Error to get movie ${err}`));
    }


    return {
        isLoading,
        movie       
    }
}
