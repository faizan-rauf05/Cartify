import React, { useState } from "react";
import styled from "styled-components";
import { useFilters } from "../store/FiltersSlice";
import { useSelector } from "react-redux";

function CompanyFilter({ data, filterHeading }) {
  const [company, setCompany] = useState(null);
  const { handleFilters } = useFilters();
  const companyFilterVal = useSelector(
    (state) => state.filtersData.filters.company
  );

  return (
    <Wrapper>
      <div className="filterheading">
        <p>{filterHeading}</p>
      </div>
      <div className={"categories"}>
        <ul>
          {data.map((currCompany, i) => (
            <li
              key={currCompany}
              name="company"
              value={currCompany}
              onClick={() => {
                handleFilters("company", currCompany);
                setCompany(currCompany);
              }}
              className={companyFilterVal === currCompany ? "activee " : "a"}
            >
              {currCompany}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export default CompanyFilter;

const Wrapper = styled.section`
  margin-top: 2rem;
  .categories {
    width: 16vw;
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
    cursor: pointer;
    display: inline-block;
  }
  .categories ul li:hover {
    color: var(--hover-color);
    transform: translateX(6px);
  }
  .categories ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
  .filterheading {
    width: 150px;
  }
`;
