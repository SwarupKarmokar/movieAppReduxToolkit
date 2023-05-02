import React from 'react'
import { useSelector } from 'react-redux'
import { STATUSES } from '../../redux/movieSlice';
import MovieCard from '../../components/MovieCard/MovieCard';

import './MovieListing.scss'

const MovieListing = () => {
    const { data: movies, status } = useSelector(state => state.movies.movies)
    // console.log(data)
    let renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    );

    const { data: shows, status1 } = useSelector(state => state.movies.shows)
    // console.log(data)
    let renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index) => (
            <MovieCard key={index} data={show} />
        ))
    ) : (
        <div className="movies-error">
            <h3>{shows.Error}</h3>
        </div>
    );


    if (status === STATUSES.LOADING) {
        return <h2 style={{ color: "white" }}>Loading</h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2 style={{ color: "white" }}>Something Went Wrong</h2>
    }
    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {renderShows}
                </div>
            </div>
        </div>
    )
}

export default MovieListing