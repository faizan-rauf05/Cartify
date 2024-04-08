import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";

function ShopProductsView({ gridView, shopProducts }) {
  if (gridView === true) {
    return <GridView shopProducts={shopProducts} />;
  } else {
    return <ListView />;
  }
}

export default ShopProductsView;
