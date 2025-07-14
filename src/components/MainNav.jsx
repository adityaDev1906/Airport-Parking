import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const [airportDropdown, setAirportDropdown] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setAirportDropdown(true)}
          onMouseLeave={() => setAirportDropdown(false)}
        >
          <NavLink
            to="/airport"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={(e) => e.preventDefault()}
          >
            Airport's
          </NavLink>
          {airportDropdown && (
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/bristol"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Bristol Airport
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gatwick"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Gatwick Airport
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/heathrow"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Heathrow Airport
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/luton"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Luton Airport
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manchester"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Manchester Airport
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stansted"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Stansted Airport
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/faqs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Faq's
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <button className="book-btn">Book Parking</button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;