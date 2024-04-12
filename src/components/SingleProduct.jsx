import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ImagesSection from "./ImagesSection";
import styled from "styled-components";
import StarRating from "./StarRating";
import ToggleButton from "./ToggleButton";
import { useDispatch } from "react-redux";
import { addCart } from "../store/CartSlice";

function SingleProduct() {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [sizes, setSizes] = useState(null);
  const [amount, setAmount] = useState(1);

  const setInc = () => {
    setAmount(amount + 1);
  };
  const setDec = () => {
    {
      amount > 1 ? setAmount(amount - 1) : setAmount(amount);
    }
  };

  const { id } = useParams();
  const allProds = useSelector((state) => state.apiData.data);
  const singleProd = allProds.find((currProd) => currProd.id === id);
  console.log(singleProd);

  //scroll window up only if there is data in singleProd
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [singleProd]);

  if (!singleProd) {
    return <div>Loading...</div>;
  }
  const {
    name,
    rating,
    reviews,
    availability,
    description,
    colors,
    size,
    images,
    price,
  } = singleProd;

  const addToCart = (id, name, sizes, color, images, price, amount) => {
    dispatch(addCart({ id, name, sizes, color, images, price, amount }));
  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <section className="single-prod-section">
            <ImagesSection imgs={images} />
            <div className="prod-information">
              <h2 className="prod-name">{name}</h2>
              <div className="rating">
                <StarRating rating={rating} />
                <p>
                  ({reviews} Raviews) |
                  <span className="availability">{availability}</span>
                </p>
              </div>
              <p className="description">{description}</p>
              <hr />
              <div className="colors">
                <h3>Colours :</h3>
                {colors.map((currColor, i) => {
                  return (
                    <button
                      onClick={() => setColor(currColor)}
                      style={{
                        backgroundColor: currColor,
                        border: "2px solid transparent",
                        outline: 0,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                      key={i}
                      className={color === currColor ? "active" : null}
                    ></button>
                  );
                })}
              </div>
              <div className="sizes">
                <h3>Sizes :</h3>
                {size.map((currSize, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setSizes(currSize)}
                      className={`round-buttons ${
                        sizes === currSize ? "active-size" : null
                      }`}
                    >
                      {currSize}
                    </button>
                  );
                })}
              </div>
              <div className="toggle-btn">
                <ToggleButton amount={amount} setInc={setInc} setDec={setDec} />

                <Link
                  to={"/cart"}
                  onClick={() =>
                    addToCart(id, name, sizes, color, images, price, amount)
                  }
                >
                  <button className="single-page-cart-btn">Add to cart</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default SingleProduct;

const Wrapper = styled.section`
  margin: 3rem auto;

  .single-prod-section {
    display: flex;
    gap: 5rem;
  }
  .prod-information {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 35%;
  }
  .rating {
    display: flex;
    gap: 1rem;
  }
  .availability {
    color: var(--hover-color);
    margin-left: 10px;
  }
  .colors {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .prod-name {
    font-weight: 500;
    font-size: 1.2rem;
  }
  .description {
    font-size: 14px;
  }
  .active {
    border: 2px solid #000 !important;
  }
  .sizes {
    display: flex;
  }
  .active-size {
    color: #fff;
    background-color: var(--hover-color) !important;
  }
  .toggle-btn {
    display: flex;
    gap: 1rem;
  }
  .single-page-cart-btn {
    background-color: var(--light-grey);
    border: none;
    outline: 0;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  .single-page-cart-btn:hover {
    background-color: var(--hover-color);
  }
  .single-page-cart-btn a:hover {
    color: #fff;
  }
`;
