import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";
import { useFilters } from "../store/FiltersSlice";

function PriceRangeFilter() {
  const maxPrice = useSelector((state) => state.filtersData.filters.maxPrice);
  const minPrice = useSelector((state) => state.filtersData.filters.minPrice);
  const [value, setValue] = useState(null);

  const { handleFilters } = useFilters();
  const handlePriceRange = (e) => {
    setValue(e.target.value);
    handleFilters("priceRange", value);
  };

  return (
    <>
      <Box sx={{ mt: 4 }}>
        <p>Price Filter</p>
      </Box>
      <Box sx={{ width: 180, mt: 1, ml: 1 }}>
        <Slider
          size="large"
          defaultValue={maxPrice}
          aria-label="medium"
          valueLabelDisplay="auto"
          max={maxPrice}
          min={minPrice}
          step={10}
          value={value}
          onChange={handlePriceRange}
          color="error"
        />
      </Box>
    </>
  );
}

export default PriceRangeFilter;
