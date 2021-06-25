import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mt-5">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="btn btn-outline-success" exact to="/">
                View Product
              </NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-outline-success" exact to="/products/add">
            Add Product
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
