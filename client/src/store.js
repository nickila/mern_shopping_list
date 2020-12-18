// We shouldn't have to touch this file after it's set up.
// This will all let us use the redux tools
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// set initial state to an empty object
const initialState = {};
// any middleware we're going to use is in an array. in this case we're just using thunk
const middleware = [thunk];
// because we're using redux tools we want to pass it into compose
const store = createStore(
  rootReducer,
  initialState,
  compose(
    // we use the spread operator cuz thunk is in an array
    applyMiddleware(...middleware),
    // when we open redux dev tools it tells us to put in the following
    // we do this so it will work. not sure why.
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// export the default store and we don't need to touch this file again
export default store;
