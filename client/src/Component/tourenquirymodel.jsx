import { useState, useEffect } from "react";
import axios from "axios";

const TourEnquiryModal = ({ show, handleClose, hotel, packageId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    hotelId: hotel?._id || "",
    packageId: packageId || "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, hotelId: hotel?._id || "" }));
  }, [hotel]);

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/api/tour/tour-enquiry`,
        formData
      );
      if (data.success) {
        setSuccessMessage("Your enquiry has been submitted successfully!");
        setTimeout(() => {
          setSuccessMessage("");
          handleClose();
        }, 2000);
      }
    } catch (err) {
      setSuccessMessage("Failed to send enquiry. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg animate-fadeIn relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Enquire: {hotel?.title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {["name", "email", "phone", "country"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize mb-1">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                required
                onChange={handleChange}
                className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="3"
              required
              onChange={handleChange}
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Send Enquiry"}
          </button>

          {successMessage && (
            <p className="text-center text-green-600 text-sm mt-2">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default TourEnquiryModal;
