import { GET_DATA } from "../actions/actionTypes";
const initState = [];
export const flickrReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.data];
    default:
      return state;
  }
};
