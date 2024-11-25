import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

// getting movies using search of Harry
export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsynMovies',
  async () => {
    const movieText = 'Harry';
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

// getting movies using series
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsynShows',
  async () => {
    const seriesText = 'Friends';
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

// getting movies or shows details
export const fetchAsyncMoviesOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMoviesOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log('Pending...');
      })

      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log('Fetched Sucessfully...');
        state.movies = payload;
      })

      .addCase(fetchAsyncMovies.rejected, () => {
        console.log('Rejected...');
      })

      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log('Fetched Sucessfully...');
        state.shows = payload;
      })

      .addCase(fetchAsyncMoviesOrShowDetail.fulfilled, (state, { payload }) => {
        console.log('Fetched Sucessfully...');
        state.selectMovieOrShow = payload;
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
