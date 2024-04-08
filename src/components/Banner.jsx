import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <>
      <Wrapper>
        <div className="banner">
          <div className="banner-desc">
            <h2 className="banner-heading">Enhance Your Music Experience</h2>
            <button className="banner-buy">Buy Now</button>
          </div>
          <div className="banner-img">
            <img src="./speaker.png" alt="speaker" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Banner;

const Wrapper = styled.section`
  margin: 3rem 0;
  .banner {
    width: 90%;
    display: flex;
    gap: 2rem;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 3rem 0;
    margin: 3rem auto;
    border-radius: 5px;
  }
  .banner-desc,
  .banner-img {
    width: 50%;
  }
  .banner-desc h2 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 20px;
  }
  .banner-desc {
    padding: 0 1rem;
  }
  .banner-img img {
    width: 70%;
    object-fit: contain;
  }
  .banner-buy {
    background-color: var(--hover-color);
    border: none;
    outline: 0;
    padding: 5px 12px;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
  }
`;
