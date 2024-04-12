import { lazy, useEffect, useState } from "react";
import { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { updateDataShop } from "../store/FiltersSlice";
import ShopFilters from "./ShopFilters";
import SortFilter from "./SortFilter";
import { useFilters } from "../store/FiltersSlice";

const ShopProductsView = lazy(() => import("./ShopProductsView"));

function Shop() {
  const allProducts = useSelector((state) => state.apiData.shop);
  const shopProducts = useSelector((state) => state.filtersData.shop);
  const { handleFilters } = useFilters();

  //Location
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");
  const categoryParams = new URLSearchParams(location.search);
  const categoryValue = categoryParams.get("category");

  useEffect(() => {
    dispatch(updateDataShop(allProducts));
  }, [allProducts, dispatch]);

  useEffect(() => {
    if (searchValue !== null) {
      handleFilters("search", searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    handleFilters("category", categoryValue);
  }, [categoryValue]);

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="shop-section">
            <div className="filters-section">
              <ShopFilters />
            </div>
            <div className="products-section">
              <div className="sort-filter">
                <SortFilter />
              </div>
              <div className="shop-products">
                {shopProducts == "" ? (
                  <h3>Product not found</h3>
                ) : (
                  <Suspense fallback="">
                    <ShopProductsView shopProducts={shopProducts} />
                  </Suspense>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
export default Shop;

const Wrapper = styled.section`
  margin: 3rem 0;
  .shop-section {
    width: 100%;
    display: flex;
    gap: 3rem;
  }
  .filters-section {
    width: 20%;
  }
  .products-section {
    width: 80%;
  }
  .sort-filter {
  }
`;
