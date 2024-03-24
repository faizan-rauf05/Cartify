import React from "react";
import Heading from "./Headings";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LiaGamepadSolid } from "react-icons/lia";
import { CiKeyboard } from "react-icons/ci";
import { CiMonitor } from "react-icons/ci";
import { CiDesktopMouse2 } from "react-icons/ci";
import { TfiLayoutWidthFull } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

function Categories() {
  const categoriesData = useSelector((state) => state.apiData.category);

  return (
    <>
      <Wrapper>
        <Heading type="Categories" subheading="Browse By Category" />
        <NavLink to="/shop">
          <div className="categories">
            <div className="category-box">
              <LiaGamepadSolid className="gamepad c-icon" />
              <h3 className="category">{categoriesData[0]}</h3>
            </div>
            <div className="category-box">
              <CiKeyboard className="keyboard c-icon" />
              <h3 className="category">{categoriesData[1]}</h3>
            </div>
            <div className="category-box">
              <CiMonitor className="monitor c-icon" />
              <h3 className="category">{categoriesData[2]}</h3>
            </div>
            <div className="category-box">
              <TfiLayoutWidthFull className="mouse c-icon" />
              <h3 className="category">{categoriesData[3]}</h3>
            </div>
            <div className="category-box">
              <CiDesktopMouse2 className="gamepad c-icon" />
              <h3 className="category">{categoriesData[4]}</h3>
            </div>
          </div>
        </NavLink>
      </Wrapper>
    </>
  );
}

export default Categories;

const Wrapper = styled.section`
  .category-box {
    width: 13vw;
    height: 22vh;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-direction: column;
    margin-bottom: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  .category-box:hover {
    background-color: var(--hover-color);
    color: #fff;
  }
  .c-icon {
    font-size: 3rem;
  }
  .category {
    font-weight: 400;
    text-transform: capitalize;
  }
  .categories {
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
  }
`;
