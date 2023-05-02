import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../redux/favcartSlice';
import { useNavigate } from 'react-router-dom';

import './FavStyle.scss'

const FavoritePage = () => {
    const navigate = useNavigate();

    // const movies = useSelector(state => state.cart)
    const movies = useSelector(state => state.cart.movieCart)
    // console.log(movies)
    const dispatch = useDispatch();

    const handleRemove = (movieID) => {
        dispatch(remove(movieID))
    }


    return (
        <div>
            <h3 style={{ color: 'white', marginBottom: '20px' }}>Favorite Page</h3>

            {
                movies.length > 0 ?
                    movies.map(item => (
                        <div className="flex" key={item.imdbID}>
                            <div className='title'>
                                <img src={item.Poster} alt="Oops" />
                                <span>{item.Title}</span>
                            </div>
                            <div>
                                <button onClick={() => handleRemove(item.imdbID)}>Remove</button>
                            </div>
                        </div>
                    )) : navigate('/')
            }
        </div>
    )
}

export default FavoritePage