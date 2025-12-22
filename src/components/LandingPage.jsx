import React, { useState, useEffect } from 'react';
import '../LandingPage.css';
import fallNature from '../assets/fall_nature.jpg';
import lakeScene from '../assets/lake_scene.jpg';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviews = [
    // Temporary data for reviews can be placed here, or link to backend API for dynamic content
  ];

  const services = [
    // Can have pictures or buttons of sorts of services here
    {
      title: "Service 1",
    },
    {
      title: "Service 2",
    },
    // Add more services as needed
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Brand_Name_Here</div>
        <a 
          href="https://booksy.com/en-us/103571_dulce-kouture_hair-salon_134789_san-antonio#ba_s=seo" 
          className="appt-button"
          target="_blank"
          rel="noopener noreferrer">
          BOOK APPOINTMENT
        </a>
      </header>

      {/* Booking Section */}
      <section className="booking-background">
        <div className="booking-image">
          <img src={fallNature} alt="Some image" />
        </div>
        <div className="appt-section">
          <h1>Title Text here</h1>
          <p className="appt-subtitle">
            Some text here<br />
            Some text here<br />
            Some text here<br />
            Some text here
          </p>
          <a 
            href="https://booksy.com/en-us/103571_dulce-kouture_hair-salon_134789_san-antonio#ba_s=seo" 
            className="appt-button"
            target="_blank"
            rel="noopener noreferrer">
            BOOK APPOINTMENT <br />
            NOW
          </a>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">★★★★★</div>
              <h4>{review.name}</h4>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
        <p className="review-summary">
          Rated <strong>0 out of 5</strong> based on <strong>zero fucking reviews</strong>
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
                <path d="M30 10 L30 30 L42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2>Opening Hours:</h2>
            <h3>Some start time<br />Some end time</h3>
          </div>
          {/* Feature 2 */}
          <div className="feature">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
                <path d="M30 10 L30 30 L42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2>Other Features:</h2>
            <h3>Other Features<br />Here</h3>
          </div>
          {/* Feature 3 */}
          <div className="feature">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
                <circle cx="23" cy="25" r="3" fill="currentColor"/>
                <circle cx="37" cy="25" r="3" fill="currentColor"/>
                <path d="M20 38 Q30 45 40 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2>Other Features:</h2>
            <h3>Other Features<br />Here</h3>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="content-wrapper">
          <div className="content-image">
            <img src={lakeScene} alt="some-image" />
          </div>
          <div className="content-text">
            <h2>Title</h2>
            <p className="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="content-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="pricing">
              Lorem ipsum dolor sit amet,
            </p>
            <a 
              href="https://booksy.com/en-us/103571_dulce-kouture_hair-salon_134789_san-antonio#ba_s=seo" 
              className="appt-button"
              target="_blank"
              rel="noopener noreferrer">
              BOOK APPOINTMENT <br />
              NOW
            </a>
          </div>
        </div>
      </section>

      {/* Step Section */}
      <section className="how-it-works">
        <h2>Title</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1.</div>
            <h3>Make the plan</h3>
          </div>
          <div className="step">
            <div className="step-number">2.</div>
            <h3>Execute the plan</h3>
          </div>
          <div className="step">
            <div className="step-number">3.</div>
            <h3>
              Expect the plan to <br />
              go off the rails</h3>
          </div>
          <div className="step">
            <div className="step-number">4.</div>
            <h3>Throw away the plan</h3>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <button className="service-button">{service.title}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Brand_Name_Here</div>
          <nav className="footer-nav">
            <a href="#contact">Contact Us</a>
            {/* <a href="#faq">FAQ</a> */}
          </nav>
          <div className="social-icons">
            <a href="https://www.instagram.com/dulcekouture/?hl=en" aria-label="Instagram">📷</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
