import { GET_MOVIES } from "./actionTypes";

const initialState = {
    movies_list: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return { ...state, movies_list: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;