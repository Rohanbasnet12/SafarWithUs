import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBan, FaLocationDot, FaWifi, FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import defaultHotelImage from "../assets/images/caption.jpg";
import "../styles/HotelPage.css";

function HotelCard({ hotel }) {
  const validImages =
    hotel.images && hotel.images.length > 0
      ? hotel.images
      : [defaultHotelImage];
  const [mainImage, setMainImage] = useState(validImages[0]);

  return (
    <div className="hotel-card-compact">
      {/* Image Gallery */}
      <div className="hotel-gallery">
        <div className="main-image-container">
          <img
            src={
              mainImage.startsWith("http")
                ? mainImage
                : `${import.meta.env.VITE_APP_API_URL}${mainImage}`
            }
            alt={hotel.title || "Hotel"}
            className="main-image"
          />
        </div>
        <div className="thumbnail-container">
          {validImages.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              className={`thumbnail ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            >
              <img
                src={
                  img.startsWith("http")
                    ? img
                    : `${import.meta.env.VITE_APP_API_URL}${img}`
                }
                alt={`Thumbnail ${idx + 1}`}
                className="thumbnail-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hotel Content */}
      <div className="hotel-content">
        <div className="hotel-main-info">
          <h5 className="hotel-title">
            <Link to={`/hoteldetail/${hotel._id}`}>{hotel.title}</Link>
          </h5>

          <div className="hotel-location">
            <FaLocationDot className="location-icon" />
            <span>
              {hotel.location?.name || "Location Not Available"}
              {hotel.location?.pincode ? ` - ${hotel.location.pincode}` : ""}
            </span>
          </div>

          <div className="hotel-features">
            <div className="feature-group">
              <strong>Amenities: </strong>
              {hotel.amenities && hotel.amenities.length > 0 ? (
                <>
                  {hotel.amenities.slice(0, 2).map((a, idx) => (
                    <span key={idx} className="feature-badge amenity-badge">
                      {a}
                    </span>
                  ))}
                  {hotel.amenities.length > 2 && (
                    <span className="more-link">
                      ... <Link to={`/hoteldetail/${hotel._id}`}>More</Link>
                    </span>
                  )}
                </>
              ) : (
                "No amenities"
              )}
            </div>

            <div className="feature-group">
              <strong className="facility-title">
                <FaWifi className="wifi-icon" /> Facilities:
              </strong>
              {hotel.facilities && hotel.facilities.length > 0 ? (
                <>
                  {hotel.facilities.slice(0, 2).map((f, idx) => (
                    <span key={idx} className="feature-badge facility-badge">
                      {f}
                    </span>
                  ))}
                  {hotel.facilities.length > 2 && (
                    <span className="more-link">
                      ... <Link to={`/hoteldetail/${hotel._id}`}>More</Link>
                    </span>
                  )}
                </>
              ) : (
                "No facilities"
              )}
            </div>
          </div>

          <div className="cancellation-policy">
            <FaBan className="ban-icon" />
            <Link to={`/hoteldetail/${hotel._id}`} className="policy-link">
              Cancelation Policy
            </Link>
          </div>
        </div>

        <div className="hotel-pricing-section">
          <div className="hotel-rating">
            {[...Array(hotel.number_of_stars || 0)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </div>
          <div className="price-display">
            <span className="original-price">
              &#x20B9; {hotel.real_price ?? "N/A"}
            </span>
            <span className="discounted-price">
              &#x20B9; {hotel.discounted_price ?? "N/A"}
            </span>
            <p className="tax-info">+ &#x20B9; 0 taxes & fees per night</p>
          </div>
          <Link style={{ width: "100%" }} to={`/hoteldetail/${hotel._id}`}>
            <button type="button" className="details-btn">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    number_of_stars: PropTypes.number,
    location: PropTypes.shape({
      name: PropTypes.string,
      pincode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    amenities: PropTypes.arrayOf(PropTypes.string),
    facilities: PropTypes.arrayOf(PropTypes.string),
    real_price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    discounted_price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

HotelCard.defaultProps = {
  hotel: {
    _id: "",
    title: "Untitled Hotel",
    images: [],
    number_of_stars: 0,
    location: { name: "", pincode: "" },
    amenities: [],
    facilities: [],
    real_price: null,
    discounted_price: null,
  },
};

export default HotelCard;
