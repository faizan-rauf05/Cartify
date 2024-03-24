import { configureStore } from "@reduxjs/toolkit";
import DataFetchreducer from "./DataFetch.jsx";

const store = configureStore({
  reducer: {
    apiData: DataFetchreducer,
  },
});
export default store;
