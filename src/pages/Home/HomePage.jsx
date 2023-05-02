import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchAsyncShows, fetchMovies } from '../../redux/movieSlice'


const HomePage = () => {
    const dispatch = useDispatch()

    const movieText = 'spider'
    const showText = 'super'

    useEffect(() => {
        dispatch(fetchMovies(movieText));
        dispatch(fetchAsyncShows(showText));
        // const fetchMovies = async () => {
        //     const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
        //     // console.log(response)
        //     dispatch(addMovies(response.data))
        // }
        // fetchMovies()
    }, [])
    return (
        <>
            <div className='banner-img'></div>
            <MovieListing />
        </>
    )
}

export default HomePage