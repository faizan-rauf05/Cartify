import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  idle: "IDLE",
  error: "ERROR",
  loading: "LOADING",
});

const dataFetching = createSlice({
  name: "fetch-data",
  initialState: {
    data: [],
    category: [],
    companies: [],
    sale: [],
    best: [],
    all_prods: [],
    shop: [],
    status: STATUSES.idle,
  },
  extraReducers: (builder) => {
    builder
      .addCase(prodDataFetch.pending, (state, action) => {
        state.status = STATUSES.loading;
      })
      .addCase(prodDataFetch.fulfilled, (state, action) => {
        const fetchedData = action.payload;
        state.data = fetchedData;

        //unique categories

        let uniqueCategories = [
          "All",
          ...new Set(fetchedData.map((currProd) => currProd.category)),
        ];
        state.category = uniqueCategories;

        // unique companies

        state.companies = [
          "All",
          ...new Set(fetchedData.map((currProd) => currProd.company)),
        ];

        // sale products
        state.sale = fetchedData.filter((currProd) => currProd.type === "sale");

        // best products
        state.best = fetchedData.filter((currProd) => currProd.type === "best");

        //all prods except sale and best
        state.all_prods = fetchedData.filter(
          (currProd) => currProd.type !== "sale" && currProd.type !== "best"
        );
        //shop-products
        state.shop = fetchedData;

        // state.data = action.payload;
        state.status = STATUSES.idle;
      })
      .addCase(prodDataFetch.rejected, (state, action) => {
        state.status = STATUSES.error;
      });
  },
});

export default dataFetching.reducer;
export const selectApiData = (state) => state.apiData.data;

export const prodDataFetch = createAsyncThunk("fetch/products", async () => {
  const res = await axios.get(
    "https://faizan-rauf05.github.io/api_data/cartify.json"
  );
  return res.data;
});
