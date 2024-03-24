import { useSelector } from "react-redux";
import Categories from "./Categories.jsx";
import Herosection from "./Herosection.jsx";
import Sales from "./Sales.jsx";
import PulseLoader from "react-spinners/PulseLoader";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BestSelling from "./BestSelling.jsx";

function Home() {
  const status = useSelector((state) => state.apiData.status);
  const [showLoader, setShowLoader] = useState(true);
  console.log(status);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1600);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLoader) {
    return (
      <Wrapper>
        <div className="preloader">
          <PulseLoader
            color={"#DB4444"}
            // loading={loading}
            // cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </Wrapper>
    );
  }

  return (
    <>
      <div className="container">
        <Herosection />
        <Sales />
        <Categories />
        <BestSelling />
      </div>
    </>
  );
}
export default Home;

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
