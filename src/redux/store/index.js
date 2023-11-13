import {  configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "../reducers/profile";

// const myReducer = combineReducers({});

const store = configureStore({
  reducer: ProfileReducer,
});
export default store;
