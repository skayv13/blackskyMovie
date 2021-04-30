import React, { useState } from 'react';
import { setLoading } from '../store/actions/movieActions';

export const Search = ({ searchMovie }) => {

    const [searchValue, setSearchValue] = useState('')

    const handleInput = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    const handleSearchMovies = (e) => {
        e.preventDefault();
        searchMovie(searchValue);
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        setSearchValue('');
    }

    return (
        <div id="search">
            <form >
          <label >SEARCH</label>
          <input type="text" onChange={handleInput} id="search-field" placeholder='Search...' className="blink search-field"  />
          <input type="submit" value="GO!" onClick={handleSearchMovies} className="search-button" />
        </form>
        
        </div>
    );
};

