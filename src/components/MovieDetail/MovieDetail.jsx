import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncMoviesOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from '../../features/movies/movieSlice';
import './MovieDetail.scss';

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return Object.keys(data).length === 0 ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <p className="text-white text-2xl">...Loading</p>
    </div>
  ) : (
    <div className="movie-section grid grid-cols-1 lg:grid-cols-2 gap-7 p-10">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i>: {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i>: {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i>: {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i>: {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Actors</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.title} width={400} />
      </div>
    </div>
  );
}

export default MovieDetail;
