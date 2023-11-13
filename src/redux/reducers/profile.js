import { GET_PROFILE } from "../actions";

const initialState = {
  profiles: {},
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
