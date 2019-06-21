import { combineReducers } from "redux";

import gamesStore from "./games";
import cartStore from "./cart";
import menuStore from "./menu";

export default combineReducers({
  gamesStore,
  cartStore,
  menuStore
});
