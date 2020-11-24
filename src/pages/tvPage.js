import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {TVContext} from '../contexts/tvContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TVListPage = () => {
  const context = useContext(TVContext);
  const tvs = context.tvs.filter((m) => {
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="TV"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavoritesButton tv={tv} />;
      }}
    />
  );
};

export default TVListPage;