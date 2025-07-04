import React from "react";
import "./Home.css";

import Infosecction from "./Infosecction";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Secure & Affordable Airport Parking</h1>
            <p>Save up to 60% on airport parking across the UK</p>

            <Infosecction />
          </div>
        </div>
      </section>

      {/* Popular Airports */}
      <section className="popular-airports">
        <div className="container">
          <h2>Popular Airport Parking</h2>

          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="features-grid">
              {/* Card 1 */}
              <div className="feature-card">
                <div className="card-icon">🔍</div>
                <h3 className="card-title">Search & Book</h3>
                <p className="card-text">
                  Enter your travel dates, compare options, and secure your
                  ideal parking spot online. Booking in advance guarantees the
                  best rates and a worry-free start to your trip.
                </p>
              </div>

              {/* Card 2 */}
              <div className="feature-card">
                <div className="card-icon">🅿️</div>
                <h3 className="card-title">Park with Confidence</h3>
                <p className="card-text">
                  Upon arrival, park your vehicle at our secure location. Choose
                  between self-parking or valet services based on your
                  preference and enjoy peace of mind knowing your car is safe.
                </p>
              </div>

              {/* Card 3 */}
              <div className="feature-card">
                <div className="card-icon">✈️</div>
                <h3 className="card-title">Fly Stress-Free</h3>
                <p className="card-text">
                  Hop on our complimentary shuttle service or head directly to
                  the terminal, knowing your car is protected with
                  round-the-clock security.
                </p>
              </div>

              {/* Card 4 */}
              <div className="feature-card">
                <div className="card-icon">🔄</div>
                <h3 className="card-title">Easy Returns</h3>
                <p className="card-text">
                  When you return, our quick retrieval process ensures your car
                  is ready for a seamless journey home. We make the end of your
                  trip as smooth as the start!
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="airport-grid">
            <div className="airport-card">
              <img
                src="https://placehold.co/400x250"
                alt="Heathrow Airport aerial view showing terminals and runways"
              />
              <div className="airport-info">
                <h3>Heathrow Airport</h3>
                {/* <p>From £4.99/day</p> */}
                <a href="/heathrow" className="parking-button">
                  Book Now
                </a>
              </div>
            </div>

            <div className="airport-card">
              <img
                src="https://placehold.co/400x250"
                alt="Gatwick Airport south terminal exterior with planes"
              />
              <div className="airport-info">
                <h3>Gatwick Airport</h3>
                {/* <p>From £4.49/day</p> */}
                <a href="/gatwick" className="parking-button">
                  Book Now
                </a>
              </div>
            </div>

            <div className="airport-card">
              <img
                src="https://placehold.co/400x250"
                alt="Stansted Airport modern terminal building with glass facade"
              />
              <div className="airport-info">
                <h3>Stansted Airport</h3>
                {/* <p>From £3.99/day</p> */}
                <a href="/stansted" className="parking-button">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💷</div>
              <h3>Best Prices</h3>
              <p>Guaranteed lowest prices or we'll match it</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Secure Parking</h3>
              <p>24/7 security & fully insured</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Quick Transfers</h3>
              <p>Frequent shuttle services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
