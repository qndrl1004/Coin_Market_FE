/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  }, []);

  const renderTable = (data: BithumbResponse | null) => {
    if (!data) return null;

    const tableData = Object.entries(data.data).map(([key, value]) => ({
      currency: key,
      ...value,
    }));

    return (
      <table className="w-2/3 ml-4 mt-28">
        <thead className="text-center">
          <tr className="space-x-4 bg-gray-200">
            <th className="flex-1 py-2">즐겨찾기</th>
            <th className="flex-1 py-2">가상코인</th>
            <th className="flex-1 py-2">시가기준</th>
            <th className="flex-1 py-2">거래량</th>
            <th className="flex-1 py-2">거래금액</th>
            <th className="flex-1 py-2">전일종가</th>
            <th className="flex-1 py-2">변동률(24h)</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tableData.map((item) => {
            if (item.currency === "date") return null;
            return (
              <tr key={item.currency} className="space-x-4 bg-white">
                <td className="flex-1 py-2">
                  <FontAwesomeIcon icon={faStar} className="" />
                </td>
                <td className="flex-1 py-2">{item.currency}</td>
                <td className="flex-1 py-2">
                  {Number(item.opening_price).toLocaleString()}원
                </td>
                <td className="flex-1 py-2">{Math.floor(item.units_traded)}</td>
                <td className="flex-1 py-2">
                  {Math.floor(item.acc_trade_value).toLocaleString()}원
                </td>
                <td className="flex-1 py-2">
                  {Number(item.prev_closing_price).toLocaleString()}원
                </td>
                <td className="flex-1 py-2">{item.fluctate_rate_24H}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Bithumb API Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {responseData && renderTable(responseData)}
    </div>
  );
};
