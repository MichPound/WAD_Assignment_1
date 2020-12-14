import React from "react";
import "./headerMovie.css";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row backCol">
      <div className="col-md-6 offset-4">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;