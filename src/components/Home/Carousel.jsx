import React, { useState, useEffect } from 'react';
import './carousel.css';
import christmasBanner from '../../assets/christmas-banner1.jpg';

const images = [
  christmasBanner,
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
];

const headings = [
  "",
  "Vacation Begins with Stress-Free Parking",
  "Park with Ease, Fly with Peace - This Autumn!"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="carousel-bg">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`slide-${idx}`}
          className={`carousel-img${current === idx ? " active" : ""}`}
        />
      ))}
      {/* Overlay content */}
      <div className="carousel-overlay">
        <div className="carousel-content">
          <h2>{headings[current]}</h2>
          <br />
          <br />
          <br />
          <br />
          <button className="carousel-btn">Join our mailing list for an exclusive discount code.</button>
        </div>
      </div>
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot${current === idx ? " active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;