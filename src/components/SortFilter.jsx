import React from "react";
import FilterNavigation from "./FilterNavigation";
import SortProducts from "./SortProducts";
import styled from "styled-components";
import ProductsView from "./ProductsView";

function SortFilter() {
  return (
    <Wrapper>
      <FilterNavigation />
      <ProductsView />
      <SortProducts />
    </Wrapper>
  );
}

export default SortFilter;
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
