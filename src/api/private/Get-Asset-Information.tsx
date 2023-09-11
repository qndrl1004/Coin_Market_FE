import React, { useEffect, useState } from "react";
import axios from "axios";
import querystring from "querystring";

export const GetAssetInformation: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [responseData, setResponseData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedParams = querystring.stringify({ currency: "BTC" });

        const options = {
          method: "POST",
          url: "https://api.bithumb.com/info/balance",
          headers: {
            accept: "application/json",
            "content-type": "application/x-www-form-urlencoded",
            "Api-Key": "227cd1454c45e0c1fd1462b7c0a9a452",
            "Api-Nonce": "169416222316",
            "Api-Sign":
              "pm+5hnnV5OpBKfUruv6YFszfch54ahwqIjQhkKi4sBVaUXipi9I+yjf9C2HoqZF/WsQ4FOIPRCE21X9itLB5BA==",
          },
          data: encodedParams,
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
    <div>
      <h1>Bithumb API Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {responseData && (
        <pre>
          <code>{JSON.stringify(responseData, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};
