import React from "react";
import styled from "styled-components";
import Heading from "./Headings";

function HomeGrid() {
  return (
    <>
      <Wrapper>
        <div className="home-grid">
          <Heading type="featured" subheading="New Arrival" />
          <div className="grid-section">
            <div className="left-grid">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
            </div>
            <div className="right-grid">
              <div className="womens-collection">
                <h3>Women’s Collections</h3>
                <p>Featured woman collections that give you another vibe.</p>
              </div>
              <div className="right-lower">
                <div className="speakers">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                </div>
                <div className="perfumes">
                  <h3>Perfumes</h3>
                  <p>GUCCI INTENSE OUD EDP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default HomeGrid;

const Wrapper = styled.section`
  .grid-section {
    width: 100%;
    display: flex;
    gap: 1rem;
    margin: auto;
    margin-bottom: 30px;
  }

  .left-grid {
    width: 50%;
    background: url(./ps5.png);
    background-repeat: no-repeat;
    background-size: 320px 320px;
    height: 460px;
    background-position: center;
    background-color: #000;
    color: #fff;
    padding: 3rem 12rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  h3 {
    font-weight: 500;
  }

  .right-grid {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .womens-collection {
    background: url(./womens.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 220px;
    background-position: center;
    background-color: #000;
    color: #fff;
    padding: 3rem 12rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .right-lower {
    display: flex;
    gap: 1rem;
  }
  .speakers {
    width: 21vw;
    background-color: #000;
    background: url(./speakers.png);
    background-repeat: no-repeat;
    background-size: 140px 140px;
    height: 224px;
    background-position: center;
    background-color: #000;
    color: #fff;
    padding: 3rem 4rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .perfumes {
    width: 21vw;
    background-color: #000;
    background: url(./perfume.png);
    background-repeat: no-repeat;
    background-size: 140px 140px;
    height: 224px;
    background-position: center;
    background-color: #000;
    color: #fff;
    padding: 3rem 4rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
