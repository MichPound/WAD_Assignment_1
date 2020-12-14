// import React from "react";
import React, { useContext } from "react";
import {MoviesContext} from '../contexts/moviesContext'
import PageTemplate from '../components/templateMoviePage'
import SimilarMovies from "../components/similarMoviesTemplate";
import AddReviewButton from '../components/buttons/addReview'

const SimilarMoviesPage = props => {
  //return (
  //    <PageTemplate movie={props.location.state.movie}>
  //      <SimilarMovies similar={props.location.state.similar} /> 
  //    </PageTemplate>
  //);

  // const context = useContext(MoviesContext);
  // const movies = props.location.state.movie;

  return <div className="row movies bg-info">
    <SimilarMovies movie={props.location.state.movie}></SimilarMovies>
  </div>

  // return (
  //   <SimilarMovies
  //     title="No. Movies"
  //     movies={movies}  /* Changed */
  //     action={(movie) => {
  //       // return <AddToFavoritesButton movie={movie} />;
  //       return <AddReviewButton movie={movie} /> ;
  //     }}
  //   />
  // );

};

export default SimilarMoviesPage;