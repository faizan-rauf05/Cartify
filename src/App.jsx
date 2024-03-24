import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Cart from "./components/Cart.jsx";
import SingleProduct from "./components/SingleProduct.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route
            exact
            path="/singleproduct"
            element={<SingleProduct />}
          ></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
