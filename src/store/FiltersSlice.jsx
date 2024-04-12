import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  shop: [],
  allProds: [],
  view: true,
  filters: {
    category: "All",
    company: "All",
    search: "",
    priceRange: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateDataShop(state, action) {
      let max = 0;
      let min = 9999;
      state.shop = action.payload;
      state.filteredProducts = action.payload;
      state.allProds = action.payload;

      // CALCULATING MAX PRICE
      state.filters.maxPrice = state.shop.reduce((acc, currProd) => {
        if (currProd.price > max) {
          max = currProd.price;
        }
        return max;
      }, 0);

      // CALCULATING MIN PRICE
      state.filters.minPrice = state.shop.reduce((acc, currProd) => {
        if (currProd.price < min) {
          min = currProd.price;
        }
        return min;
      }, 0);
    },

    retrieveFiltersValue(state, action) {
      const { name, value } = action.payload;
      state.filters[name] = value;
    },
    applyFilter(state, action) {
      state.shop = state.allProds;
      //company filter
      if (state.filters.category !== "All") {
        state.shop = state.shop.filter((currComp) => {
          return currComp.category === state.filters.category;
        });
      }
      if (state.filters.company !== "All" && state.filters.company !== "") {
        state.shop = state.shop.filter((currComp) => {
          return currComp.company === state.filters.company;
        });
      }
      if (state.filters.search !== "") {
        state.shop = state.allProds;
        state.shop = state.shop.filter((currProd) => {
          let name = currProd.name.toLowerCase();
          return name.includes(state.filters.search.toLowerCase());
        });
      }
      if (state.filters.priceRange !== 0) {
        state.shop = state.shop.filter((currProd) => {
          return currProd.price < state.filters.priceRange;
        });
      }
    },
    sortFilterProducts(state, action) {
      if (action.payload === "atoz") {
        state.shop = state.shop.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (action.payload === "ztoa") {
        state.shop = state.shop.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (action.payload === "ltoh") {
        state.shop = state.shop.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (action.payload === "htol") {
        state.shop = state.shop.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    changeView(state, action) {
      state.view = action.payload;
    },
  },
});

export const {
  updateDataShop,
  categoryFilter,
  searchFilter,
  companyFilter,
  retrieveFiltersValue,
  applyFilter,
  clearFilters,
  sortFilterProducts,
  changeView,
} = filterSlice.actions;

export default filterSlice.reducer;

// custom hook
export const useFilters = () => {
  const dispatch = useDispatch();

  const handleFilters = (name, value) => {
    if (name && value) {
      dispatch(retrieveFiltersValue({ name, value }));
    }
    dispatch(applyFilter());
  };

  return { handleFilters };
};
