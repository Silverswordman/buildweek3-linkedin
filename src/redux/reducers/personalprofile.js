import { GET_PERSONAL_PROFILE } from "../actions";

const initialState = {
  account: {},
};

const personalProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONAL_PROFILE:
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
};

export default personalProfileReducer;
