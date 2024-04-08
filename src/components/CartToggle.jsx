import React from "react";
import styled from "styled-components";
import { incInCart, decInCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";

function CartToggle({ amount, id }) {
  const dispatch = useDispatch();
  const handleInc = (id, amount) => {
    dispatch(incInCart({ id, amount }));
  };
  const handleDec = (id) => {
    dispatch(decInCart({ id }));
  };

  return (
    <>
      <Wrapper>
        <button className="round-buttons" onClick={() => handleDec(id)}>
          -
        </button>
        <p>{amount}</p>
        <button className="round-buttons" onClick={() => handleInc(id, amount)}>
          +
        </button>
      </Wrapper>
    </>
  );
}

export default CartToggle;

const Wrapper = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    transition: 0.3s;
  }
  button:hover {
    color: #fff;
    background-color: var(--hover-color);
  }
`;
