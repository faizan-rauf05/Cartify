import { useSelector, useDispatch } from "react-redux";
import Categories from "./Categories.jsx";
import Herosection from "./Herosection.jsx";
import Sales from "./Sales.jsx";
import styled from "styled-components";
import BestSelling from "./BestSelling.jsx";
import Banner from "./Banner.jsx";
import ExploreProducts from "./ExploreProducts.jsx";
import HomeGrid from "./HomeGrid.jsx";
import { STATUSES } from "../store/DataFetch.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

function Home() {
  const status = useSelector((state) => state.apiData.status);

  if (status === STATUSES.loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="container">
        <Herosection />
        <Sales />
        <Categories />
        <BestSelling />
        <Banner />
        <ExploreProducts />
        <HomeGrid />
      </div>
    </>
  );
}

export default Home;
