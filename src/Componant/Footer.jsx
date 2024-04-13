import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="container-fluid bg-dark bg-gradient text-white py-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <h4>About Shop</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id quam et urna fermentum dignissim.</p>
            </div>
            <div className="col-12 col-md-4">
              <h4>Quick Links</h4>
              <ul className='ps-0'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h4>Contact Us</h4>
              <p>123 Main Street, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <p className="text-center">&copy; 2024 HI Tech. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer