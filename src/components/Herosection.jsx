import Slider from "./Slider.jsx";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Herosection() {
  const categoriesData = useSelector((state) => state.apiData.category);

  return (
    <>
      <Wrapper>
        <div className={"container"}>
          <div className={"hero-section"}>
            <div className={"categories"}>
              <ul>
                {categoriesData.map((currCategory, i) => (
                  <NavLink key={i} to={"/shop"}>
                    <li className="hero-categories">{currCategory}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
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
  .categories {
    width: 16vw;
    height: 57vh;
    padding-top: 2rem;
    padding-left: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    margin-right: 0px;
    margin-top: 27px;
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
    transform: translateX(6px);
  }
  .categories ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .categories a {
    color: #000;
    text-decoration: none;
  }
  .main-slider {
    width: 70vw;
    height: 56vh;
    border-radius: 10px;
  }
  .hero-section {
    display: flex;
  }
`;
