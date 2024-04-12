import React from "react";
import Heading from "./Headings";
import ProductCarousal from "./ProductCarousal";
import { useSelector } from "react-redux";
import styled from "styled-components";

function BestSelling() {
  const bestSelling = useSelector((state) => state.apiData.best);

  return (
    <>
      <Wrapper className="best-selling">
        <Heading type="This Month" subheading="Best Selling Products" />
        <ProductCarousal data={bestSelling} />
      </Wrapper>
    </>
  );
}

export default BestSelling;

const Wrapper = styled.section`
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
