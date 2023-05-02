import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'
import cartReducer from './favcartSlice'

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        cart: cartReducer
    }
})