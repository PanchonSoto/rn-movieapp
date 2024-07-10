import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/movie-db-movie.res";

import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

import { FullMovie } from "../../models/movie.model";



export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number):Promise<FullMovie> => {

    try {
        
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

        return MovieMapper.fromMovieDbToEntity(movie);


    } catch (error) {
        throw new Error(`Cannot get movie with id:${movieId}`)
    }
}
