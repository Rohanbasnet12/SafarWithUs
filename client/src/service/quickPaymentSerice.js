import axios from "axios";

const API_URL = `${import.meta.env.VITE_APP_API_URL}/api/quick-payment`;

const createOrder = async (paymentData) => {
  const response = await axios.post(`${API_URL}/create-order`, paymentData);
  return response.data;
};

const verifyPayment = async (paymentData) => {
  const response = await axios.post(`${API_URL}/verify-payment`, paymentData);
  return response.data;
};

export { createOrder, verifyPayment };
