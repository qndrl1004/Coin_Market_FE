import React, { useEffect, useState } from "react";
import axios from "axios";
import querystring from "querystring";

export const GetDepositWalletAddress: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [responseData, setResponseData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedParams = querystring.stringify({ currency: 'BTC' });

        const options = {
          method: 'POST',
          url: 'https://api.bithumb.com/info/wallet_address',
          headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
            'Api-Key': '사용자 Access Key',
            'Api-Nonce': '현재시각(ms)',
            'Api-Sign': '상세 가이드 참고'
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
