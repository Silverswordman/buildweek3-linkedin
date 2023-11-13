import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import profileListReducer from "../reducers/profilelist";

const myReducer = combineReducers({
  profile: profileReducer,
  profilelist: profileListReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
