import { useState, useEffect } from "react";
import axios from "axios";

// Base URL Define Karo
const BASE_URL = "http://localhost:3000/api/v1/user"; // Apna backend base URL daalo

// Axios instance create karo
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Custom Hook (GET & POST Support Karta Hai)
export const useApi = (url, method = "GET", postData = null, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async (body = postData) => {
    console.log("body: ", body);
    setLoading(true);
    setError(null);

    try {
      const config = {
        headers: body instanceof FormData ? {} : { "Content-Type": "application/json" },
      };

      const response =
        method === "GET"
          ? await api.get(url, config)
          : await api.post(url, body, config);

      setData(response.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [url, method]);

  return { data, loading, error, refetch: fetchData };
};