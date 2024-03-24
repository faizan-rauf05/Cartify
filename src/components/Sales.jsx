import { useEffect } from "react";
import { prodDataFetch } from "../store/DataFetch.jsx";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Headings.jsx";
import styled from "styled-components";
import ProductCarousal from "./ProductCarousal.jsx";

function Sales() {
  const dispatch = useDispatch();
  const salesPeoducts = useSelector((state) => state.apiData.sale);

  useEffect(() => {
    dispatch(prodDataFetch());
  }, []);

  return (
    <>
      <Wrapper>
        <Heading type="Today's" subheading="Flash Sales" />
        <ProductCarousal className="product-carousal" data={salesPeoducts} />
      </Wrapper>
    </>
  );
}
export default Sales;

const Wrapper = styled.section`
  // margin: 4rem 0;
`;
