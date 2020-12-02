import React from "react";
import { Link } from "react-router-dom";

const OpenSimilarMoviesPage = ({ movie }) => {

    return (
        <Link
          className="btn w-100 btn-primary "
          to={{
            pathname: `/movies/similar`,
            state: {
              movie: movie
            }
          }}
        >
          Similar Movies
        </Link>
      );
    };

export default OpenSimilarMoviesPage;