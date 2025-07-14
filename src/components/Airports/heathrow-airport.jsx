import React, { useState } from 'react'
import '../faqs.css'
import './airport-parking.css'
import Infosecction from '../Home/Infosecction';

const faqsData = [
    {
        question: "How can I find a parking spot during peak hours at Heathrow?",
        answer: "During peak travel times, parking spaces can fill up quickly. To avoid stress, we recommend pre-booking your parking space online. It helps you to get a guaranteed spot near your terminal, that will save your time and effort when you arrive."
    },
    {
        question: "What should I do if I encounter traffic congestion near Heathrow Airport?",
        answer: "Heathrow's proximity to major roads can lead to traffic congestion, especially during rush hours. To avoid delays, consider leaving earlier than planned or using real-time traffic apps to monitor road conditions. Our Meet and Greet service can also help you skip the parking search and get straight to your terminal."
    },
    {
        question: "Why am I experiencing long wait times for shuttle services from remote parking?",
        answer: "Shuttle services to remote parking areas can experience delays, particularly during busy travel periods. To minimize wait times, we recommend opting for on-site parking or using our Park and Ride service, that offers quicker access to the terminals with reduced shuttle waiting."
    },
    {
        question: "How can I easily locate parking specific to my terminal?",
        answer: "Each terminal at Heathrow has dedicated parking areas, but signage can sometimes be unclear. To avoid confusion, you can use our parking comparison tool to choose the best terminal-specific parking spot. Our booking system provides detailed instructions and real-time updates on availability to guide you to the nearest parking area."
    },
    {
        question: "Are there enough charging stations for electric vehicles at Heathrow?",
        answer: "While Heathrow is increasing its EV charging stations, availability can sometimes be limited during peak hours. We suggest pre-booking parking at facilities with guaranteed EV charging spots to ensure you don’t face any inconvenience. Our services offer EV-friendly parking areas with easy access to charging stations."
    }
];
const HeathrowAirport = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <>
            <div className='airport-secure'>Affordable & Hassle-Free Parking Solutions at Heathrow Airport</div>
            <div className="airport-parking-info">
                <p>Navigating Heathrow Airport’s bustling terminals can be challenging, especially when it comes to parking. From last-minute booking headaches to finding a spot near your terminal, we’ve streamlined every aspect of Heathrow parking to ensure your experience is stress-free and efficient. Whether you’re on a tight schedule or prioritizing convenience, our tailored parking solutions are designed to meet the real-time needs of every passenger.</p>
            </div>

            <Infosecction />
            <br />
            <br />
            <div>Top Reasons to Airport Cheap Parking for Heathrow terminals</div>
            <div>We understand that every passenger at Heathrow has unique needs and expectations. Here's why travelers trust us to make their parking experience as seamless as possible.</div>
            <br />
            <div className="airport-box-row">
                <div className="airport-box">
                    <h3>Convenience Across All Terminals</h3>
                    <p>With dedicated parking options at Heathrow Terminal 2, Terminal 3, Terminal 4, and Terminal 5, you can find a spot close to your departure gate.</p>
                </div>
                <div className="airport-box">
                    <h3>Affordable Rates</h3>
                    <p>Compare airport parking Heathrow options to get competitive prices for long-stay or short-stay needs.</p>
                </div>
            </div>
            <div className="airport-box-row">
                <div className="airport-box">
                    <h3>Secure Parking</h3>
                    <p>Rest assured with 24/7 CCTV surveillance, gated access, and insured drivers.</p>
                </div>
                <div className="airport-box">
                    <h3>Flexible Choices</h3>
                    <p>Whether you need long stay parking at Heathrow or quick drop-off services, we’ve got you covered.</p>
                </div>
            </div>
            <br />
            <br />
            <h2>Six Tailored Parking Solutions for Heathrow Travelers</h2>
            <p>Discover a range of convenient and reliable parking options designed to meet the diverse needs of Heathrow travelers.</p>
            <br />
            <div className="airport-parking-services">
                <div className="airport-service" data-count="1">
                    <h3>Meet and Greet Parking</h3>
                    <p>Enjoy seamless parking with our meet and greet service. Drop your car at the terminal and have it securely parked by our professionals.</p>
                </div>
                <div className="airport-service" data-count="2">
                    <h3>Park and Ride</h3>
                    <p>Ideal for budget-conscious travelers. Park your car in a secure lot and take a quick shuttle to your terminal.</p>
                </div>
                <div className="airport-service" data-count="3">
                    <h3>On-Airport Parking</h3>
                    <p>Park directly within Heathrow's premises for unbeatable convenience, perfect for travelers who value proximity to the terminal.</p>
                </div>
                <div className="airport-service" data-count="4">
                    <h3>Valet Parking</h3>
                    <p>Save time with our valet parking service. A professional driver will park your car while you proceed to check-in stress-free.</p>
                </div>
                <div className="airport-service" data-count="5">
                    <h3>Short-Stay Parking</h3>
                    <p>Perfect for pickups, drop-offs, or short trips. Located close to terminals, ensuring minimal walking distance.</p>
                </div>
                <div className="airport-service" data-count="6">
                    <h3>Long-Stay Parking</h3>
                    <p>Affordable and secure long-stay options for extended trips. Includes complimentary shuttle services to all terminals.</p>
                </div>
            </div>
            <br />
            <br />
            <h2>Why Travelers Trust Us for Heathrow Parking</h2>
            <p>When you choose us for parking at Heathrow, you're not just getting a spot—you're gaining a complete travel solution that makes your journey smoother and more efficient.</p>
            <br />
            <br />
            <h3>Streamlined Check-in and Parking Process</h3>
            <p>Save valuable time with our convenient parking options that minimize the walk to your terminal or eliminate the need to park altogether with meet and greet services.</p>

            <h3>Tailored Parking Solutions for Every Traveler</h3>
            <p>Whether you need short-term parking, long-term storage, or a premium valet service, we offer options designed around your specific needs.</p>

            <h3>Exceptional Customer Support Anytime, Anywhere</h3>
            <p>Our customer support team is available 24/7 to assist with bookings, changes, or any other questions, ensuring your experience is hassle-free from start to finish.</p>

            <h3>Cost-Effective Parking Plans</h3>
            <p>Get access to affordable parking packages with no hidden fees, offering clear pricing and flexible plans, so you can plan your trip without worrying about unexpected costs.</p>

            <h3>Ideal for Families, Business Travelers, and Solo Flyers</h3>
            <p>Our services cater to all types of travelers, whether you’re dropping off a family member, heading out for a business trip, or embarking on a solo adventure.</p>

            <h3>Sustainable Travel Solutions</h3>
            <p>We’re committed to sustainability, by offering EV charging stations at select parking facilities, so you can charge your electric vehicle while you travel.</p>
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

export default HeathrowAirport