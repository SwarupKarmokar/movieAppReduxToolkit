import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../Image/iam.jpg'
import { AiOutlineSearch } from "react-icons/ai";

import './NavStyle.scss'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchAsyncShows, fetchMovies } from '../../redux/movieSlice'

const Navbar = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart.movieCart)

    const [term, setTerm] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm('')
    }

    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'>ReduxToolkitMovieApp</Link>
            </div>

            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search Here"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit">
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>

            <div className="user-image">
                <Link to={'/fav'}>
                    <button>favorite: <span id='cart'>{data.length}</span></button>
                </Link>
                <img src={user} alt="Oops" />
            </div>
        </div>
    )
}

export default Navbar