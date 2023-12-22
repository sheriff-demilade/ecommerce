import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men {menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women {menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids {menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
