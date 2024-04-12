import styled from "styled-components";

function Heading(props) {
  return (
    <>
      <Wrapper>
        <div className="type">
          <div className="color-box-style"></div>
          <p>{props.type}</p>
        </div>
        <div className="sub-heading">{props.subheading}</div>
      </Wrapper>
    </>
  );
}
export default Heading;

const Wrapper = styled.section`
  width: 100%;
  margin: 5rem 0 1.5rem 0;
  .color-box-style {
    width: 18px;
    height: 5vh;
    background-color: #db4444;
    border-radius: 3px;
  }
  .type p {
    color: #db4444;
    font-weight: 500;
  }
  .type {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .sub-heading {
    font-size: 2rem;
    margin-top: 13px;
  }

  @media only screen and (max-width: 450px) {
    padding-left: 1rem;
    margin: 3.3rem 0 1.5rem 0;
    .sub-heading {
      font-size: 1.2rem;
    }
    .type p {
      font-size: 0.7rem;
    }
  }
`;
