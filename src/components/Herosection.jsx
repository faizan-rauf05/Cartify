import Slider from "./Slider.jsx";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HeroCategories from "./HeroCategories.jsx";

function Herosection() {
  const categoriesData = useSelector((state) => state.apiData.category);

  return (
    <>
      <Wrapper>
        <div className={"container"}>
          <div className={"hero-section"}>
            <HeroCategories data={categoriesData} />
            <div className={"main-slider"}>
              <Slider
                noOfSlides={1}
                imgs={[
                  "https://icms-image.slatic.net/images/ims-web/34efa343-17e1-4f77-a9e2-ff984ca4372d.jpg",
                  "https://icms-image.slatic.net/images/ims-web/789b8300-45b5-491f-bcc9-a954671fbd8f.jpg",
                  "https://icms-image.slatic.net/images/ims-web/2d7a1e2f-552e-4b97-a7c6-b979e4e8a99c.jpg",
                  "https://icms-image.slatic.net/images/ims-web/c1c1d6ab-b0d1-4ae6-8f79-a05e5b6a43d2.jpg",
                ]}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Herosection;

const Wrapper = styled.section`
  .main-slider {
    width: 70vw;
    height: 56vh;
  }
  .hero-section {
    display: flex;
    margin-top: 2rem;
  }
`;
