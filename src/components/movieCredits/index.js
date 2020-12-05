import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";


const MovieCredits = ({ movie }) => {

  const [credits, setCredits] = useState([]);

      useEffect(() => {
        getMovieCredits(movie.id).then(credits => {
        setCredits(credits);
    });
  }, []);


  // movie.poster_path could be profile path
    return (
      <>
       <table className="table table-striped table-bordered table-hover">
         <thead>
         <tr>
           <th scope="col">Name</th>
           <th scope="col">Department</th>
         </tr>
         </thead>
        <tbody>
         {credits.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{excerpt(r.known_for_department)}</td>
              </tr>
            );
          })}
        </tbody>
       </table>
      </>
    );
  };
  
  export default MovieCredits;