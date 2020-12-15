import { createStore, compose } from "redux";

const initialState = {
  token: null, //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};

export const SET_TOKEN = "SET_TOKEN";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
