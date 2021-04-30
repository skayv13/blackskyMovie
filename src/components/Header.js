import React from 'react';
import { Search } from './Search';

const Header = (props) => {
    return (
        <>
        <div id="header">
    <h1 id="logo"><a href="#">MovieHunter</a></h1>
    <div className="social"> <span>FOLLOW US ON:</span>
      <ul>
        <li><a className="twitter" href="#">twitter</a></li>
        <li><a className="facebook" href="#">facebook</a></li>
        <li><a className="vimeo" href="#">vimeo</a></li>
        <li><a className="rss" href="#">rss</a></li>
      </ul>
    </div>
    <div id="navigation">
      <ul>
        <li><a className="active" href="#">HOME</a></li>
        <li><a className="#">MOVIES</a></li>
        <li><a className="#">SERIES</a></li>
        <li><a className="#">EPISODE</a></li>
      </ul>
    </div>
    <div id="sub-navigation">
      <ul>
        <li><a href="#">SHOW ALL</a></li>
        <li><a href="#">LATEST TRAILERS</a></li>
        <li><a href="#">TOP RATED</a></li>
        <li><a href="#">MOST COMMENTED</a></li>
      </ul>
      <Search searchMovie={props.searchMovie} />
    </div>
  </div>
        
        </>
    );
};

export default Header;