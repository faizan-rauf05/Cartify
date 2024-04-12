import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { TfiViewListAlt } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { changeView } from "../store/FiltersSlice";

function ProductsView() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="products-view">
        <IoGridOutline
          onClick={() => dispatch(changeView(true))}
          style={{ marginRight: "10px", fontSize: "1.3rem", cursor: "pointer" }}
        />
        <TfiViewListAlt
          onClick={() => dispatch(changeView(false))}
          style={{ cursor: "pointer", fontSize: "1.2rem" }}
        />
      </div>
    </>
  );
}

export default ProductsView;
