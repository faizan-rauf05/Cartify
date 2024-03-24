import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import styled from "styled-components";

function StarRating({ rating }) {
  const updatedRating = Array.from({ length: 5 }, (elem, i) => {
    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <IoIosStar className="start-icon" />
        ) : rating >= i + 0.5 ? (
          <IoStarHalfOutline className="start-icon" />
        ) : (
          <IoIosStarOutline className="start-icon" />
        )}
      </span>
    );
  });

  return (
    <>
      <Wrapper>
        <div>{updatedRating}</div>
      </Wrapper>
    </>
  );
}

export default StarRating;

const Wrapper = styled.section`
  .start-icon {
    color: #ffd700;
  }
`;
