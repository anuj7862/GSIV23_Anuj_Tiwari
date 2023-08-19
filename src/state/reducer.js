import { GET_MOVIES, GET_MOVIE_CAST_DETAILS, GET_MOVIE_DETAILS } from "./actionTypes";

const initialState = {
    movies_list: [],
    movie_details:[],
    movie_cast_details:[],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return { ...state, movies_list: action.payload };
      case GET_MOVIE_DETAILS:
        return {...state, movie_details: action.payload};
      case GET_MOVIE_CAST_DETAILS:
        return {...state, movie_cast_details: action.payload};
      default:
        return state;
    }
  };
  
  export default reducer;