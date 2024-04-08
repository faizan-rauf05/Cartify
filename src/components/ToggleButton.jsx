import React from "react";
import styled from "styled-components";

function ToggleButton({ amount, setInc, setDec }) {
  return (
    <>
      <Wrapper>
        <button className="round-buttons" onClick={setDec}>
          -
        </button>
        <p>{amount}</p>
        <button className="round-buttons" onClick={setInc}>
          +
        </button>
      </Wrapper>
    </>
  );
}

export default ToggleButton;

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
