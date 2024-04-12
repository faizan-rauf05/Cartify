import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sortFilterProducts } from "../store/FiltersSlice";

function SortProducts() {
  const dispatch = useDispatch();
  const sortProductsFilter = (e) => {
    let value = e.target.value;
    dispatch(sortFilterProducts(value));
  };

  return (
    <Wrapper>
      <div className="sort-products">
        <select
          name="sort-filter"
          id="sort-filter"
          onChange={(e) => sortProductsFilter(e)}
        >
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
          <option value="ltoh">Low to high</option>
          <option value="htol">High to low</option>
        </select>
      </div>
    </Wrapper>
  );
}

export default SortProducts;

const Wrapper = styled.section``;
