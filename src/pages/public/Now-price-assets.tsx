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
import ChattingWidget from '../../api/Chat-api';
import { GetCoinPrice } from '../../api/Get-coin-price-api';
import TradingViewWidget from '../../api/TradingView-api';

const price = <GetCoinPrice />;

export default function NowPriceAssets() {
  const { currency } = useParams();
  const coinName = currency;


  return (
    <main className='mt-[140px] mb-[20px] '>
    <div className='w-screen flex'>
      <section className='flex-1 max-w-[20%] mt-[2%] mx-[4%]'>
        <div>
          <section className='flex'>
            <div>
              <div>
                <img src="" alt="" />
                  <span className='text-[15px]'>{coinName} / KRW</span>
              </div>
              <div className='w-[280px]'>
                <span className='w-[100%] text-[34px] font-extrabold'>
                  ₩ { price }
                </span>
              </div>
            </div>
            <div className='flex-1 w-[90px] '>   
              <div className='flex items-center h-[100%]'>
                <div className=' flex-1 text-center'>
                  <div className='group cursor-pointer'>
                    <div className='mx-auto w-[25px] bg-slate-200	rounded-md overflow-hidden transition-all duration-500 group-hover:bg-yellow-400 group-hover:opacity-100 opacity-70'>
                      <button><FontAwesomeIcon icon={faStar} size="sm" /></button>
                    </div>
                  </div>
                  
                </div>
                <div className='flex-1 text-center'>
                  <div>
                    <div className='group cursor-pointer'>
                      <div className='mx-auto w-[25px] bg-slate-200	rounded-md overflow-hidden transition-all duration-500 group-hover:bg-yellow-400 group-hover:opacity-100 opacity-70'>
                        <button><FontAwesomeIcon icon={faShareNodes} size="sm"/></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </section>
          <section>
            <div className='group cursor-pointer'>
              <div className='w-[100%] h-[30px] my-[4%] rounded-lg overflow-hidden'>
                <button className='bg-slate-200 w-[100%] h-[100%] transition-opacity duration-500 group-hover:opacity-100 opacity-60'>
                  <div className='flex justify-between px-[6%]'>
                    <div>
                      <span ><FontAwesomeIcon icon={faStar} size="sm" /></span>
                      <span className='ml-[10px]'>관심 목록 추가</span>
                    </div>
                    <div>
                          +
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className='group cursor-pointer'>
              <div className='w-[100%] h-[30px] my-[4%] rounded-lg overflow-hidden'>
                <button className='bg-slate-200 w-[100%] h-[100%] transition-opacity duration-500 group-hover:opacity-100 opacity-60'>
                  <div className='flex justify-between px-[6%]'>
                    <div>
                      <span ><FontAwesomeIcon icon={faChartPie} size="sm" /></span>
                      <span className='ml-[10px]'>포트폴리오에서 추가</span>
                    </div>
                    <div>
                          +
                    </div>
                  </div>
                </button>
              </div>
              </div>
          </section>
          </div>
          <ChattingWidget />
      </section>

        <section className='flex-1 border-s-2 border-solid border-grey-200'>
        <TradingViewWidget/>
      </section>
      </div> 
    </main>
  );
}