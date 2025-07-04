import React, { useState } from 'react'
import '../faqs.css'
import './gatwick-parking.css'
import Infosecction from '../Home/Infosecction';

const faqsData = [
    {
        question: "How can I guarantee a parking spot at Gatwick?",
        answer: "Pre-booking your parking is the best way to ensure availability, even during peak travel times. You can reserve your spot online ahead of time to secure the best rates and confirm your space."
    },
    {
        question: "What’s the fastest way to get from parking to my terminal at Gatwick?",
        answer: "The meet and greet service provides the quickest access. For on-site or park and ride options, a shuttle bus offers quick transfers, usually taking only a few minutes to get to the terminal."
    },
    {
        question: "Is there a parking option for short trips at Gatwick?",
        answer: "Yes, both on-site parking and meet and greet options cater to short stays. These services are ideal if you need quick access without the long-term commitment, offering easy access to terminals."
    },
    {
        question: "What happens if my flight is delayed—can I extend my parking duration?",
        answer: "If your flight is delayed, you can extend your parking duration by contacting the service provider. Pre-booked services often offer flexibility, allowing you to adjust your parking time with minimal hassle."
    },
    {
        question: "Is park and ride safe at Gatwick?",
        answer: "Absolutely. Our park and ride services provide secure, monitored parking with 24/7 surveillance, ensuring your vehicle is safe while you’re away."
    },
    {
        question: "Can I park at Gatwick if I’m only dropping someone off?",
        answer: "If you’re only dropping off a passenger, you can use the short-term parking areas near the terminals for quick drop-off. These areas are ideal for fast departures without the need for extended parking."
    }
];
const GatwickAirport = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <>
            {/* <div className="bristol-parking">Traveling from Bristol?</div> */}
            <div className='bristol-secure'>Find Your Ideal Gatwick Parking Spot in Minutes</div>
            <div className="bristol-parking-info">
                <p>Finding the right parking at Gatwick Airport shouldn’t add to the pressure of your trip. Whether you're heading off for a short business flight or a relaxing holiday, securing the perfect parking spot in advance is the first step toward a seamless journey. At Airport Cheap Parking, we offer tailored solutions for every type of traveler. From the convenience of meet and greet Gatwick to the premium service of Gatwick valet parking, we ensure that your experience is efficient, affordable, and most importantly, hassle-free. Book now for peace of mind and guaranteed savings.</p>
            </div>

            <Infosecction />
            <br />
            <div> Gatwick Parking Component will come here </div>
            <br />
            <div>How Parking at Gatwick Airport Works?</div>
            <div>Parking at Gatwick is simple with our range of options. Pre-booking your space guarantees availability and a smooth start to your journey.</div>
            <br />
            <div className="bristol-box-row">
                <div className="bristol-box">
                    <h3>Choosing the Right Parking Option</h3>
                    <p>Selecting the right parking option at Gatwick is simple. Whether you choose meet and greet, on-site parking, or park and ride, we have an option that fits your budget, convenience, and duration of stay.</p>
                </div>
                <div className="bristol-box">
                    <h3>Pre-Booking Ensures Availability</h3>
                    <p>Pre-booking your parking space guarantees a spot, no matter how busy the airport gets. It takes away the stress of worrying about last-minute availability, ensuring a smooth start to your travel.</p>
                </div>
            </div>
            <div className="bristol-box-row">
                <div className="bristol-box">
                    <h3>Easy Transfers to the Terminal</h3>
                    <p>With meet and greet, your car is parked for you right at the terminal. If you choose park and ride or on-site parking, quick shuttle services ensure you reach your terminal without delay.</p>
                </div>
                <div className="bristol-box">
                    <h3>Secure and Affordable Parking</h3>
                    <p>All parking options at Gatwick offer secure facilities with 24/7 surveillance. You’ll enjoy peace of mind knowing your car is safe, all while benefiting from affordable parking rates.</p>
                </div>
            </div>
            <br />
            <br />
            <h2>Our Gatwick Airport Parking Services</h2>
            <p>We offer a variety of parking services at Gatwick to suit your preferences and budget. With flexible options and reliable customer service, we ensure your parking is both convenient and secure, whether you're catching a quick flight or embarking on a long trip.</p>
            <br />
            <div className="bristol-parking-services">
                <div className="bristol-service" data-count="1">
                    <h3>Meet and Greet Parking</h3>
                    <p>Our meet and greet service offers the ultimate convenience by allowing you to drive directly to your terminal. A professional valet will meet you, park your car, and you can proceed straight to your gate with no hassle.</p>
                </div>
                <div className="bristol-service" data-count="2">
                    <h3>On-Site Parking</h3>
                    <p>For those looking for a simple, hassle-free option, our on-site parking is located just a short walk from the terminals. It’s ideal for those seeking a secure place to park with easy access for quick terminal transfers.</p>
                </div>
                <div className="bristol-service" data-count="3">
                    <h3>Park and Ride Parking</h3>
                    <p>Park and ride is the most cost-effective solution for travelers seeking a balance between convenience and value. Simply park your car in a secure lot, and take a quick shuttle bus to your terminal, ensuring a smooth and affordable experience.</p>
                </div>
            </div>
            <br />
            <br />
            <h2>Benefits of Choosing Our Gatwick Parking Services</h2>
            <p>Enjoy a seamless and stress-free parking experience at Gatwick Airport with a range of services designed to make your journey smoother.</p>
            <br />
            <br />
            <h3>Quick and Easy Terminal Access</h3>
            <p>Skip the stress of long walks and shuttle rides. With our meet and greet Gatwick or valet parking, you'll be dropped right at the terminal, saving you time, energy, and hassle—perfect for busy travelers.</p>

            <h3>Guaranteed Spot, No More Stressing</h3>
            <p>Forget about circling for a parking space. Whether you're flying from Gatwick North Terminal or South Terminal, we ensure you’ll always have a space waiting for you, taking the guesswork out of parking.</p>

            <h3>Flexible Parking for Every Need</h3>
            <p>Don't pay for more parking than you need. Our flexible options allow you to book the exact duration that suits your trip, by making you get the best value for your money, whether you require short-term, mid-term, or long-term parking.</p>

            <h3>Safe and Secure Parking with Real-Time Monitoring</h3>
            <p>Travel confidently knowing your vehicle is secure. Our parking lots are equipped with advanced security features and 24/7 surveillance, giving you peace of mind while you focus on your flight.</p>

            <h3>Affordable Deals for Every Budget</h3>
            <p>Worried about high parking prices? We help you compare parking deals Gatwick to find the best value options, ensuring you get the best rates without compromising on convenience.</p>

            <h3>Instant Booking and Reliable Support</h3>
            <p>Need help or last-minute changes? Our easy-to-use booking system lets you secure your spot instantly, and our customer service team is always ready to assist with any queries before or during your trip.</p>
            <br />
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

export default GatwickAirport