import React from "react";
import styled from "styled-components";
import { TiArrowRightOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <Wrapper>
        <footer className="footer">
          <div className="exclusive">
            <h3>Exclusive</h3>
            <h3>Subscribe</h3>
            <div className="news-letter">
              <p>Get 10% off your first order</p>
              <input
                type="text"
                className="news-letter-input"
                placeholder="Enter email here"
              />
              <TiArrowRightOutline className="newsletter-icon" />
            </div>
          </div>
          <div className="support">
            <h3>Support</h3>
            <p>111 Lahore, Punjab, DH 1515, Pakistan.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="quick-links">
            <h3>Quick Link</h3>
            <NavLink to="/cart">
              <li>Cart</li>
            </NavLink>
            <NavLink to="/wishlist">
              <li>WishList</li>
            </NavLink>
            <NavLink to="shop">
              <li>Shop</li>
            </NavLink>
          </div>
          <div className="app-download">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="qr-code">
              <figure>
                <img src="./qr.png" alt="qr code" />
              </figure>
              <div className="stores">
                <figure>
                  <img src="./appstore.png" alt="appstore" />
                </figure>
                <figure>
                  <img src="./playstore.png" alt="playstore" />
                </figure>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy-right">
          <p>Copyright Cartify 2024. All right reserved</p>
        </div>
      </Wrapper>
    </>
  );
}

export default Footer;

const Wrapper = styled.section`
  padding: 3rem 5rem;
  background-color: #000;
  color: #fff;

  .footer {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0;
  }
  .exclusive {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .news-letter input {
    margin: 1rem 0;
    padding: 4px 6px;
    border: 1px solid #fff;
    outline: 0;
    background-color: #000;
    color: #fff;
    border-radius: 3px;
    font-size: 14px;
  }
  .newsletter-icon {
    position: absolute;
    top: 38px;
    right: 16px;
    font-size: 1.3rem;
  }
  .news-letter {
    position: relative;
  }
  .support,
  .quick-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .quick-links a {
    color: #fff;
    list-style: none;
  }
  .qr-code {
    display: flex;
    gap: 1rem;
  }
  .stores {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .app-download {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  p,
  li {
    font-size: 0.8rem;
  }
  .copy-right {
    width: 100%;
    text-align: center;
    color: #fff;
    background-color: #000;
    margin-top: 2rem;
  }
`;
