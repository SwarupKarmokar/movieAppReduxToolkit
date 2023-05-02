import { createSlice } from "@reduxjs/toolkit";

const favcartSlice = createSlice({
    name: 'cart',
    // initialState: [],
    initialState: {
        // movieCart: []
        movieCart: localStorage.getItem('movieCart') ? JSON.parse(localStorage.getItem('movieCart')) : []
    },
    reducers: {
        add(state, action) {
            // state.push(action.payload)
            let find = state.movieCart.findIndex(item => item.imdbID === action.payload.imdbID);

            if (find >= 0) {
                // console.log("already present")
                return;
            }
            else {
                state.movieCart.push(action.payload)
                localStorage.setItem('movieCart', JSON.stringify(state.movieCart))
            }
        },

        remove(state, action) {
            // return state.filter(item => item.imdbID !== action.payload)
            state.movieCart = state.movieCart.filter(item => item.imdbID !== action.payload);

            localStorage.setItem('movieCart', JSON.stringify(state.movieCart))
        },
    }
})

export const { add, remove } = favcartSlice.actions;
export default favcartSlice.reducer;