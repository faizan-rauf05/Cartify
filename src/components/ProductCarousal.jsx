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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <Wrapper className="slider-section">
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {data.map((currProd, i) => {
              return (
                <ProductCard
                  key={currProd.id}
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
  width: 100%;
  margin: 1rem 0;

  @media only screen and (max-width: 450px) {
    padding-left: 2.3rem;
    .slick-prev:before,
    .slick-next:before {
      color: black;
    }
    .slick-next {
      right: 18px;
    }
  }
  @media only screen and (max-width: 325px) {
    padding-left: 1.7rem;
    .slick-next {
      right: 0;
    }
  }
`;
