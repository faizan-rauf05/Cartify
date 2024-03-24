import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

function ProductCard({ prod, img, name, price, off, rating, id }) {
  return (
    <>
      <Wrapper>
        <div className="card">
          <span className="off">{off}</span>
          <div className="card-img">
            <img src={img} alt="product-image" />
          </div>
          <div className="card-details">
            <NavLink to={`/singleproduct/${id}`}>
              <h5 className="p-name">{name}</h5>
            </NavLink>
            <div className="price-details">
              <h5 className="original-price">${price}</h5>
              <h5 className="cut-price">${price + 200}</h5>
            </div>
            <StarRating rating={rating} />
          </div>
          <div className="cart-div">
            <NavLink to={"/cart"}>
              <button className="cart-btn">add to cart</button>
            </NavLink>
          </div>
          <div className="wishlist-on-card">
            <CiHeart className="wishlist-card-icon" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ProductCard;

const Wrapper = styled.section`
  .card {
    width: 20vw;
    box-shadow: rgba(149, 157, 165, 0.2) 4px 8px 10px;
    margin-bottom: 20px;
    padding: 10px;
    position: relative;
  }
  .card:hover .cart-btn {
    visibility: visible;
    opacity: 1;
  }
  .card:hover .wishlist-on-card {
    visibility: visible;
    opacity: 1;
  }
  .card-img {
    width: 100%;
    height: 35vh;
    background-color: #f5f5f5;
    padding: 2.5rem 2.3rem;
  }
  .card-img img {
    width: 100%;
    height: 24vh;
    object-fit: center;
  }
  .card-details {
    margin-top: 1rem;
    height: 15vh;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  h5 {
    font-weight: 500;
  }
  .price-details {
    display: flex;
    gap: 2rem;
  }
  .cut-price {
    text-decoration: line-through;
    color: #000;
  }
  .off {
    width: 3vw;
    background-color: #db4444;
    color: #fff;
    position: absolute;
    font-size: 0.8rem;
    margin: 4px;
    border-radius: 2px;
  }
  .original-price {
    color: #db4444;
    text-decoration: none;
  }
  .p-name {
    color: #000;
  }
  .cart-btn {
    visibility: hidden;
    border: none;
    outline: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s;
    opacity: 0;
  }
  .cart-btn:hover {
    background-color: var(--hover-color);
    color: #fff;
  }
  .wishlist-on-card {
    position: absolute;
    width: 33px;
    height: 30px;
    top: 20px;
    right: 12px;
    visibility: hidden;
    cursor: pointer;
    transition: visibility 0.3s, opacity 0.3s;
    opacity: 0;
    background-color: #fff;
    color: var(--hover-color);
    border-radius: 16px;
  }
  .wishlist-card-icon {
    font-size: 2rem;
  }
`;
