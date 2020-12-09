import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import WatchListPage from './pages/watchListPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SimilarMoviesPage from './pages/similarMoviesPage'
import PopularMoviesPage from './pages/popularMoviesPage'
import NowPlayingPage from './pages/nowPlayingPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>    {/* NEW */}
              <Switch>
               <Route exact path="/reviews/form" component={AddMovieReviewPage} />
               <Route path="/reviews/:id" component={MovieReviewPage} />
               <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
               <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
               <Route path="/movies/similar" component={SimilarMoviesPage} />
               <Route exact path="/movies/popular" component={PopularMoviesPage} />
               <Route exact path="/movies/now_playing" component={NowPlayingPage} />
               <Route exact path="/watchList" component={WatchListPage} />
               <Route path="/movies/:id" component={MoviePage} />
               <Route path="/" component={HomePage} />
               <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};
 
ReactDOM.render(<App />, document.getElementById("root"));