import React, { useState, useEffect } from "react";
import axios from "axios";

export const NowPriceAssets: React.FC = () => {
  const [responseData, setResponseData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);

  // 데이터를 주기적으로 업데이트할 시간 간격 (밀리초 단위)
  const updateInterval = 1000; // 1초마다 업데이트

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://api.bithumb.com/public/ticker/BTC_KRW",
        headers: { accept: "application/json" },
      };

      const response = await axios.request(options);
      setResponseData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 페이지가 로드될 때 한 번 데이터 가져오기
    fetchData();

    // 주기적으로 데이터 업데이트
    const intervalId = setInterval(fetchData, updateInterval);

    // 컴포넌트가 언마운트될 때 clearInterval로 인터벌 제거
    return () => clearInterval(intervalId);
  }, []);

  // responseData 업데이트 후에 price 값을 설정
  useEffect(() => {
    if (responseData) {
      setPrice(responseData.data.closing_price);
    }
  }, [responseData]);

  return price
};


