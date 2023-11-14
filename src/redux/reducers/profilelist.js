import { GET_PROFILE_LIST } from "../actions";

const initialState = {
  list: {},
};

const profileListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default profileListReducer;
