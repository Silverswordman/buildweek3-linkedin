import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "../reducers/profile";

const myReducer = combineReducers({ profiles: ProfileReducer });

const store = configureStore({
  reducer: myReducer,
});
export default store;
