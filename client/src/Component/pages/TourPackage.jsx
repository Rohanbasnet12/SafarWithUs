import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ImportantLinks from "../ImportantLinks";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/TourPackage.css";
import { Helmet } from "react-helmet";
import { message } from "antd";
import { createOrder, verifyPayment } from "../../service/quickPaymentSerice";

import fallbackBanner from "../../assets/images/tour-Packages2.jpg";

function TourPackage() {
  const [packages, setPackages] = useState([]);
  const [seo, setSeo] = useState({
    metaTitle: "Tour Packages | Your Site",
    metaDescription: "",
    metaKeywords: "",
    canonicalUrl: "",
    noIndex: false,
  });

  // ✅ Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
  });

  const navigate = useNavigate();

  // ✅ Fetch SEO
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/api/pageseo/get-page-seo`,
          { params: { path: "/tourpackage" } }
        );
        if (res.data?.seo) setSeo(res.data.seo);
      } catch (error) {
        console.error("Failed to fetch SEO data", error);
      }
    };
    fetchSEO();
  }, []);

  // ✅ Fetch Tour Packages
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
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

  // ✅ Handle input
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Handle Payment
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
        message.error("Please enter a valid amount.");
        return;
      }

      const orderData = await createOrder(formData);
      const { order, key_id, bookingId } = orderData;

      const options = {
        key: key_id,
        amount: order.amount,
        currency: "INR",
        name: "Quick Tour Payment",
        description: "Payment for tour package",
        order_id: order.id,
        handler: async (response) => {
          try {
            const verifyRes = await verifyPayment({
              order_id: response.razorpay_order_id,
              booking_id: bookingId,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });

            if (verifyRes.success) {
              message.success("Payment successful!");
              navigate(
                `/payment-success?booking_id=${bookingId}&payment_id=${response.razorpay_payment_id}`
              );
            } else {
              message.error("Payment verification failed.");
            }
          } catch {
            message.error("Payment verification error.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: "#1e88e5",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      message.error("Payment failed.");
    }
  };

  return (
    <>
      {/* ✅ Dynamic SEO */}
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
        <h1 className="tour-packages__count">Ranthambore Tour Packages</h1>
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

      {/* ✅ Split Layout */}
      <div className="tour-layout">
        {/* Right Panel (scrollable) */}
        <main className="tour-layout__right">
          <div className="tour-packages__grid">
            {packages.length > 0 ? (
              packages.map((pkg, index) => (
                <div
                  key={pkg._id}
                  className="tour-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="tour-card__image-wrapper">
                    <img
                      src={
                        pkg.images && pkg.images.length > 0
                          ? `${
                              import.meta.env.VITE_APP_API_URL
                            }/uploads/packages/${pkg.images[0]}`
                          : fallbackBanner
                      }
                      alt={pkg.title}
                      className="tour-card__image"
                    />
                  </div>

                  <div className="tour-card__content">
                    <h3 className="tour-card__title">{pkg.title}</h3>
                    <div className="tour-card__duration">
                      <span>{pkg.duration || "1 Night/2 Days"}</span>
                    </div>
                    <p className="tour-card__description">
                      {pkg.description.length > 150
                        ? pkg.description.slice(0, 200) + "..."
                        : pkg.description}
                    </p>
                    <Link
                      to={`/tourpackagedetail/${pkg._id}`}
                      className="tour-card__link"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="tour-packages__empty">
                No tour packages available at the moment.
              </p>
            )}
          </div>
        </main>

        {/* ✅ Left Panel (Payment Form) */}
        <aside className="tour-layout__left">
          <form className="tour-aside-form" onSubmit={handlePayment}>
            <h3 className="form-title">Enquiry</h3>

            <label>
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </label>

            {/* Remarks Field */}
            <label>
              Remarks
              <textarea
                rows="4"
                name="remark"
                placeholder="Any remarks"
                value={formData.remark}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Submit</button>
          </form>
        </aside>
      </div>

      <ImportantLinks />
      <Footer />
    </>
  );
}

export default TourPackage;
