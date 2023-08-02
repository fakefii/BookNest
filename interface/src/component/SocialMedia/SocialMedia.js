import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h2>Connect with Us on Social Media</h2>
            <div className="social-icons mt-3">
              <a href="#" className="social-icon">
                <FaFacebookSquare size={50} />
              </a>
              <a href="#" className="social-icon">
                <FaTwitterSquare size={50} />
              </a>
              <a href="#" className="social-icon">
                <FaInstagramSquare size={50} />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedin size={50} />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia