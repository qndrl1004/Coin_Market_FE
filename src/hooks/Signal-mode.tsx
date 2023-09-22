/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

interface TradingData {
  currency: string;
  volume: number;
  amount: number;
}

export const useSignalMode = (data: Record<string, any>, currency: string) => {
  const [tradingData, setTradingData] = useState<TradingData | null>(null);

  useEffect(() => {
    if (data && currency) {
      const tradingItem = data[currency];
      if (tradingItem) {
        const newData: TradingData = {
          currency,
          volume: tradingItem.units_traded,
          amount: tradingItem.acc_trade_value,
        };
        setTradingData(newData);
      } else {
        setTradingData(null);
      }
    }
  }, [data, currency]);

  return tradingData;
};
