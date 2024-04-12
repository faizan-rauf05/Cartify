import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import SkeletonLoading from "./SkeletonLoading";
import { useState } from "react";

function GridView({ shopProducts }) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <>
      <Wrapper>
        {shopProducts.map((currProd) => {
          if (loading) {
            return <SkeletonLoading key={currProd.id} />;
          }
          return (
            <ProductCard
              key={currProd.id}
              {...currProd}
              img={currProd.images[0]}
              prod={currProd}
            />
          );
        })}
      </Wrapper>
    </>
  );
}

export default GridView;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
