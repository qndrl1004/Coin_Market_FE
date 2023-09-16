/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// TradingViewWidget.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChartPie,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ChattingWidget from "../../api/Chat-api";
import { GetCoinPrice } from "../../api/GetCoinPrice-api";
import TradingViewWidget from "../../api/TradingView-api";

const price = <GetCoinPrice />;

export default function NowPriceAssets() {
  const { currency } = useParams();
  const coinName = currency;

  return (
    <main className="mt-[140px] mb-[20px] ">
      <div className="w-screen mt-[2%] md:flex">
        {/* 왼쪽창 */}
        <section className="w-[100%] my-[30px] md:max-w-[20%] object-scale-down">
          <div className=" mx-[4%]">
            <div className="">
              <div className="flex justify-between">
                <div>
                  <div>
                    <span className="block text-[15px]">{coinName} / KRW</span>
                  </div>
                  <div className="w-[190px]">
                    <span className="block w-[.8wh] text-[30px] font-extrabold">
                      ₩{price}
                    </span>
                  </div>
                </div>

                <div className="flex mt-[20px]">
                  <div className=" flex-1 text-center mr-[7px]">
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
            </div>
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
          <div className="hidden md:block">
            <ChattingWidget />
          </div>
        </section>

        {/* 오른쪽창 */}
        <section className="flex-1 border-solid md:border-s-2 border-grey-200">
          <TradingViewWidget />
        </section>
      </div>
    </main>
  );
}
