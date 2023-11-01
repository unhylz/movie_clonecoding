import React from "react"
import PropTypes from "prop-types";
import { StyledMovieContainer, StyledMovieInfo, StyledMovieDetail } from './Movie.style';

const URL = "https://image.tmdb.org/t/p/w1280";

function Movie({title, poster_path, vote_average, overview}) {
    return (
      <StyledMovieContainer>
          <img src={URL + poster_path} alt="영화 포스터" />
          <StyledMovieInfo>
              <h4>{title}</h4>
              <span>{vote_average}</span>
          </StyledMovieInfo>
          <StyledMovieDetail>
            <h4>{title}</h4>
            <div>{overview}</div>
          </StyledMovieDetail>
      </StyledMovieContainer>
    )
  }

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie