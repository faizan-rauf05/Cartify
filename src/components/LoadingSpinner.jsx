import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";

function LoadingSpinner() {
  return (
    <Wrapper>
      <div className="preloader">
        <PulseLoader
          color={"#DB4444"}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </Wrapper>
  );
}

export default LoadingSpinner;
const Wrapper = styled.section`
  .preloader {
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 220px;
  }
`;
