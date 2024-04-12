import Slider from "react-slick";
import styled from "styled-components";

function HeroSlider({ imgs, noOfSlides }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3400,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      <Wrapper className="hero-slider-section">
        <Slider {...settings}>
          {imgs.map((currImg, i) => {
            return (
              <div key={i} className={"slide-banner"}>
                <img src={currImg} alt={"image"} />
              </div>
            );
          })}
        </Slider>
      </Wrapper>
    </>
  );
}

export default HeroSlider;

const Wrapper = styled.section`
  .slide-banner img {
    width: 100%;
  }
  .slick-slider .slick-list {
    border-radius: 10px;
  }

  @media only screen and (max-width: 450px) {
    .slide-banner img {
      width: 100%;
      height: 170px;
      border-radius: 10px;
    }
  }
`;
