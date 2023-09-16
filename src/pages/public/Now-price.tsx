/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BithumbResponse, TradingChartApi } from "../../api/TradingChart-api";

export const NowPrice: React.FC = () => {
  const [responseData, setResponseData] = useState<BithumbResponse | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onDataLoaded = (data: BithumbResponse) => {
    setResponseData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm.trim() !== "") {
          const response = await axios.get(
            `http://localhost:5173/search?term=${searchTerm}`
          );
          const data = response.data;
          onDataLoaded(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

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
      <TradingChartApi onDataLoaded={onDataLoaded} />
      <div className="md:mt-36">
        <table className="w-2/3">
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
            {filteredCoins.map((currency: any) => {
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
                    <Link to={`/trading-view/${currency}`}>
                      ₩{Number(item.opening_price).toLocaleString()}
                    </Link>
                  </td>
                  <td className="flex-1 py-2">
                    <Link to={`/trading-view/${currency}`}>
                      {Math.floor(item.units_traded).toLocaleString()}
                    </Link>
                  </td>
                  <td className="flex-1 py-2">
                    <Link to={`/trading-view/${currency}`}>
                      ₩{Math.floor(item.acc_trade_value).toLocaleString()}
                    </Link>
                  </td>
                  <td className="flex-1 py-2">
                    <Link to={`/trading-view/${currency}`}>
                      ₩{Number(item.prev_closing_price).toLocaleString()}
                    </Link>
                  </td>
                  <td className="flex-1 py-2">
                    <Link to={`/trading-view/${currency}`}>
                      {item.fluctate_rate_24H}%
                    </Link>
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
