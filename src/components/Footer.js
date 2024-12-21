import React from 'react';

import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-main-links">
          <p>© 2024 Food Shop | All Rights Reserved</p>
          
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@foodshop.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 456 Gourmet Lane, Flavor Town</p>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
