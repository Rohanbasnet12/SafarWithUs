import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Banner.css";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/herosection/get-banner`);
        setBanners(response.data.banner?.images || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setIsLoading(false);
      }
    };
    fetchBanners();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    arrows: true,
    adaptiveHeight: false
  };

  if (isLoading) {
    return <div className="bannersection">Loading...</div>;
  }

  if (banners.length === 0) {
    return <div className="bannersection">No banners available</div>;
  }

  return (
    <div className="bannersection">
      <Slider {...settings}>
        {banners.map((img, index) => (
          <div key={index} className="slick-slide">
            <img 
              src={`${import.meta.env.VITE_APP_API_URL}${img}`} 
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;