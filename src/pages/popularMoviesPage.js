import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext) 
  const popular = context.popular.filter((m) => {
    return !("favorite" in m);
  });

  return (
      <PageTemplate
        title='Popular Movies'
        movies={popular}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} />;
        }}
      />
  );
};

export default PopularMoviesPage;