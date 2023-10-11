import React from "react"

const URL = "https://image.tmdb.org/t/p/w1280";

function Movie({title, poster_path, vote_average, overview}) {
    return (
      <div className="movie">
        <div className="movie-container">
          <img src={URL + poster_path} alt="영화 포스터" />
          <div className="movie-info">
              <h4>{title}</h4>
              <span>{vote_average}</span>
          </div>
          <div className="movie-detail">
            <h4>{title}</h4>
            <div>{overview}</div>
          </div>
        </div>
      </div>
    )
  }

export default Movie