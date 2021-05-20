import { combineReducers } from "redux";
import { reducer } from "./shopping-cart";

export default combineReducers({
  shoppingCart: reducer,
});
