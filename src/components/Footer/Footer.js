// components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Airport Cheap Parking provides highly efficient yet cheap services
            for your meet and greet valet parking requirements at Airports in
            UK.
          </p>
        </div>
        <div className="footer-links">
          <h3>Airports</h3>
          <ul>
            <li>
              <a href="/bristol">Bristol Airport</a>
            </li>
            <li>
              <a href="/gatwick">Gatwick Airport</a>
            </li>
            <li>
              <a href="/heathrow">Heathrow Airport</a>
            </li>
            <li>
              <a href="/luton">Luton Airport</a>
            </li>
            <li>
              <a href="/manchester">Manchester Airport</a>
            </li>
            <li>
              <a href="/stansted">Stansted Airport</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3> Useful Links </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/airports">Airport's</a>
            </li>
            <li>
              <a href="/Faqs">Faq's</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3> Connect Us </h3>
          <p>Airport Cheap Parking Ltd., 128 City Road, London EC1V 2X</p>
          <a href="https://mail.google.com" target="_blank" class="email-link">
            info@airportcheapparking.co.uk
          </a>

          <h3>+ 91 7892652144</h3>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Airport-parking. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
