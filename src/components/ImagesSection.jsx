import React, { useState } from "react";
import styled from "styled-components";

function ImagesSection({ imgs }) {
  const [image, setImage] = useState(0);
  return (
    <>
      <Wrapper>
        <div className="image-section">
          <div className="multiple-images">
            {imgs.map((currImg, i) => {
              return (
                <div
                  key={i}
                  className="seperate-images"
                  onClick={() => setImage(i)}
                >
                  <figure style={{ width: "100%" }}>
                    <img src={currImg} alt="multiple-images" />
                  </figure>
                </div>
              );
            })}
          </div>
          <div className="main-image">
            <figure>
              <img src={imgs[image]} alt="prod_image" />
            </figure>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ImagesSection;

const Wrapper = styled.section`
width:50%;
  .image-section {
    display: flex;
    gap: 5rem;
  }

  .multiple-images {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 10%;
  }
  .main-image {
    width: 70%;
    height: 350px;
    background-color: var(--light-grey);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-image figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-image img {
    width: 70%;
  }

  .seperate-images {
    width: 100px;
    height:100px
    padding: 10px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .seperate-images figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .multiple-images img {
    width: 60%;
    height: 70px;
    object-fit: contain;
    
  }
`;
