import React, { useState } from "react";
import "../faqs.css";
import "./airport-parking.css";
import Infosecction from "../Home/Infosecction";

const faqsData = [
  {
    question: "Can I still book parking if I'm running late for my flight?",
    answer:
      "You can often book until arrival, but booking guarantees space and better prices. For urgent situations, consider our meet & greet service.",
  },
  {
    question:
      "What if my flight is delayed or I return early? Will I be charged extra?",
    answer:
      "Many options have a grace period. Significant changes may incur charges; check out the terms during booking. We have flexible options and a flight monitoring system, too.",
  },
  {
    question:
      "How do I find the car park after booking with Airport Cheap Parking?",
    answer:
      "All Airport Cheap Parking partner car parks are signposted. You'll receive detailed directions with your booking confirmation. Use a sat-nav or map app for navigation.",
  },
  {
    question:
      "Can I book a car park space suitable for a coach or minibus at Stansted?",
    answer:
      "While most options cater to standard vehicles, contact Airport Cheap Parking directly to assist larger vehicles like coaches or minibusses. They can advise on suitable car parks and booking options.",
  },
  {
    question:
      "Do you offer long-term parking for extended trips from Standsted airport?",
    answer:
      "Yes, Stansted has long-term parking options available. Explore options and book online at the link to long-term parking on Airport Cheap Parking for the best deals.",
  },
];
const StanstedAirport = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div
        className="airport-parking
"
      >
        Secure Your Spot: Affordable Stansted Airport Parking Options
      </div>
      <div className="airport-parking-info">
        <p>
          Imagine arriving at Stansted, handing over your keys to a friendly
          professional, and walking straight to check-in. The weight of parking
          worries lifts instantly. No more circling crowded lots, no frantic
          searching for a ticket machine, no anxiety about hidden charges. Just
          a smooth, effortless transition from car to terminal, setting the tone
          for a relaxed and enjoyable trip. With our range of parking options,
          from valet-style meet & greet to cost-effective park & ride, that's
          precisely what you get.
          <br />
        </p>
      </div>

      <Infosecction />
      <br />
      <br />
      <div class="button-wrapper">
        <button class="booking-button">How to Book</button>
      </div>

      <h2 className="airport-header">
        How to Book Your Parking Spot at Stansted Airport
      </h2>
      <br />
      <p className="airport-text">
        Booking a parking spot at Stansted Airport has never been easier. Follow
        these steps to secure a hassle-free parking experience tailored to your
        travel needs.
      </p>
      <br />
      <div className="how-to-book-row">
        <div className="how-to-book-steps">
          <p>
            <strong>SEARCH AND COMPARE</strong>
            <br />
            Enter your travel dates to view available options and compare
            airport parking at Stansted. Use our easy-to-navigate platform to
            find deals that fit your schedule and budget.
          </p>
          <p>
            <strong>SELECT YOUR SERVICE</strong>
            <br />
            Choose from meet and greet, long-stay, or short-stay parking. Tailor
            your choice to your travel plans, whether it's a quick trip or an
            extended vacation.
          </p>
          <p>
            <strong>CONFIRM YOUR BOOKING</strong>
            <br />
            Complete your booking in minutes and receive instant confirmation.
            Enjoy peace of mind knowing your parking spot is secured before you
            travel.
          </p>
          <p>
            <strong>RELAX</strong>
            <br />
            Arrive at the airport knowing your parking is sorted. Focus on your
            journey while we take care of your car.
          </p>
        </div>
        <div className="how-to-book-side">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Parking illustration"
            style={{
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
      </div>
      <br />
      <div className="airport-title">
        Experience the Difference of Stress-Free Stansted Parking
      </div>
      <div className="airport-text">
        Learn how our parking services solve Stansted travelers' common
        challenges for a stress-free and seamless airport experience.
      </div>
      <br />
      <div>
        <div class="parking-info-grid">
          <div class="parking-box">
            <div>
              <h3>
                <strong>Guaranteed Best Value, Not Just "Cheap"</strong>
              </h3>
              <p>
                We don't just offer "cheap" parking; we deliver exceptional
                value. Compare our transparent pricing and comprehensive
                services to see how much you can save without sacrificing
                security or convenience.
              </p>
            </div>
          </div>
          <div>
            <div class="parking-box">
              <h3>
                <strong>From Car to Check-In, Effortlessly</strong>
              </h3>
              <p>
                Experience proper convenience with minimal walking and
                hassle-free transfers. Whether you choose to meet & greet or our
                closest park & ride options, we minimize the time and effort it
                takes to get from your car to the terminal.
              </p>
            </div>
          </div>
          <div>
            <div class="parking-box">
              <h3>
                <strong>More Than Just Surveillance</strong>
              </h3>
              <p>
                We go beyond basic security measures. Our facilities are
                designed with multiple layers of protection, ensuring your
                vehicle is safe from theft, damage, and unauthorized access.
              </p>
            </div>
          </div>
          <div>
            <div class="parking-box">
              <h3>
                <strong>Your Journey, Your Choice</strong>
              </h3>
              <p>
                Don't settle for one-size-fits-all parking. We offer a range of
                options to suit your budget, schedule, and travel preferences,
                giving you complete control over your airport parking
                experience.
              </p>
            </div>
          </div>
          <div>
            <div class="parking-box">
              <h3>
                <strong>No More Complicated Forms or Hidden Steps</strong>
              </h3>
              <p>
                Say goodbye to confusing booking processes. Our streamlined
                platform ensures a smooth and effortless experience from start
                to finish, with no hidden steps or complicated forms to fill
                out.
              </p>
            </div>
          </div>
          <div>
            <div class="parking-box">
              <h3>
                <strong>Online Booking and Payment</strong>
              </h3>
              <p>
                Allow for easy online booking and payment options, including
                secure payment gateways and flexible cancellation policies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h2 className="airport-title">
        Our Parking Services at Stansted Airport
      </h2>
      <br />
      <p className="airport-text">
        We offer a range of tailored parking solutions designed to meet every
        traveler’s needs at Stansted Airport.
      </p>
      <br />
      <div className="airport-parking-services">
        <div className="airport-service" data-count="1">
          <h3>Meet and Greet Parking</h3>
          <p>
            Experience the ultimate convenience with our Stansted meet-and-greet
            service. A professional driver will meet you at the terminal, park
            your car securely, and have it ready upon your return. It is ideal
            for families, business travelers, and anyone looking to save time.
          </p>
        </div>
        <div className="airport-service" data-count="2">
          <h3>On-Site Parking</h3>
          <p>
            Enjoy the ease of parking at the airport with our on-site parking
            services. Located just a short walk from the terminal, it is perfect
            for travelers who value proximity and convenience.
          </p>
        </div>
        <div className="airport-service" data-count="3">
          <h3>Park and Ride</h3>
          <p>
            Opt for our cost-effective park-and-ride service for a hassle-free
            experience. Park your car at our secure lot and hop on a
            complimentary shuttle that takes you straight to the terminal. It's
            the perfect solution for budget-conscious travelers.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="center-heading">FAQs</h2>
      {faqsData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className="arrow">{openIndex === index ? "▼" : "▶"}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
      <br />
      <br />
      <br />
    </>
  );
};

export default StanstedAirport;
