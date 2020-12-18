import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state, // Grabs the empty state
        items: action.payload, // and adds the res from the axios call
        loading: false, // because when we start the call it's set to true. once it is updated, it is no longer loading, so set to false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

// We can't actually change the state here so what we're doing in line 27 is making a copy and adding the new item to that copy.
// Having the payload first will put the new item at the top of the list, flip around and it'll be at the end of the list

// This is where our actual state will go
// we can check our actions that will get dispatched from here.
// so we would dispatch from server to the reducer
// Following will replace having local data stored in ShoppingList.js state
// This will have the state from the database data
// we won't need uuid when we're doing this from db
