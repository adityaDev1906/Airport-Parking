import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import BristolAirport from "./components/Airports/bristol-airport";
import GatwickAirport from "./components/Airports/gatwick-airport";
import HeathrowAirport from "./components/Airports/heathrow-airport";
import LutonAirport from "./components/Airports/luton-airport";
import ManchesterAirport from "./components/Airports/manchester-airport";
import StanstedAirport from "./components/Airports/stansted-airport";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [airportDropdown, setAirportDropdown] = useState(false);
  return (
    <>
      <Router>
        <div className="App">
          <h1>Airport Parking</h1>
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
                  to="#"
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bristol" element={<BristolAirport />} />
            <Route path="/gatwick" element={<GatwickAirport />} />
            <Route path="/heathrow" element={<HeathrowAirport />} />
            <Route path="/luton" element={<LutonAirport />} />
            <Route path="/manchester" element={<ManchesterAirport />} />
            <Route path="/stansted" element={<StanstedAirport />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </>
  );
};

export default App;
