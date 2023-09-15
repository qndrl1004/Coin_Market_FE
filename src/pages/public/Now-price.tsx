/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

interface BithumbResponse {
  status: string;
  data: {
    [key: string]: {
      opening_price: number;
      closing_price: number;
      max_price: number;
      min_price: number;
      units_traded: number;
      acc_trade_value: number;
      prev_closing_price: number;
      fluctate_rate_24H: number;
    };
  };
}

export const NowPrice: React.FC = () => {
  const [responseData, setResponseData] = useState<BithumbResponse | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.bithumb.com/public/ticker/ALL_KRW",
          headers: { accept: "application/json" },
        };

        const response = await axios.request<BithumbResponse>(options);
        setResponseData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error?.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const filterCoins = (data: BithumbResponse | null, searchTerm: string) => {
    if (!data) return [];
    if (!searchTerm) return Object.keys(data.data);

    return Object.keys(data.data).filter((key) =>
      key.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCoins = filterCoins(responseData, searchTerm);

  return (
    <div>
      <Header onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="ml-4 mt-28">
        <table className="w-2/3 ">
          <thead className="text-center">
            <tr className="space-x-4 bg-gray-200">
              <th className="flex-1 py-2">즐겨찾기</th>
              <th className="flex-1 py-2">가상코인</th>
              <th className="flex-1 py-2">현재가</th>
              <th className="flex-1 py-2">거래량</th>
              <th className="flex-1 py-2">거래금액</th>
              <th className="flex-1 py-2">전일종가(24h)</th>
              <th className="flex-1 py-2">변동률(24h)</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredCoins.map((currency) => {
              const item = responseData?.data[currency];
              if (!item) return null;

              return (
                <tr
                  key={currency}
                  className="cursor-pointer hover:bg-[#efda7a]"
                >
                  <td className="flex-1 py-2">
                    <FontAwesomeIcon icon={faStar} />
                  </td>
                  <td className="flex-1 py-2">
                    <Link to={`/trading-view/${currency}`}>{currency}</Link>
                  </td>
                  <td className="flex-1 py-2">
                    <a href="#">
                      {Number(item.opening_price).toLocaleString()}원
                    </a>
                  </td>
                  <td className="flex-1 py-2">
                    <a href="#">{Math.floor(item.units_traded)}</a>
                  </td>
                  <td className="flex-1 py-2">
                    <a href="#">
                      {Math.floor(item.acc_trade_value).toLocaleString()}원
                    </a>
                  </td>
                  <td className="flex-1 py-2">
                    <a href="#">
                      {Number(item.prev_closing_price).toLocaleString()}원
                    </a>
                  </td>
                  <td className="flex-1 py-2">
                    <a href="#">{item.fluctate_rate_24H}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
