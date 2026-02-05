import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/HotelPage.css";
import { Helmet } from "react-helmet";
import HotelCard from "../HotelCard";

function HotelPage() {
  const [hotels, setHotels] = useState([]);
  const [allHotels, setAllHotels] = useState([]);
  const [filters, setFilters] = useState({
    stars: [],
    facilities: [],
    locations: [],
  });
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [seo, setSeo] = useState({
    metaTitle: "Ranthambore National Park | Hotel Page",
    metaDescription: "",
    metaKeywords: "",
    canonicalUrl: "",
    noIndex: false,
  });

  // Fetch SEO
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/api/pageseo/get-page-seo`,
          { params: { path: "/hotels" } }
        );
        if (res.data?.seo) setSeo(res.data.seo);
      } catch (error) {
        console.error("Failed to fetch SEO data", error);
      }
    };
    fetchSEO();
  }, []);

  // Fetch hotels
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/api/hotel/hotel-packages`
      );
      setAllHotels(response.data.hotels || []);
      setHotels(response.data.hotels || []);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (updated[filterType].includes(value)) {
        updated[filterType] = updated[filterType].filter((i) => i !== value);
      } else {
        updated[filterType] = [...updated[filterType], value];
      }
      return updated;
    });
  };

  const applyFilters = () => {
    const filtered = allHotels.filter((hotel) => {
      // ⭐ Star filter
      if (
        filters.stars.length > 0 &&
        !filters.stars.includes(Number(hotel.number_of_stars))
      ) {
        return false;
      }

      // 🏊 Facilities filter
      if (
        filters.facilities.length > 0 &&
        !filters.facilities.every((f) => hotel.facilities?.includes(f))
      ) {
        return false;
      }

      // 📍 Location filter
      if (
        filters.locations.length > 0 &&
        !filters.locations.includes(hotel.location?.name)
      ) {
        return false;
      }

      // 💰 Price range
      const price = Number(hotel.discounted_price) || 0;
      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }

      // 🔎 Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !hotel.title?.toLowerCase().includes(q) &&
          !hotel.location?.name?.toLowerCase().includes(q)
        ) {
          return false;
        }
      }

      return true;
    });

    setHotels(filtered);
    setShowFilters(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const clearAllFilters = () => {
    setFilters({ stars: [], facilities: [], locations: [] });
    setPriceRange([0, 40000]);
    setSearchQuery("");
    setHotels(allHotels);
  };

  return (
    <>
      <Helmet>
        <title>{seo.metaTitle}</title>
        {seo.metaDescription && (
          <meta name="description" content={seo.metaDescription} />
        )}
        {seo.metaKeywords && (
          <meta name="keywords" content={seo.metaKeywords} />
        )}
        {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
        {seo.noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>

      <Header />

      <div className="content-header">
        <h1 className="tour-packages__count">Hotels in Ranthambore</h1>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt
          in at libero laboriosam ea quis eum accusamus cum error debitis,
          minima accusantium, fuga, perspiciatis temporibus iusto ipsa ab animi
          blanditiis nulla. Id fuga voluptatum atque. Libero quam velit dolores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt
          in at libero laboriosam ea quis eum accusamus cum error debitis,
          minima accusantium, fuga, perspiciatis temporibus iusto ipsa ab animi
          blanditiis nulla. Id fuga voluptatum atque. Libero quam velit dolores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt
          in at libero laboriosam ea quis eum accusamus cum error debitis,
          minima accusantium, fuga, perspiciatis temporibus iusto ipsa ab animi
          blanditiis nulla. Id fuga voluptatum atque. Libero quam velit dolores?
        </p>
      </div>

      <section>
        <div className="container">
          <div className="row gap-sm-0 gap-md-3">
            {/* Filter Sidebar */}
            <div className="filter-sidebar">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                  className="btn btn-sm btn-outline-secondary d-md-none"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </button>
              </div>

              <div
                className={`filterBar ps-3 ${
                  showFilters ? "d-block" : "d-none d-md-block"
                }`}
              >
                {/* Search */}
                <h6>Filter</h6>
                <div className="mb-4">
                  <label htmlFor="searchHotels" className="form-label">
                    Search Hotels
                  </label>
                  <input
                    type="text"
                    id="searchHotels"
                    className="form-control"
                    placeholder="Search by name or location"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>

                {/* Price Range */}
                <hr />
                <div className="mb-3">
                  <label
                    htmlFor="priceRange"
                    className="form-label"
                    style={{ fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Price Range
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([
                        priceRange[0],
                        parseInt(e.target.value, 10),
                      ])
                    }
                    id="priceRange"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: 600,
                    }}
                  >
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                {/* Stars */}
                <hr />
                <div>
                  <h6>Hotel Star</h6>
                  {[5, 4, 3, 2, 1].map((starCount) => (
                    <p
                      key={`star-${starCount}`}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        id={`star-${starCount}`}
                        checked={filters.stars.includes(starCount)}
                        onChange={() => handleFilterChange("stars", starCount)}
                        className="me-2"
                      />
                      {Array.from({ length: starCount }).map((_, idx) => (
                        <span
                          key={idx}
                          className="star-icon-inline"
                          style={{
                            color: "orange",
                            fontSize: "1rem",
                            fontWeight: "bolder",
                            marginRight: "3px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </p>
                  ))}
                </div>

                {/* Facilities */}
                <hr />
                <div>
                  <h6>Facilities</h6>
                  <div
                    className="facilities-list"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    {[
                      "Swimming Pool",
                      "Power Backup",
                      "Restaurant",
                      "Room Service",
                      "House Keeping",
                      "Refrigerator",
                      "Indoor Games",
                      "Kids Play Area",
                      "Jungle Safari",
                      "Free Parking",
                      "Air Conditioning",
                      "Bonfire",
                    ].map((facility) => (
                      <p key={facility}>
                        <input
                          type="checkbox"
                          id={`facility-${facility}`}
                          checked={filters.facilities.includes(facility)}
                          onChange={() =>
                            handleFilterChange("facilities", facility)
                          }
                          className="me-2"
                        />
                        {facility}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <hr />
                <div>
                  <h6>Location</h6>
                  <div>
                    {["Chandrapur", "Nagpur", "Chimur"].map((location) => (
                      <p key={location}>
                        <input
                          type="checkbox"
                          id={`location-${location}`}
                          checked={filters.locations.includes(location)}
                          onChange={() =>
                            handleFilterChange("locations", location)
                          }
                          className="me-2"
                        />
                        {location}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <button className="btn hf-btn-enquiry" onClick={applyFilters}>
                    Apply Filters
                  </button>
                  <button
                    className="btn btn-clear"
                    style={{ border: "1.42px solid black" }}
                    onClick={clearAllFilters}
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* Hotel List */}
            <div className="hotel-listing-area">
              {hotels.length > 0 ? (
                hotels.map((hotel) => (
                  <HotelCard key={hotel._id} hotel={hotel} />
                ))
              ) : (
                <p className="no-hotels">No Hotels Found.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <ImportantLinks />
      <Footer />
    </>
  );
}

export default HotelPage;
