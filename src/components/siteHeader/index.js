import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

import { useAuth } from "../../contexts/authContext"

const SiteHeader = () => {

  const {currentUser, signout} = useAuth();
  async function handleLogout() {
      await signout()
  }

  
  return (
    <nav className="navbar  navbar-light fixed-top headerColor ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />


     
        <span className="navbar-text text-light">
        {/* ................................................................................... */}
          {"Users Email: "}
          {/* {currentUser.email} */}
        {/* ................................................................................... */}
      </span>
     


      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Movies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/popular">
              Popular Movies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming Movies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/now_playing">
              Now Playing
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/watchList">
              Watch List
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              Log In
            </Link>
          </li>

          <li className="nav-item">
           <button onClick={handleLogout} className="btn btn-primary">
            Log Out
           </button> 
          </li>

          {/* if {currentUser.email} !== null {
            <Link className="nav-link text-white" to="/login">
              Signout
            </Link>
          }else{
            <Link className="nav-link text-white" to="/login">
              Log In
            </Link>
          } */}

          {/* <li className="nav-item">
            <Link className="nav-link text-white" to="/signup">
              Sign Up
            </Link>
          </li> */}

        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;