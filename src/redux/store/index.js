import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";

const myReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
