import React from 'react'
import './Reviews.css';

const Reviews = () => {
    return (
        <>
            <button className="review-button">Reviews & Testimonials</button>
            <h1>Our Clients Trust Us</h1>
            <div className="reviews-container">
                <div className="review-card">
                    <p>"Great service! The parking was secure and the staff were very helpful."</p>
                    <h3>- John Doe</h3>
                </div>
                <div className="review-card">
                    <p>"Easy booking process and excellent customer support. Highly recommend!"</p>
                    <h3>- Jane Smith</h3>
                </div>
                <div className="review-card">
                    <p>"Affordable rates and convenient location. Will use again!"</p>
                    <h3>- Mike Johnson</h3>
                </div>
                <div className="review-card">
                    <p>"The best airport parking experience I've had. Clean and safe."</p>
                    <h3>- Sarah Brown</h3>
                </div>
                <div className="review-card">
                    <p>"Great service! The parking was secure and the staff were very helpful."</p>
                    <h3>- John Doe</h3>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Reviews