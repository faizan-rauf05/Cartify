import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import CompanyFilter from "./CompanyFilter";
import PriceRangeFilter from "./PriceRangeFilter";

function ShopFilters() {
  const categoriesData = useSelector((state) => state.apiData.category);
  const companyData = useSelector((state) => state.apiData.companies);

  return (
    <>
      <Wrapper>
        <div className="categories-filter">
          <CategoryFilter
            filterHeading={"Category Filter"}
            data={categoriesData}
          />
          <CompanyFilter data={companyData} filterHeading={"Company Filter"} />
          <PriceRangeFilter />
        </div>
      </Wrapper>
    </>
  );
}

export default ShopFilters;
const Wrapper = styled.section`
  width: 40%;
`;
