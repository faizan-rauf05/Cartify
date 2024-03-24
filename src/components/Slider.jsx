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
  };

  return (
    <>
      <Wrapper>
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
  padding: 30px 0 30px 10px;

  .slide-banner img {
    width: 100%;
    height: 56vh;
  }
  .slick-slider .slick-list {
    border-radius: 10px;
  }
`;
