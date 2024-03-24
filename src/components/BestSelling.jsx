import React from "react";
import Heading from "./Headings";
import ProductCarousal from "./ProductCarousal";
import { useSelector } from "react-redux";

function BestSelling() {
  const bestSelling = useSelector((state) => state.apiData.best);

  return (
    <>
      <Heading type="This Month" subheading="Best Selling Products" />
      <ProductCarousal data={bestSelling} />
    </>
  );
}

export default BestSelling;
