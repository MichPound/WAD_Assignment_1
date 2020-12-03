import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import OpenSimilarMoviesPage from '../components/buttons/openSimilarMoviesPage.js'


const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        // return <AddToFavoritesButton movie={movie} />;
        return <OpenSimilarMoviesPage movie={movie} /> ;
      }}
    />
  );
};

export default MovieListPage;