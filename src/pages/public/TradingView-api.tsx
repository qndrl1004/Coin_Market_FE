/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// TradingViewWidget.jsx
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NowPriceAssets } from "./Now-price-assets";
import {
  faStar,
  faChartPie,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const price = <NowPriceAssets />;
let tvScriptLoadingPromise: Promise<void> | undefined;
export default function TradingViewWidget() {
  const onLoadScriptRef = useRef<(() => void) | null>(null);
  const { currency } = useParams();

  const coinName = currency;
  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = () => resolve();

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => {
      if ("TradingView" in window) {
        onLoadScriptRef.current?.();
      }
    });

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
  }, []);

  return (
    <main className="my-[140px] ">
      <div className="flex w-[60%] ">
        <section className="flex-1 mt-[2%] mx-[4%]">
          <div>
            <section className="flex">
              <div>
                <div>
                  <img src="" alt="" />
                  <span className="text-[15px]">{coinName} / KRW</span>
                </div>
                <div className="w-[280px]">
                  <span className="w-[100%] text-[34px] font-extrabold">
                    ₩{price}
                  </span>
                </div>
              </div>
              <div className="flex-1 w-[90px] ">
                <div className="flex items-center h-[100%]">
                  <div className="flex-1 text-center ">
                    <div className="cursor-pointer group">
                      <div className="mx-auto w-[25px] bg-slate-200	rounded-md overflow-hidden transition-all duration-500 group-hover:bg-yellow-400 group-hover:opacity-100 opacity-70">
                        <button>
                          <FontAwesomeIcon icon={faStar} size="sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <div>
                      <div className="cursor-pointer group">
                        <div className="mx-auto w-[25px] bg-slate-200	rounded-md overflow-hidden transition-all duration-500 group-hover:bg-yellow-400 group-hover:opacity-100 opacity-70">
                          <button>
                            <FontAwesomeIcon icon={faShareNodes} size="sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="cursor-pointer group">
                <div className="w-[100%] h-[30px] my-[4%] rounded-lg overflow-hidden">
                  <button className="bg-slate-200 w-[100%] h-[100%] transition-opacity duration-500 group-hover:opacity-100 opacity-60">
                    <div className="flex justify-between px-[6%]">
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faStar} size="sm" />
                        </span>
                        <span className="ml-[10px]">관심 목록 추가</span>
                      </div>
                      <div>+</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div className="w-[100%] h-[30px] my-[4%] rounded-lg overflow-hidden">
                  <button className="bg-slate-200 w-[100%] h-[100%] transition-opacity duration-500 group-hover:opacity-100 opacity-60">
                    <div className="flex justify-between px-[6%]">
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faChartPie} size="sm" />
                        </span>
                        <span className="ml-[10px]">포트폴리오에서 추가</span>
                      </div>
                      <div>+</div>
                    </div>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="border-solid border-s-2 border-grey-200">
          <div className="tradingview-widget-container mx-[5%] mt-[2%] ">
            <div id="tradingview_56581" className="h-[700px] w-[900px]" />
            <div className="tradingview-widget-copyright">
              <a
                href="https://kr.tradingview.com/"
                rel="noopener nofollow"
                target="_blank"
              ></a>
            </div>
          </div>
          <div />
        </section>
      </div>
    </main>
  );
}
