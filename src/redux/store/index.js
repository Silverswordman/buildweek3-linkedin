import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import profileListReducer from "../reducers/profilelist";
import experiencesReducer from "../reducers/experiences";
import queryReducer from "../reducers/query";
import jobsReducer from "../reducers/jobs";
import keyReducer from "../reducers/key";

const myReducer = combineReducers({
  profile: profileReducer,
  profilelist: profileListReducer,
  experiences: experiencesReducer,
  query: queryReducer,
  jobs: jobsReducer,
  key:keyReducer
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
