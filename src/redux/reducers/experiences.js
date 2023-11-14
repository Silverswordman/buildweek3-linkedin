import { GET_EXPERIENCES } from "../actions";

const initialState = {
  content: [],
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default experiencesReducer;
