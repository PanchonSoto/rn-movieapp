import type { Result } from "../interfaces/movie-db.responses";

import { FullMovie, Movie } from "../../core/models/movie.model";

import { MovieDBMovie } from "../interfaces/movie-db-movie.res";



export class MovieMapper {

    static fromMovieDBResultToEntity(result: Result): Movie{
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        }
    }

    static fromMovieDbToEntity(movie:MovieDBMovie): FullMovie {
        return {
            id: movie.id,
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            description: movie.overview,
            rating: movie.vote_average,
            releaseDate: new Date(movie.release_date),
            genres: movie.genres.map(genre => genre.name), //mapeando 'Genre[]' a 'string[]',
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name),
        }
    }
}
