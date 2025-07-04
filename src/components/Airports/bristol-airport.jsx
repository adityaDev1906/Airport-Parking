import React, { useState } from 'react'
import '../faqs.css'
import Infosecction from '../Home/Infosecction';

const faqsData = [
    {
        question: "How can I find cheap parking near Bristol Airport?",
        answer: "The easiest way to find the most affordable parking Bristol airport options is to compare parking deals on our website. Whether you choose Park and Ride Bristol Airport or Meet and Greet Bristol Airport, we offer low-cost options to fit your budget."
    },
    {
        question: "How secure is Bristol Airport parking?",
        answer: "All our parking facilities are equipped with robust security features, that includes surveillance cameras and regular staff checks. When you park with us, you can rest assured your car is safe."
    },
    {
        question: "How do I compare Bristol Airport parking deals?",
        answer: "Our platform lets you compare Bristol Airport parking options by price, convenience, and security. Simply enter your travel dates, and we’ll show you the best deals."
    },
    {
        question: "Is there long-term parking available at Bristol Airport?",
        answer: "Yes, we offer several long-term Bristol airport car park options for travelers who need to park for several days or weeks. Secure, affordable, and convenient—long-term parking has never been easier."
    },
    {
        question: "How far is parking at Bristol Airport from the terminal?",
        answer: "Our Park and Ride Bristol Airport services offer shuttle transport to the terminal, making it quick and easy to access your flight. For Meet and Greet Bristol Airport, you’ll be dropped off right at the terminal door, saving even more time."
    }
];
const BristolParking = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <>
            <div className="bristol-parking">Traveling from Bristol?</div>
            <div className='bristol-secure'>Secure Your Parking Spot with Our Trusted Options</div>
            <div className="bristol-parking-info">
                <p>Finding a parking spot at Bristol Airport doesn’t have to be a headache. Whether you're looking for a cheap parking near Bristol Airport or a top-notch Meet and Greet Bristol Airport service, we offer a range of customized options designed to fit your needs and budget. Enjoy secure, reliable parking that lets you focus on what matters—your journey.</p>
            </div>


            <Infosecction />

            <br />
            <div> Bristol Parking Component will come here </div>
            <br />
            <div>Why Parking at Bristol Airport Doesn’t Have to Be Complicated?</div>
            <div>When searching for Bristol airport car parking, you need convenience, safety, and cost-effectiveness. Our parking solutions meet these needs by offering a variety of options that are both affordable and easy to use.</div>
            <br />
            <div className="bristol-box-row">
                <div className="bristol-box">
                    <h3>Affordable and Convenient Parking</h3>
                    <p>We specialize in providing cheap parking Bristol airport that doesn’t sacrifice security or ease.</p>
                </div>
                <div className="bristol-box">
                    <h3>24/7 Secure Parking</h3>
                    <p>All our Bristol airport car park options are equipped with high-end security features. CCTV, staff presence, and secure barriers ensure that your vehicle is safe while you travel.</p>
                </div>
            </div>
            <div className="bristol-box-row">
                <div className="bristol-box">
                    <h3>Quick Access to Terminals</h3>
                    <p>Whether you choose to park and ride or take advantage of a meet and greet service, we ensure that your parking experience is as seamless and quick as possible. Skip the long walks and get to your gate with minimal hassle.</p>
                </div>
                <div className="bristol-box">
                    <h3>Flexible Parking Solutions for Every Traveler</h3>
                    <p>No matter your parking needs, we offer a variety of options to ensure a smooth start to your journey. We provide you utmost flexibility so you can park with confidence knowing you're getting the best service at the best price.</p>
                </div>
            </div>
            <br />
            <br />
            <h2>Our Parking Services at Bristol Airport</h2>
            <p>At Airport Cheap Parking, we offer a range of parking services designed to make your journey smoother, more convenient, and more affordable. Whether you're traveling for a few days or a few weeks, our parking options ensure you have the perfect solution for your needs.</p>
            <br />
            <div className="bristol-parking-services">
                <div className="bristol-service" data-count="1">
                    <h3>Meet and Greet</h3>
                    <p>No need to search for a parking spot, fast access to the terminal, professional service. Our Meet and Greet Bristol Airport service is the perfect choice, for those looking for a hassle-free, premium experience.</p>
                </div>
                <div className="bristol-service" data-count="2">
                    <h3>Park and Ride</h3>
                    <p>If you prefer a more affordable option without compromising convenience, our Park and Ride Bristol Airport service is an excellent choice. It’s quick, easy, and cost-effective, making it a great solution for both short-term and long-term stays.</p>
                </div>
                <div className="bristol-service" data-count="3">
                    <h3>Onsite Parking at Bristol Airport</h3>
                    <p>For ultimate convenience, our onsite parking at Bristol Airport offers the closest possible parking to the terminal. With easy access and a prime location, onsite parking is perfect for those who value speed and simplicity.</p>
                </div>
            </div>
            <br />
            <br />
            <h2>What Makes Our Bristol Airport Parking Stand Out?</h2>
            <p>With a variety of parking options, you can find the perfect fit for your budget, schedule, and convenience. Whether you need affordable parking Bristol airport, the luxury of Meet and Greet Bristol Airport, onsite parking for easy access, or a secure place for your long-term stay, we have it all.</p>
            <br />
            <br />
            <h3>Hassle-Free Meet and Greet</h3>
            <p>Don’t waste time searching for parking spaces. Our Meet and Greet Bristol Airport service is perfect for those who want to drive directly to the terminal, hand over the keys, and head straight to check-in. No need to worry about finding a space—our drivers take care of everything.</p>

            <h3>Reliable Park and Ride</h3>
            <p>If you prefer a more economical option, our Park and Ride Bristol Airport service offers a great balance of cost and convenience. Simply park in our secure lot, hop on a shuttle, and you'll be dropped off right at the terminal.</p>

            <h3>Easy Comparison of Parking Deals</h3>
            <p>Compare Bristol Airport parking deals and prices all in one place. We’ve streamlined the process, so you can quickly choose the best option for your needs without the stress of scouring multiple sites.</p>

            <h3>Long-Term Parking for Peace of Mind</h3>
            <p>Heading away for an extended trip? Our Bristol parking options for long-term stays provide a secure, affordable solution with easy access when you return.</p>
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

export default BristolParking