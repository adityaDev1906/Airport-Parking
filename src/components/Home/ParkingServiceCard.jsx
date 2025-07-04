// ParkingServiceCard.js
import React from "react";
import "./ParkingServiceCard.css";

const ParkingServiceCard = () => {
  return (
    <div className="parking-card-container">
      <h1 className="main-heading">
        We are Providing Excellent <br></br>Service for you.
      </h1>
      <div className="card-content">
        {/* Left Side */}
        <div className="card-section left">
          <h2 className="section-heading">
            Why Choose Us for Manchester Airport Parking?
          </h2>

          <div className="info-block">
            <h3>Unbeatable Affordability</h3>
            <p>
              Save up to 60% on your parking costs with our competitive rates.
              Affordable prices without compromising on quality or convenience.
            </p>
          </div>

          <div className="info-block">
            <h3>Seamless Booking Experience</h3>
            <p>
              Our user-friendly platform allows you to compare, select, and book
              the best parking options in minutes. Flexible cancellation
              policies ensure a stress-free experience.
            </p>
          </div>

          <div className="info-block">
            <h3>Customer-Focused Service</h3>
            <p>
              Our dedicated support team is always on hand to assist with your
              booking and ensure your satisfaction from start to finish.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="card-section right">
          <h2 className="section-heading">
            Your Parking Solutions at Manchester Airport
          </h2>

          <div className="info-block">
            <h3>Meet and Greet Parking</h3>
            <p>
              Enjoy seamless travel with our valet service. Drop off your car
              near the terminal and find it waiting upon your return.
            </p>
          </div>

          <div className="info-block">
            <h3>Park and Ride</h3>
            <p>
              Park your vehicle at a secure location and take a quick shuttle to
              the terminal. Reliable and cost-effective for all travelers.
            </p>
          </div>

          <div className="info-block">
            <h3>On-Site Parking</h3>
            <p>
              Choose from our premium on-airport parking spots for maximum
              convenience. Perfect for short trips and business travelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingServiceCard;
