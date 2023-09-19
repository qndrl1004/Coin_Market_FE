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
import TradingViewWidget from '../../api/TradingView-api';
import { GetCoinPrice } from '../../api/GetCoinPrice-api';

const price = <GetCoinPrice />;

export default function NowPriceAssets() {
  const { currency } = useParams();
  const coinName = currency;

  return (
    <main className='mt-[140px] overflow-x-hidden md:min-h-[1100px]'>
      <div className='w-screen md:flex overflow-x-hidden'>
        {/* 왼쪽창 */}
        <section className='min-w-[300px] p-[20px] border-b-2 border-solid border-grey-200 object-scale-down flex flex-col md:w-[400px] md:border-none '>
        <div className='w-[100%] m-0 md:mb-[20px]'>
          <div className=''>
            <div className='flex justify-between'>
              <div>
                <div>
                  <title className='block text-[15px]'>{coinName} / KRW</title>
                </div>
                <div className='w-[230px]'>
                  <span className='block w-[.8wh] text-[30px] font-extrabold'>
                      ₩ { price }
                  </span>
                </div>
              </div>
                  
              <div className='flex mt-[20px]m'>
                <div className=' flex-1 text-center mr-[7px]'>
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
            
          </div>
          <section className='max-w-[400px]'>
            <div className='group cursor-pointer '>
                <div className='w-[100%] h-[30px] my-[4%] rounded-lg overflow-hidden'>
                  <button className='bg-slate-200 w-[100%] h-[100%] transition-opacity duration-500 group-hover:opacity-100 opacity-60'>
                    <div className='flex justify-between px-[6%]'>
                    <div>
                      <span ><FontAwesomeIcon icon={faStar} size="sm" /></span>
                      <label className='ml-[10px]'>관심 목록 추가</label>
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
                      <label className='ml-[10px]'>포트폴리오에서 추가</label>
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
          <div className='hidden md:block'>
          <ChattingWidget />
          </div>
      </section>

        {/* 오른쪽창 */}
        <section className='flex-1 md:border-s-2 border-solid border-grey-200'>
        <TradingViewWidget/>
        </section>
        <section className='p-[20px] border-t-2 border-solid border-grey-200 md:hidden '>
        <ChattingWidget />
        </section>
      </div> 
    </main>
  );
}