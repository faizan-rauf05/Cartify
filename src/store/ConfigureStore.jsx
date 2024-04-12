import { configureStore } from "@reduxjs/toolkit";
import DataFetchReducer from "../store/DataFetch.jsx";
import CartReducer from "../store/CartSlice.jsx";
import FilterReducer from "../store/FiltersSlice.jsx";
import WishListReducer from "./WishListSlice.jsx";

const store = configureStore({
  reducer: {
    apiData: DataFetchReducer,
    cartData: CartReducer,
    filtersData: FilterReducer,
    wishlistData: WishListReducer,
  },
});
export default store;
