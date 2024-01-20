import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="languages d-none d-md-flex align-items-center"></div>
        </div>
      </div>

      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">GRACE & GLOW</h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                {/*< a className="nav-link scrollto" href="#menu">Categories</a> */}
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>  <Link to="/cart">
            <div className="book-a-table-btn bi bi-list mobile-nav-toggle">
              Order Now
            </div>
          </Link>
          </nav>
          {/* <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a> */}
          <Link to="/cart">
            <div className="book-a-table-btn scrollto d-none d-lg-flex">
              Order Now
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
