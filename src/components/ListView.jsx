import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

function ListView({ shopProducts }) {
  return (
    <Wrapper>
      {shopProducts.map((currElem) => {
        return (
          <div key={currElem.id} className="prod-list-card">
            <div className="image-section">
              <img src={currElem.images[0]} alt="" />
            </div>
            <div className="prod-description">
              <Link to={`/singleproduct/${currElem.id}`}>
                <h3>{currElem.name}</h3>
              </Link>
              <p>{currElem.description}</p>
              <div className="price-details">
                <h5 className="original-price">${currElem.price}</h5>
                <h5 className="cut-price">${currElem.price + 200}</h5>
              </div>
              <StarRating rating={currElem.rating} />
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default ListView;

const Wrapper = styled.section`
  .prod-list-card {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    gap: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 1rem 0;
    border-radius: 8px;
  }
  .image-section {
    width: 20%;
  }
  .image-section img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
  .prod-description {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .price-details {
    display: flex;
    gap: 2rem;
  }
  .cut-price {
    text-decoration: line-through;
    color: var(--hover-color);
  }
  h5 {
    font-weight: 500;
  }
`;
