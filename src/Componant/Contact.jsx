import React from 'react';
import ButtonComp from './ButtonComp';

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-12 col-md-5 mx-auto mb-4 mb-md-0">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">Your Mobile Number</label>
              <input type="number" className="form-control" id="number" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <ButtonComp background={'#5a1b9d'} color={'#fff'} content={'About Us'} />
          </form>
        </div>
        <div className="col-12 col-md-5 mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392307.51066784846!2d-86.47934517069773!3d39.80917758142648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2sin!4v1711819134322!5m2!1sen!2sin" style={{border:0, width: '100%', height:'50%'}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
