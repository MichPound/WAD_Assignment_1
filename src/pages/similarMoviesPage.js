import React from "react";
import PageTemplate from '../components/templateMoviePage'
import SimilarMovies from "../components/similarMoviesTemplate";
import AddReviewButton from '../components/buttons/addReview'

const SimilarMoviesPage = props => {
  //return (
  //    <PageTemplate movie={props.location.state.movie}>
  //      <SimilarMovies similar={props.location.state.similar} /> 
  //    </PageTemplate>
  //);


  return (
    <SimilarMovies
      movies={props.location.state.movie}
      title={"Similar Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );

};

export default SimilarMoviesPage;