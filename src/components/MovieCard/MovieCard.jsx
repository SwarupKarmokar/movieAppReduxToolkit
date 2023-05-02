import React, { useState } from 'react'
import './MovieCard.scss'
import { useDispatch } from 'react-redux';
import { add } from '../../redux/favcartSlice';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { data } = props;
    const dispatch = useDispatch();

    const handleAdd = (data) => {
        dispatch(add(data));
    }


    return (
        <div className='card-item'>
            <div className="card-inner">
                <Link to={`/movie/${data.imdbID}`}>
                    <div className="card-top">
                        <img src={data.Poster} alt="Oops" />
                    </div>
                </Link>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.Title}</h4>
                        <div className="fav pos">
                            <p>{data.Year}</p>
                            <button onClick={() => handleAdd(data)}>Add❤</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard