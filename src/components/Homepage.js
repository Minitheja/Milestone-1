import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
    
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to Gourmet Delights</h1>
        <p>Serving happiness on your plate with our wide variety of mouth-watering dishes!</p>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          showIndicators={true} 
          dynamicHeight={false}
        >
          <div className="carousel-item">
            <img src="img1.jpg" alt="Delicious Burger" />
            <div className="carousel-overlay">
              <h2>Savor Our Signature Burgers</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img2.jpg" alt="Creamy Pasta" />
            <div className="carousel-overlay">
              <h2>Indulge in Creamy Pastas</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img3.jpeg" alt="Exquisite Dessert" />
            <div className="carousel-overlay">
              <h2>Treat Yourself with Desserts</h2>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Special Offers Section */}
      <section className="special-offers">
        <h2>Special Offers</h2>
        <ul>
          <li>🍔 Combo Deal: Burger + Fries + Drink at just $9.99!</li>
          <li>🍝 15% off on all Pasta dishes every Thursday.</li>
          <li>🍰 Buy 1 Dessert, Get 1 Free on weekends!</li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
