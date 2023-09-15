/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef<(() => void) | null>(null);
  const [isTVScriptLoaded, setIsTVScriptLoaded] = useState<boolean>(false);
  const { currency } = useParams();

  const coinName = currency;

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!isTVScriptLoaded) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-loading-script";
      script.src = "https://s3.tradingview.com/tv.js";
      script.type = "text/javascript";
      script.onload = () => {
        setIsTVScriptLoaded(true);
      };

      document.head.appendChild(script);
    }

    if (isTVScriptLoaded) {
      onLoadScriptRef.current?.();
    }

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      if (
        document.getElementById("tradingview_56581") &&
        "TradingView" in window
      ) {
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: `BITHUMB:${coinName}KRW`,
          interval: "240",
          timezone: "Asia/Seoul",
          theme: "white",
          style: "9",
          locale: "kr",
          enable_publishing: false,
          backgroundColor: "rgba(255, 255, 255, 1)",
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          studies: ["STD;RSI", "STD;Stochastic_RSI", "Volume@tv-basicstudies"],
          container_id: "tradingview_56581",
          refresh_interval: 3000, // 3초마다 업데이트 (밀리초 단위)
        });
      }
    }
  }, [isTVScriptLoaded, coinName]);

  return (
    <div className='tradingview-widget-container mx-[5%] mt-[2%] '>
      <div id='tradingview_56581' className='h-[700px] max-w-[1000px]' />
      <div className='tradingview-widget-copyright'>
        <a href='https://kr.tradingview.com/' rel='noopener nofollow' target='_blank'>
          Powered by TradingView
        </a>
      </div>
    </div>
  );
}
