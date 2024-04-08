import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { removeCart } from "../store/CartSlice";
import CartToggle from "./CartToggle";
import { useEffect } from "react";

function Cart() {
  const cartProducts = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [cartProducts]);

  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="cart-headings">
          <h3>Products</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Subtotal</h3>
        </div>
        {cartProducts.cartData.map((currProd) => {
          return (
            <div key={currProd.id} className="cart-prod-section">
              <div className="prod-details">
                <div className="prod-img">
                  <span className="cart-remove-span">
                    <MdDelete
                      onClick={() => removeFromCart(currProd.id)}
                      className="cart-prod-remove-btn"
                    />
                  </span>
                  <img src={currProd.images[0]} alt="cart-product-image" />
                </div>
                <div className="prod-name">
                  <h3>{currProd.name}</h3>
                </div>
              </div>
              <div className="prod-price">
                <h3>{currProd.price}$</h3>
              </div>
              <div className="prod-quantity">
                <CartToggle amount={currProd.amount} id={currProd.id} />
              </div>
              <div className="prod-subtotal">
                <h3>{currProd.price * currProd.amount}$</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
export default Cart;

const Wrapper = styled.section`
  margin: 2rem 0;

  .cart-prod-section {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 0.5rem 2rem;
    align-items: center;
    gap: 4rem;
  }
  .prod-img img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  .prod-details {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 25%;
  }
  .prod-name h3 {
    font-size: 13px;
  }
  .prod-price {
    width: 22%;
    text-align: start;
  }
  .cart-headings {
    display: flex;
    gap: 16rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 1rem;
  }
  .prod-img {
    position: relative;
  }
  .cart-remove-span {
    display: none;
    padding: 10px;
    border: 2px solid red;
    background-color: var(--hover-color);
    position: absolute;
    top: 0;
    left: 0px;
    border-radius: 50%;
    cursor: pointer;
  }
  .cart-prod-remove-btn {
    position: absolute;
    font-size: 1.2rem;
    top: 0;
    left: 0;
    color: #fff;
  }
  .prod-img:hover .cart-remove-span {
    display: block;
  }
  .prod-quantity {
    text-align: center;
    width: 27%;
  }
  .prod-subtotal {
    text-align: end;
  }
`;
