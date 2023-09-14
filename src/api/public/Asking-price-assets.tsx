import React, { useEffect, useState } from "react";
import axios from "axios";

export const AskingPriceAssets: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [responseData, setResponseData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.bithumb.com/public/orderbook/BTC_KRW",
          headers: { accept: "application/json" },
        };

        const response = await axios.request(options);
        setResponseData(response.data);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error?.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="">
        <h1 className="">Bithumb API Data</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {responseData && (
          <pre>
            <code>{JSON.stringify(responseData, null, 2)}</code>
          </pre>
        )}
      </div>
    </main>
  );
};
