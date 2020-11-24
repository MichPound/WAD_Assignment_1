import React, { useEffect, createContext, useReducer } from "react";
import { getTVs } from "../api/tmdb-api";

export const TVContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        tvs: state.tvs.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
      };
    case "load":
      return { tvs: action.payload.tvs };
    case "add-review":
      // Completed in next section
      break;
    default:
      return state;
  }
};

const TVContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvs: [] });

  const addToFavorites = (tvId) => {
    const index = state.tvs.map((m) => m.id).indexOf(tvId);
    dispatch({ type: "add-favorite", payload: { tv: state.tvs[index] } });
  };

  const addReview = (tv, review) => {
     // Completed in next section
  };
  useEffect(() => {
    getTVs().then((tvs) => {
      dispatch({ type: "load", payload: { tvs } });
    });
  }, []);

  return (
    <TVContext.Provider
      value={{
        tvs: state.tvs,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;