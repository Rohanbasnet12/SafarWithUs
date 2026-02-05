import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { message } from "antd";
import { createOrder, verifyPayment } from "../../service/quickPaymentSerice";
import { useNavigate } from "react-router-dom";
import "../../styles/Payment.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import background from "../../assets/images/navegaonBanner1.jpg";

function PaymentPage() {
  const [seo, setSeo] = useState({
    metaTitle: "About Us | Your Site",
    metaDescription: "",
    metaKeywords: "",
    canonicalUrl: "",
    noIndex: false,
  });

  useEffect(() => {
    const fetchSEO = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/api/pageseo/get-page-seo`,
          {
            params: { path: "/paymentpage" },
          }
        );

        if (res.data?.seo) setSeo(res.data.seo);
      } catch (error) {
        console.error("Failed to fetch SEO data", error);
      }
    };

    fetchSEO();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    zip: "",
    amount: "",
    remark: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePayment = async (e) => {
    e.preventDefault(); // stop form refresh

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
        name: "Tadoba Quick Payment",
        description: "Payment for services",
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

      <div className="content-header mt-3">
        <h1 className="tour-packages__count text-center">
          Payment Information
        </h1>
      </div>

      <section id="paymentSection">
        <div id="paymentSection-content-overlay">
          <div className="content-wrapper">
            <div className="content-right">
              <form className="payment-form" onSubmit={handlePayment}>
                <div className="form-row">
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
                </div>

                <div className="form-row">
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
                  <label>
                    City
                    <input
                      type="text"
                      name="city"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Zip Code
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Amount (INR)
                    <input
                      type="number"
                      name="amount"
                      placeholder="Enter amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <label>
                  Remark
                  <textarea
                    rows="4"
                    cols="50"
                    name="remark"
                    placeholder="Any remarks"
                    value={formData.remark}
                    onChange={handleChange}
                  />
                </label>

                <button type="submit">Reserve Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PaymentPage;
