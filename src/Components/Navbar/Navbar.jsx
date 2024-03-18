import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart from "../Assets/cart.jpeg";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt=""></img>
        <p>SHOPPER</p>
      </div>
      <div className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none", color: "gray" }} to="/">
            Shop
          </Link>
        </li>

        <li>
          <Link style={{ textDecoration: "none", color: "gray" }} to="/womens">
            Women
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "gray" }} to="/mens">
            Men
          </Link>
        </li>
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt=""></img>
        </Link>
        
        <div className="nav-cart-count">
          <button>{props.value}</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
