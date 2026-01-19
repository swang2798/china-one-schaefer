import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>Address</h3>
          <p>13611 W 7 Mile Rd</p>
          <p>Detroit, MI, 48235</p>
        </div>
        <div className="footer-col">
          <h3>Make an Order</h3>
          <p>Tele: (313) 862-2000</p>
        </div>
        <div className="footer-col">
          <h3>Hours</h3>
          <p>Monday: CLOSED</p>
          <p>Tuesday: 11 AM to 9:30 PM</p>
          <p>Wednesday: 11 AM to 9:30 PM</p>
          <p>Thursday: 11 AM to 9:30 PM</p>
          <p>Friday: 11 AM to 10:30 PM</p>
          <p>Saturday: 11 AM to 10:30 PM</p>
          <p>Sunday: 12 PM to 9 PM</p>
        </div>
        <div className="footer-col">
          <h3>Leave Us A Review</h3>
          <p><a href="https://google.com/maps" target="_blank" rel="noopener noreferrer">Google Reviews</a></p>
          <p><a href="https://yelp.com" target="_blank" rel="noopener noreferrer">Yelp</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2017 by New China One Inc. Created by Steven W.</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670.4459127396979!2d-83.18114245218023!3d42.43099209563112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c2a7aada5d58d9!2sChina+One!5e0!3m2!1sen!2sus!4v1502838579777" 
          width="400" 
          height="300" 
          style={{border: 0}} 
          allowFullScreen
          loading="lazy"
          title="China One Location"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
