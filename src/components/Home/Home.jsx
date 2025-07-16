import React from "react";
import "./Home.css";
import car_parking1 from './car_parking1.png';
import car_parking2 from './car_parking2.png';
import Carousel from "./Carousel";
import Infosecction from "./Infosecction";
import ParkingServiceCard from "./ParkingServiceCard";
import Reviews from "./Reviews";

function Home() {
  return (
    <>
    <Carousel />
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
          <h2>How to Book?</h2>

          <div className="container">
            <h3 className="section-title">Simplify Your Parking in 4 Easy Steps</h3>
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

          {/* discription */}
          <div className="parking-card">
            <div className="parking-images">
              <img src={car_parking1} alt="Customer Service" className="parking-image" />
              <img src={car_parking2} alt="Parking Area" className="parking-image" />
            </div>
            <div className="parking-content">
              <h2 className="parking-title">
                Park with Peace of Mind at Manchester Airport
              </h2>
              <h4 className="parking-subtitle">About Airport Cheap Parking</h4>
              <p className="parking-description">
                Airport Cheap Parking is a reliable service provider
                specializing in cost-effective parking solutions at Manchester
                Airport. With a focus on affordability and convenience, the
                company partners with reputable parking providers to offer a
                variety of options, including park-and-ride, meet-and-greet, and
                secure on-site parking. These services are designed to cater to
                both short- and long-term parking needs, ensuring customers have
                a seamless travel experience. By prioritizing efficiency and
                customer satisfaction, the company aims to make airport parking
                hassle-free and economical.
              </p>
              <p className="parking-description">
                We are also renowned for our user-friendly booking platform and
                excellent customer service. Travelers can easily compare rates,
                select parking options that best suit their needs, and enjoy
                benefits such as free cancellations and competitive pricing.
                With a strong emphasis on security, convenience, and customer
                care, Airport Cheap Parking provides a trusted solution for
                those looking to simplify their airport parking experience while
                saving money.
              </p>

              <div className="Phone-no">
                <p>Phone Number</p>
                <h1>789265214</h1>
              </div>
            </div>
          </div>

          <ParkingServiceCard />
          
          <Reviews />

          <div>
            <button className="booking-button">Easy and Fast Booking</button>
            <div className="main-heading">
              Hassle-Free Airport Parking<br></br>
              Across the UK
            </div>
            <p>
              Experience convenience with our Meet and Greet services at major
              UK airports.<br></br> Drive, hand over your keys, and let us
              handle the parking.
            </p>
            <div className="airport-grid">
              <div className="airport-card">
                <img
                  src="https://placehold.co/400x250"
                  alt="Heathrow Airport aerial view showing terminals and runways"
                />
                <div className="airport-info">
                  <h3>BristolAirport Parking</h3>
                  <p>
                    Experience seamless travel with our Meet and Greet Parking
                    services at Bristol Airport. Leave your car with a trusted
                    valet and enjoy hassle-free parking.
                  </p>
                  {/* <p>From £4.99/day</p> */}
                  <a href="/bristol" className="parking-button">
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
                  <h3>Gatwick Airport Parking</h3>
                  <p>
                    Our Meet and Greet Parking services at Gatwick Airport
                    provide convenience and peace of mind. Let an experienced
                    professional handle your parking, giving you more time to
                    focus on your journey.
                  </p>
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
                  <h3>Heathrow Airport Parking</h3>
                  <p>
                    At Heathrow Airport, take advantage of our reliable Meet and
                    Greet Parking services. A dedicated valet will park your car
                    safely, so you can travel without worries.
                  </p>
                  {/* <p>From £3.99/day</p> */}
                  <a href="/heathrow" className="parking-button">
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
                  <h3>Luton Airport Parking</h3>
                  <p>
                    Choose convenience with our Meet and Greet Parking services
                    at Luton Airport. Our expert valet team makes parking
                    stress-free and secure.
                  </p>
                  {/* <p>From £3.99/day</p> */}
                  <a href="/luton" className="parking-button">
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
                  <h3>Manchester Airport Parking</h3>
                  <p>
                    Make your journey effortless with our premium Meet and Greet
                    Parking services at Manchester Airport. Drive to the
                    terminal, hand over your keys, and we’ll handle the rest.
                  </p>
                  {/* <p>From £3.99/day</p> */}
                  <a href="/manchester" className="parking-button">
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
                  <h3>Stansted Airport Parking</h3>
                  <p>
                    Simplify your trip with our dependable Meet and Greet
                    Parking services at Stansted Airport. A professional valet
                    will ensure your car is parked securely while you focus on
                    your travels.
                  </p>
                  {/* <p>From £3.99/day</p> */}
                  <a href="/stansted" className="parking-button">
                    Book Now
                  </a>
                </div>
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
    </>
  );
}

export default Home;
