/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const NowPriceAssets: React.FC = () => {
  const [responseData, setResponseData] = useState<any | null>(null);
  const [price, setPrice] = useState<string | null>(null);

  const { currency } = useParams();

  const updateInterval = 1000;

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://api.bithumb.com/public/ticker/${currency}_KRW`,
        headers: { accept: "application/json" },
      };

      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, updateInterval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (responseData) {
      setPrice(responseData.data.closing_price);
    }
  }, [responseData]);

  return price;
};
