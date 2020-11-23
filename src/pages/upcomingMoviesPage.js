import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
// import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext) 
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("watchList" in m);
  });

  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={upcoming}
        action={(movie) => {
          return <AddToWatchListButton movie={movie} />;
        }}
      />
  );
};

export default UpcomingMoviesPage;