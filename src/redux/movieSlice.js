import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from '../common/Api/movieApi'
import { APIkey } from '../common/Api/movieKey'
const movieText = 'Harry'
const showText = 'friends'

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: {
            data: [],
            status: STATUSES.IDLE,
        },
        shows: {
            data: [],
            status: STATUSES.IDLE,
        },
        movieshowsdetails: {
            data: [],
            status: STATUSES.IDLE,
        },
    },

    reducers: {
        removePrevData(state, action) {
            state.movieshowsdetails.data = []
        }
    },

    extraReducers: (builder) => {
        builder
            // MOVIE PART 
            .addCase(fetchMovies.pending, (state, action) => {
                state.movies.status = STATUSES.LOADING
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies.data = action.payload
                state.movies.status = STATUSES.IDLE
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.movies.status = STATUSES.ERROR
            })

            // SHOWS PART 
            .addCase(fetchAsyncShows.pending, (state, action) => {
                state.shows.status = STATUSES.LOADING
            })
            .addCase(fetchAsyncShows.fulfilled, (state, action) => {
                state.shows.data = action.payload
                state.shows.status = STATUSES.IDLE
            })
            .addCase(fetchAsyncShows.rejected, (state, action) => {
                state.shows.status = STATUSES.ERROR
            })

            // MOVIES AND SHOWS DETAILS PART 
            .addCase(fetchAsyncMovieOrShowsDetails.pending, (state, action) => {
                state.movieshowsdetails.status = STATUSES.LOADING
            })
            .addCase(fetchAsyncMovieOrShowsDetails.fulfilled, (state, action) => {
                state.movieshowsdetails.data = action.payload
                state.movieshowsdetails.status = STATUSES.IDLE
            })
            .addCase(fetchAsyncMovieOrShowsDetails.rejected, (state, action) => {
                state.movieshowsdetails.status = STATUSES.ERROR
            })
    }
})

export const { removePrevData } = movieSlice.actions;


export const fetchMovies = createAsyncThunk('movies/fetch', async (term) => {
    const res = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=movie`)
    return res.data;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=series`)
    return response.data;
})

export const fetchAsyncMovieOrShowsDetails = createAsyncThunk('showsmovies/fetchAsyncMovieOrShowsDetails', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`)
    return response.data;
})


export default movieSlice.reducer;