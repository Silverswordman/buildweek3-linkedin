import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import profileListReducer from "../reducers/profilelist";
import experiencesReducer from "../reducers/experiences";

const myReducer = combineReducers({
  profile: profileReducer,
  profilelist: profileListReducer,
  experiences: experiencesReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
