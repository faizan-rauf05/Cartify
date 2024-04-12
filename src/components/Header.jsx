import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${searchValue}`);
    setSearchValue("");
  };

  return (
    <>
      <header>
        <Wrapper className="header">
          <header>
            <div className={"container"}>
              <div className={"logo"}>
                <NavLink to={"/"}>
                  <h2>Cartify</h2>
                </NavLink>
              </div>
              <nav>
                <div className="nav-links">
                  <ul>
                    <NavLink to={"/"}>
                      <li>Home</li>
                    </NavLink>
                    <NavLink to={"/contact"}>
                      <li>Contact</li>
                    </NavLink>
                    <NavLink to={"/about"}>
                      <li>About</li>
                    </NavLink>
                    <NavLink to={"/shop"}>
                      <li>Shop</li>
                    </NavLink>
                  </ul>
                </div>
              </nav>
              <div className={"search-bar"}>
                <div className={"search-bar-div"}>
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      id="search-bar-input"
                      className="search-bar-input"
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="What are you looking for?"
                      value={searchValue}
                    />
                  </form>
                  <CiSearch className="search-icon" onClick={handleSearch} />
                </div>
                <div className="wishlist-cart-icons">
                  <NavLink to={"/wishlist"}>
                    <CiHeart className="wishlist cart-icons" />
                  </NavLink>
                  <NavLink to={"/cart"}>
                    <CiShoppingCart className="cart cart-icons" />
                  </NavLink>
                </div>
              </div>
            </div>
          </header>
        </Wrapper>
      </header>
    </>
  );
}

export default Header;

const Wrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 1rem 0;
  border-bottom: 1px solid #4d4d4d;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo h2 {
    font-weight: 500;
  }

  .logo a {
    color: black;
    text-decoration: none;
  }

  .nav-links ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .nav-links ul a {
    text-decoration: none;
    font-weight: 400;
    color: black;
    transition: 0.3s;
  }

  .nav-links a:hover {
    color: var(--hover-color);
    transform: translateY(-3px);
  }

  .search-bar {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .search-bar-input {
    width: 20vw;
    padding: 8px 9px;
    outline: none;
    border: none;
    background-color: #f5f5f5;
  }

  .search-icon {
    position: absolute;
    right: 95px;
    top: 6px;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .cart-icons {
    font-size: 1.7rem;
    transition: 0.3s;
  }
  .cart-icons:hover {
    transform: translateY(-3px);
  }

  .wishlist-cart-icons {
    display: flex;
    gap: 1rem;
    cursor: pointer;
  }
  .wishlist-cart-icons a {
    color: black;
  }

  @media only screen and (max-width: 450px) {
    .search-bar,
    .nav-links {
      display: none;
    }
  }
`;
