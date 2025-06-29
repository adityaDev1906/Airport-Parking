import React, { useState } from 'react';
import './faqs.css';

const faqsData = [
    {
        question: "Do I trust your online payment procedures?",
        answer: "Yes, we have authorized procedures and carry out the transaction in full privacy. The entire details of your credit cards and payments are fully protected whilst you are using the service and we remove all the data from our server on the completion of booking procedure."
    },
    {
        question: "How do I amend my bookings?",
        answer: "All alterations and cancellations are obliged to be shared with the Airport Cheap Parking Ltd. All amendments will be based on the terms and condition of Airport Cheap Parking Ltd. The customers who desires to diminish or prolong the stays for their reserved service will be liable to follow the deductions and payments accordingly."
    },
    {
        question: "What is the procedure for making the complaints?",
        answer: "We take the feedbacks and complaints of our customers very seriously and respond them as early as possible. Please contact us at 0333 567 1984. The Airport Cheap Parking Ltd is the booking agent and is liable for the payments and \"meet and greet parking\" booking procedures but cannot be held the responsible of complaints against any car loss or damages. Any claims by the customer in respect of the delivery of the car parking services must be made against the service provider and subject to its terms and conditions."
    },
    {
        question: "Are all the companies insured?",
        answer: "Yes, All our service provider's have Fully Comprehensive."
    }
];
const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <div className='faqs-bg'>
            <h1 className='faqs-title'>Frequently Asked titles</h1>
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
        </div>
    );
}

export default Faqs;