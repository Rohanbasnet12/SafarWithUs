import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import tadobaHotel from "../assets/images/tadoba1.jpeg";
import "../styles/TourPackagesHome.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TourPackages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/api/tourpackage`
      );
      setPackages(response.data.packages);
    } catch (error) {
      console.error("Error fetching tour packages:", error);
    }
  };

  return (
    <section id="tour-packages-section">
      <div className="container">
        <h2 className="tour-packages-title">
          Ranthambore National Park Tour Packages
        </h2>

        {packages.length > 0 ? (
          <div className="swiper-wrapper-container">
            {/* Custom Navigation Buttons - Outside swiper container */}
            <button className="custom-swiper-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="my-swiper-container">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={{
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".my-swiper-pagination",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                }}
                className="my-swiper"
              >
                {packages.map((pkg) => (
                  <SwiperSlide key={pkg._id}>
                    <div className="my-package-card">
                      <div className="my-package-image">
                        <img
                          src={
                            pkg.images?.length > 0
                              ? `${
                                  import.meta.env.VITE_APP_API_URL
                                }/uploads/packages/${pkg.images[0]}`
                              : tadobaHotel
                          }
                          alt={pkg.title}
                        />
                      </div>
                      <div className="my-package-details">
                        <h3 className="my-package-name">{pkg.title}</h3>
                        <p className="my-package-desc">
                          {pkg.description.length > 120
                            ? `${pkg.description.slice(0, 120)}...`
                            : pkg.description}
                        </p>
                        <div className="my-package-footer">
                          <p className="my-package-duration">{pkg.duration}</p>
                          <Link
                            to={`/tourpackagedetail/${pkg._id}`}
                            className="my-package-link"
                          >
                            More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination */}
              <div className="my-swiper-pagination"></div>
            </div>

            {/* Custom Navigation Buttons - Outside swiper container */}
            <button className="custom-swiper-next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : (
          <p className="no-packages-msg">No packages available.</p>
        )}
      </div>
    </section>
  );
}

export default TourPackages;
