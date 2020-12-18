import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";
// we're not fetching directly from the database
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items") // returns a promise, see items.js
    .then((res) =>
      dispatch({
        type: GET_ITEMS, // from Reducer
        payload: res.data,
      })
    );
};

export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    })
  );
  // Following is what we had before database calls
  // return {
  //   type: ADD_ITEM,
  //   payload: item,
  // };
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
