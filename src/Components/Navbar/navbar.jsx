import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from '../Assets/logo.png'

import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>
              <img src={logo} alt="" className="navbar-img"/>
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SHOP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/delivery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DELIVERY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/app"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                APP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;