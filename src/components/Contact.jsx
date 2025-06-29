import React from 'react';
import './contact.css';
const Contact = () => {
    return (
        <div className="contact-bg">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-info">
                <div className="contact-row">
                    <span className="contact-icon" role="img" aria-label="phone">📞</span>
                    0333 567 1984
                </div>
                <div className="contact-row">
                    <span className="contact-icon" role="img" aria-label="mail">📧</span>
                    info@airportcheapparking.co.uk
                </div>
            </div>
        </div>
    );
}

export default Contact;
