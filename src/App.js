import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMoviesBySearch, setLoading } from "./store/actions/movieActions";
import Movie from './components/Movie';
import { Search } from './components/Search';
import Header from './components/Header';
import Spinner from './components/Spinner';
import './style.css';

const App = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("man")

  const state = useSelector((state) => {
    return state;
  })

  const searchMovie = (x) => {
    dispatch(setLoading());
    dispatch(fetchMoviesBySearch(x));
  };

  useEffect(() => {
    dispatch(setLoading());
    dispatch(fetchMoviesBySearch(searchValue));
  }, [])

  return (

    <>
      {
        state.loading ?
        
                  <div>
            <Header heading="Blacksky Movie" searchMovie={searchMovie} />
            <Spinner />
          </div>
          : 
          <div>
            <Header heading="Blacksky Movie" searchMovie={searchMovie} />
            <Movie movies={state.movies} />
          </div >
      }
    </>
  )
}

export default App;