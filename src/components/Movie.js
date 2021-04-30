import React from 'react'

//http://www.omdbapi.com/?i=tt3896198&apikey=85989b1b

const Movie = (props) => {
    return (
        <>
            <div id="main">
    <div id="content">
      <div className="box">
        <div className="head">
          <h2>Silahkan cari Film Favoritmu</h2>
          <p className="text-right"><a href="#">See all</a></p>
        </div>
        {props.movies.Search != undefined ? props.movies.Search.map((movie, index) => (
        <div className="movie">
        
          <div className="movie-image"> 
          <span className="play">
              <span className="name">{movie.Title}</span>
              </span> 
              <a href="#"><img src={movie.Poster} alt="" height="214px" width="152px"/></a> 
              </div>                      
        </div>
        )) : <div>{props.movies.Error}</div>}  
    </div>
    </div>
</div>

            
        </>
    )
}

export default Movie