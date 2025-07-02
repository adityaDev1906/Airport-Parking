import React, { useState } from 'react'
import '../faqs.css'
import './manchester-parking.css'

const faqsData = [
  {
    question: "How can I ensure that my car is safe while I'm away?",
    answer: "We have parking facilities at Manchester Airport that are monitored 24/7 by CCTV to ensure everything is secure. Whether you choose park and ride, meet and greet, or on-site parking, you can relax as your car is safe."
  },
  {
    question: "What if my flight is delayed?",
    answer: "We completely understand that travel plans can change, so we are flexible with your booking. Just let us know, and we will arrange your parking arrangement to accommodate the new arrival time. We have a customer support team to help anytime."
  },
  {
    question: "How early can I book my parking slot?",
    answer: "We allow booking parking spots as early as possible to guarantee availability and the best rates. But if you need last-minute parking, we have got you covered. We always have solutions to every travel date."
  }
];
const ManchesterAirport = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
      <div className='bristol-secure'>Manchester Airport Parking Made Easy Your Stress-Free Parking Experience at Manchester Airport</div>
      <div className="bristol-parking-info">
        <p>When it comes to travelling, the last thing you want is parking stress. At Airport Cheap Parking, we’ve made parking at Manchester Airport simple, secure, and affordable. Whether you’re flying for business, taking a family holiday, or heading out for a weekend getaway, we offer a range of parking services designed to suit every need and budget.
          <br />
          <br />
          From budget-friendly parking options to top-tier meet-and-greet services, we always ensure you get the best deal.
        </p>
      </div>
      <br />
      <div> Manchester Parking Component will come here </div>
      <br />
      <div>Why Choose Airport Cheap Parking?</div>
      <div>Choosing the proper parking at Manchester Airport shouldn't be easy. With cheap airport parking, we provide you.</div>
      <br />
      <div className="bristol-box-row">
        <div className="bristol-box">
          <h3>Convenient Parking Locations</h3>
          <p>Our parking facilities provide quick and easy access to your gate, Located just minutes from all terminals, including Manchester Airport Terminal 3.</p>
        </div>
        <div className="bristol-box">
          <h3>Top-Level Security</h3>
          <p>Rest easy knowing your vehicle is in safe hands. Our parking facilities are monitored 24/7 with CCTV to ensure your car is secure while you're away.</p>
        </div>
      </div>
      <div className="bristol-box-row">
        <div className="bristol-box">
          <h3>Affordable Prices for Every Traveler</h3>
          <p>We pride ourselves on offering cheap airport parking and not compromising quality. Whether you'reyou're looking for a budget solution or a more luxurious experience, we have a parking option to fit your needs.</p>
        </div>
        <div className="bristol-box">
          <h3>Flexible Parking Options</h3>
          <p>Whether you need the ultimate convenience of meet-and-greet parking, the cost-effectiveness of park-and-ride, or the proximity of on-site parking, we have the perfect solution.</p>
        </div>
      </div>
      <br />
      <br />
      <h2>Our Parking Services at Manchester Airport</h2>
      <br />
      <br />
      <div className="bristol-parking-services">
        <div className="bristol-service" data-count="1">
          <h3>Meet-and-Greet Parking</h3>
          <p>It’s the perfect solution for those in a hurry or travelling with lots of luggage. With our meet-and-greet parking service, drive to your terminal, hand over your keys to our professional valet, and head straight to check in while we take care of your car.</p>
        </div>
        <div className="bristol-service" data-count="2">
          <h3>Park-and-Ride Parking</h3>
          <p>Our park-and-ride service provides an affordable yet reliable solution. It’s a budget-friendly way to make sure you don’t miss your flight. Park your car at a secure location, hop on a shuttle, and enjoy a quick ride to the terminal.</p>
        </div>
        <div className="bristol-service" data-count="3">
          <h3>On-Site Parking</h3>
          <p>Need to stay close to the action? Our on-site parking options are perfect for travellers who want the convenience of parking just minutes from their terminal. No transfers are needed – park and walk to check-in.</p>
        </div>
      </div>
      <br />
      <br />
      <button>How to Book</button>
      <h2>How to Book Your Parking with Airport Cheap Parking</h2>
      <br />
      <p>Booking your Manchester Airport parking with us is quick and easy.</p>
      <br />
      <br />
      <div className="how-to-book-row">
        <div className="how-to-book-steps">
          <p><strong>ENTER YOUR TRAVEL DETAILS</strong><br />
            Let us know your travel dates and terminal preferences so that we can find the best available parking options.
          </p>
          <p><strong>CHOOSE THE BEST PARKING OPTION</strong><br />
            From affordable park-and-ride options to premium meet-and-greet services, you can compare and select the parking that suits you best.
          </p>
          <p><strong>BOOK AND RELAX</strong><br />
            Once you’ve booked, you can rest easy knowing your parking is sorted, leaving you free to focus on the excitement of your trip.
          </p>
        </div>
        <div className="how-to-book-side">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Parking illustration"
            style={{ width: "100%", borderRadius: "8px", objectFit: "cover", height: "100%" }}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="how-to-book-row">
        <div className="how-to-book-side">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Parking illustration"
            style={{ width: "100%", borderRadius: "8px", objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="how-to-book-steps">
          <h3>Don’t Overpay for Parking<br />– Compare the Best Deals</h3>
          <p>
            Why pay more? At Airport Cheap Parking, we make it easy to compare parking deals at Manchester Airport and save on your next trip. From pocket-friendly options to premium services, we help you find the right choice for your travel needs.
          </p>
          <br />
          <button className="book-save-btn">Book Now to Save</button>
        </div>
      </div>
      <br />
      <h2 className="center-heading">FAQs</h2>
      {faqsData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className="arrow">{openIndex === index ? '▼' : '▶'}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      <br />
      <br />
      <br />
    </>
  )
}

export default ManchesterAirport