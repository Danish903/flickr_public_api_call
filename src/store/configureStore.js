import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { flickrReducer } from "../reducers";
import asyncReducer from "../reducers/asyncReducer";

export const store = createStore(
  combineReducers({
    flickrData: flickrReducer,
    loading: asyncReducer
  }),
  applyMiddleware(thunk)
);
