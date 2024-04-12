import React, { useState } from "react";
import styled from "styled-components";
import { useFilters } from "../store/FiltersSlice";
import { useNavigate } from "react-router-dom";

function HeroCategories({ data, filterHeading }) {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <p>{filterHeading}</p>
      <div className={"categories"}>
        <ul>
          {data.map((currCategory, i) => (
            <li
              key={currCategory}
              onClick={() => {
                setCategory(currCategory);
                navigate(
                  `/shop${currCategory ? `?category=${currCategory}` : ""}`
                );
              }}
              className={category === currCategory ? "activee" : "a"}
            >
              {currCategory}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export default HeroCategories;
const Wrapper = styled.section`
  .categories {
    padding: 1rem;
    padding-left: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    margin-right: 0px;
    margin-top: 17px;
    border: 1px solid #bfbfbf;
  }
  .categories ul li {
    list-style: none;
    font-weight: 400;
    font-size: 1rem;
    transition: 0.3s;
    text-transform: capitalize;
  }
  .categories ul li:hover {
    color: var(--hover-color);
    transform: translateX(4px);
  }
  .categories ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  .categories a {
    color: #000;
    text-decoration: none;
  }
  .activee {
    border-bottom: 2px solid red;
    border-radius: 3px;
    color: var(--hover-color);
    display: inline-block;
  }
  .a {
    border-bottom: 3px solid transparent;
  }
`;
