import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Heading from "./Headings.jsx";
import { NavLink } from "react-router-dom";

function ExplorePeoducts() {
  const allProds = useSelector((state) => state.apiData.all_prods);

  let slicedProds = allProds.slice(0, 8);

  return (
    <>
      <Wrapper>
        <Heading type="Our Products" subheading="Explor Our Products" />
        <div className="explore-products">
          {slicedProds.map((currProd) => {
            return (
              <ProductCard
                key={currProd.id}
                img={currProd.images[0]}
                {...currProd}
              />
            );
          })}
        </div>
        <div className="view-all-prods">
          <NavLink to={"./shop"}>
            <button className="view-all-btn">View All Products</button>
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
}

export default ExplorePeoducts;

const Wrapper = styled.section`
  margin-bottom: 3rem;

  .explore-products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .view-all-btn {
    padding: 0.5rem 1rem;
    background-color: var(--hover-color);
    color: #fff;
    border: none;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
  }
  .view-all-prods {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 450px) {
    .explore-products {
      justify-content: center;
    }
  }
`;
