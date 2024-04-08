import { configureStore } from "@reduxjs/toolkit";
import DataFetchReducer from "../store/DataFetch.jsx";
import CartReducer from "../store/CartSlice.jsx";
import FilterReducer from "../store/FiltersSlice.jsx";

const store = configureStore({
  reducer: {
    apiData: DataFetchReducer,
    cartData: CartReducer,
    filtersData: FilterReducer,
  },
});
export default store;
