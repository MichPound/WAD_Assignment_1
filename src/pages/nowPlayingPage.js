import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import OpenSimilarMoviesPage from '../components/buttons/openSimilarMoviesPage.js'

const NowPlayingPage = () => {
  const context = useContext(MoviesContext) 
  const now = context.now;

  return (
      <PageTemplate
        title='Now Playing'
        movies={now}
        action={(movie) => {
          // return <AddToFavoritesButton movie={movie} />;
          return <OpenSimilarMoviesPage movie={movie} /> ;
        }}
      />
  );
};

export default NowPlayingPage;