import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
  item: itemReducer,
});
// You can add as many reducers here as you want
// We could add an auth reducer for logging in/authenticating
// we could have a toDoReducer for a todo list
// we define it by item when we need to call it. i think we can
// call it whatever we want for different reducers
