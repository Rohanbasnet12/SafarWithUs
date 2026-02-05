import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footerSection">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="footer-main-content">
          {/* Left Side - About Company */}
          <div className="footer-about">
            <div className="footer-logo">
              <h3>Ranthambore National Park</h3>
            </div>
            <p className="footer-description">
              Ranthambore National Park Safaris, wildlife adventures, natural
              stays, sightseeing, and birdwatching experiences with our
              personalised and expert services.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          {/* Right Side - Three Sections */}
          <div className="footer-right-sections">
            {/* Quick Links Section */}
            <div className="footer-section">
              <ul className="footer-links">
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/tourpackage" className="footer-link">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link to="/safari-booking" className="footer-link">
                    Online Safari
                  </Link>
                </li>
              </ul>
            </div>

            {/* Safari Info Section */}
            <div className="footer-section">
              <ul className="footer-links">
                <li>
                  <a href="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund" className="footer-link">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/faq" className="footer-link">
                    Faq&apos;s
                  </a>
                </li>
                <li>
                  <a href="/things-to-do" className="footer-link">
                    Things to do
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Support Section */}
            <div className="footer-section">
              <div className="contact-details">
                <div className="contact-method">
                  <FontAwesomeIcon icon={faPhone} className="method-icon" />
                  <div>
                    <a href="tel:9988764563" className="contact-link">
                      +91 99887 64563
                    </a>
                    <a href="tel:9012345678" className="contact-link">
                      +91 90123 45678
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <FontAwesomeIcon
                    icon={faEnvelopeRegular}
                    className="method-icon"
                  />
                  <div>
                    <a href="mailto:info@tadoba.com" className="contact-link">
                      info@tadoba.com
                    </a>
                    <a
                      href="mailto:booking@tadoba.com"
                      className="contact-link"
                    >
                      booking@tadoba.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; 2025 Seven Safar Tour and Travels. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="bottom-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="bottom-link">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="bottom-link">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
