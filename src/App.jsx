import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/Home/HomePage'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import FavoritePage from './pages/Favorite/FavoritePage'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:imdbID' element={<MovieDetails />} />
          <Route path='/fav' element={<FavoritePage />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App