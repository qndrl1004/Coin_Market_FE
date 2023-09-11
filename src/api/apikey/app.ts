import { XCoinAPI } from "./XCoinAPI";

const api_key: string = "api_key";
const api_secret: string = "api_secret";

const xcoinAPI = new XCoinAPI(api_key, api_secret);
const rgParams: { order_currency: string; payment_currency: string } = {
  order_currency: "BTC",
  payment_currency: "KRW",
};

const main = async (): Promise<void> => {
  const res = await xcoinAPI.xcoinApiCall("/info/wallet_address", rgParams);
  console.log(res.body);
};

main();
