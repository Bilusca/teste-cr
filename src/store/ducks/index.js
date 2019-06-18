import { combineReducers } from "redux";

import gamesStore from "./games";
import cartStore from "./cart";

export default combineReducers({
  gamesStore,
  cartStore
});
