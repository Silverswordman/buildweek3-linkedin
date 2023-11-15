import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import profileListReducer from "../reducers/profilelist";
import experiencesReducer from "../reducers/experiences";
import queryReducer from "../reducers/query";
import jobsReducer from "../reducers/jobs";

const myReducer = combineReducers({
  profile: profileReducer,
  profilelist: profileListReducer,
  experiences: experiencesReducer,
  query: queryReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
