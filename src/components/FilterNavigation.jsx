import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { clearFilters } from "../store/FiltersSlice";
import { useFilters } from "../store/FiltersSlice";

function FilterNavigation() {
  const dispatch = useDispatch();
  const { handleFilters } = useFilters();
  const categoryFilterVal = useSelector(
    (state) => state.filtersData.filters.category
  );
  const companyFilterVal = useSelector(
    (state) => state.filtersData.filters.company
  );

  return (
    <Wrapper>
      <button>
        {categoryFilterVal}
        <IoClose
          className="close-icon"
          onClick={() => handleFilters("category", "All")}
        />
      </button>
      <button>
        {companyFilterVal}
        <IoClose
          className="close-icon"
          onClick={() => handleFilters("company", "All")}
        />
      </button>
    </Wrapper>
  );
}

export default FilterNavigation;

const Wrapper = styled.section`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 10px;
  button {
    border: none;
    background-color: var(--hover-color);
    border-radius: 5px;
    padding: 1px 3px;
    color: #fff;
    outline: 0;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .close-icon {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
