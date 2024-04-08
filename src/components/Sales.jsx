import { useSelector } from "react-redux";
import Heading from "./Headings.jsx";
import styled from "styled-components";
import ProductCarousal from "./ProductCarousal.jsx";

function Sales() {
  const salesProducts = useSelector((state) => state.apiData.sale);

  return (
    <>
      <Wrapper>
        <Heading type="Today's" subheading="Flash Sales" />
        <ProductCarousal className="product-carousal" data={salesProducts} />
      </Wrapper>
    </>
  );
}
export default Sales;

const Wrapper = styled.section``;
