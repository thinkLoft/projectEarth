import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Free Time
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/addFreeTime"
            className={
              window.location.pathname === "/addFreeTime"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Add Free Time
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default Navbar;