import { SET_KEY } from "../actions";

const initialState = {
 key: "",
};

const keyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEY:
      return {
       
        query: action.payload,
      };
    default:
      return state;
  }
};

export default keyReducer;
