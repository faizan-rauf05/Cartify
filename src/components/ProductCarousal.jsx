import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import Slider from "react-slick/lib/slider";

const ProductCarousal = ({ data }) => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Wrapper>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {data.map((currProd, i) => {
              return (
                <ProductCard
                  key={i}
                  img={currProd.images[0]}
                  {...currProd}
                  prod={currProd}
                />
              );
            })}
          </Slider>
        </div>
      </Wrapper>
    </>
  );
};

export default ProductCarousal;

const Wrapper = styled.section`
  margin: 1rem 0;
`;