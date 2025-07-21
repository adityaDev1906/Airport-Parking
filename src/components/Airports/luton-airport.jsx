import React, { useState } from "react";
import "../faqs.css";
import "./airport-parking.css";
import Infosecction from "../Home/Infosecction";

const faqsData = [
  {
    question:
      "How do I find the correct drop-off point for Meet & Greet at Luton Airport?",
    answer:
      "Upon booking your Meet & Greet service, you will receive a confirmation email with detailed instructions and a postcode for the designated drop-off point at Luton Airport. This information will also be accessible in your online booking account. We recommend checking these instructions before you travel to ensure a smooth arrival. We also provide a contact number for our Meet & Greet team should you require assistance on the day.",
  },
  {
    question: "Can I take my car keys using the Park & Ride service?",
    answer:
      "You retain your car keys when using our Park & Ride service. You park your vehicle in our secure car park and keep your keys with you throughout your trip.",
  },
  {
    question:
      "I have a blue badge for disabled parking. Are there any discounts available?",
    answer:
      "While we strive to offer competitive prices for all our customers, we do not currently provide specific discounts for blue badge holders on pre-booked parking. However, we provide designated parking spaces in all our car parks near transfer points or terminal entrances. We recommend booking in advance to ensure availability.",
  },
  {
    question:
      "What security measures are in place at your Park & Ride car park?",
    answer:
      "Our Park & Ride car park is a secure facility with multiple layers of security. These include 24/7 CCTV surveillance, floodlighting, secure perimeter fencing, regular patrols by trained security personnel, and [mention any specific technology like ANPR or entry/exit barriers]. We prioritize the safety of your vehicle while you are away.",
  },
  {
    question:
      "Can I amend or cancel my booking if my travel plans change? Is there a fee for this?",
    answer:
      "Yes, you can amend or cancel your booking before your scheduled arrival time, as mentioned on the website. Cancellations made within this timeframe are eligible for a full refund. Amendments may be subject to a small administration fee. Please refer to our terms and conditions for complete details.",
  },
];
const LutonAirport = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="airport-parking">
        Your Perfect Luton Airport Parking Match- Find your Ideal Spot!
      </div>
      <div className="airport-parking-info">
        <p>
          Are you tired of the pre-flight parking panic at Luton Airport?
          Searching endlessly for a spot, worrying about security, and dreading
          the hefty fees? We get it. That's why we've made Luton Airport parking
          simple, stress-free, and affordable. From convenient short stays to
          secure long-term options and seamless meet-and-greet services, we've
          covered your parking needs so that you can focus on your trip, not
          your car.
        </p>
      </div>

      <Infosecction />
      <br />
      <br />
      <div className="airport-header">
        Real-Time Solutions for Common Luton Airport Parking Issues
      </div>
      <div className="airport-text">
        From finding a spot to managing delays, we provide practical solutions
        to common Luton Airport parking issues.
      </div>
      <br />
      <div className="airport-box-row">
        <div className="airport-box">
          <h3>Limited Availability</h3>
          <p>
            Luton Airport parking can fill up quickly, especially during peak
            seasons. Booking your parking spot online guarantees your space and
            eliminates the hassle of searching for parking upon arrival.
          </p>
        </div>
        <div className="airport-box">
          <h3>Uncertain Arrival Times</h3>
          <p>
            Our flexible booking options allow you to modify your reservation if
            your flight arrival time changes. You can easily adjust your booking
            online or by contacting our customer support team.
          </p>
        </div>
      </div>
      <div className="airport-box-row">
        <div className="airport-box">
          <h3>Unfamiliarity with the Airport</h3>
          <p>
            Our car parks are conveniently located and well-signposted.
            Additionally, we provide clear instructions on how to find your
            designated car park upon booking.
          </p>
        </div>
        <div className="airport-box">
          <h3>Luggage and Accessibility Concerns</h3>
          <p>
            Traveling with large luggage or requiring accessibility assistance
            can add extra stress to parking. We offer designated accessible
            parking spaces close to transfer points, giving all passengers a
            smooth and comfortable experience.
          </p>
        </div>
      </div>
      <br />
      <br />
      <h2 className="airport-title">Flexible Luton Airport Parking Options</h2>
      <p className="airport-text">
        Airport Cheap Parking has the perfect Luton Airport parking solution for
        you, from short-term options to secure long-term parking and stress-free
        meet and greet services.
      </p>
      <br />
      <div className="airport-parking-services">
        <div className="airport-service" data-count="1">
          <h3>Meet and Greet Parking</h3>
          <p>
            Enjoy ultimate convenience with our Meet & Greet service. Drive
            straight to the terminal drop-off, where a professional chauffeur
            will collect your car and park it securely. Your vehicle will be
            waiting for you upon your return. Perfect for families, travelers
            with heavy luggage, or those valuing time.
          </p>
        </div>
        <div className="airport-service" data-count="2">
          <h3>On-Site Parking</h3>
          <p>
            For maximum proximity, choose On-Site parking. Located within the
            airport grounds, these car parks offer a short walk or quick
            transfer to the terminal. It is a convenient and affordable option
            for those who prefer to park their vehicle.
          </p>
        </div>
        <div className="airport-service" data-count="3">
          <h3>Park and Ride Parking</h3>
          <p>
            Looking for the most budget-friendly option? Our Park & Ride service
            offers excellent value. Park in our secure off-airport car park and
            take a quick, frequent shuttle to the terminal. Ideal for longer
            trips and budget-conscious travelers.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="airport-title">
        Why Choose Airport Cheap Parking for Your Luton Airport Parking?
      </div>
      <div className="airport-text">
        Experience the Airport's Cheap Parking difference. Our competitive
        prices, secure facilities, and easy-to-use booking system make us the
        smart choice for stress-free airport parking.
      </div>
      <br />
      <div className="airport-box-row">
        <div className="airport-box">
          <h3>Price Match Guarantee</h3>
          <p>
            Finding a cheaper price for comparable Luton Airport parking
            elsewhere? We'll match it! We're committed to offering the best
            value, ensuring you never pay more than you have to.
          </p>
        </div>
        <div className="airport-box">
          <h3>Fast & Frequent Transfers</h3>
          <p>
            Our shuttle buses run frequently, with a guaranteed maximum wait
            time of just 10 minutes. No more anxiously waiting around – we will
            get you to the terminal quickly and efficiently.
          </p>
        </div>
      </div>
      <div className="airport-box-row">
        <div className="airport-box">
          <h3>Secure Parking with Advanced Security Measures</h3>
          <p>
            Your car's safety is our top priority. Our car parks are equipped
            with 24/7 CCTV surveillance, floodlighting, secure perimeter
            fencing, and regular patrols by trained security personnel.
          </p>
        </div>
        <div className="airport-box">
          <h3>Flexible Booking with Free Cancellation</h3>
          <p>
            Travel plans can change. That's why we offer flexible booking
            options with free cancellation up to 24 hours before booking—giving
            you peace of mind and control over your travel arrangements.
          </p>
        </div>
      </div>
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

export default LutonAirport;
