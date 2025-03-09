import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is imported in your project
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white py-5 mt-5">
      <div className="container">
        <div className="row text-md-left"> {/* Added text-center for mobile, text-md-left for larger screens */}
          {/* About Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5>About Us</h5>
            <p>
              We are an e-commerce platform <br /> dedicated to providing the best <br />
              products for our customers with <br /> great service and fast delivery.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="/products" className="text-white text-decoration-none">Products</a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Contact</h5>
            <p>Email: info@yourwebsite.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Social Media Section */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-4">
          <p>&copy; 2025 Your Website | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
