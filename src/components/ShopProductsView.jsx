import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSelector } from "react-redux";

function ShopProductsView({ shopProducts }) {
  const view = useSelector((state) => state.filtersData.view);
  if (view === true) {
    return <GridView shopProducts={shopProducts} />;
  } else {
    return <ListView shopProducts={shopProducts} />;
  }
}

export default ShopProductsView;
