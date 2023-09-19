import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faChevronRight, faCirclePlus, faHandPointer, faWallet, faWonSign } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const PortFolio = () => {

  const [isLarge, setIsLarge] = useState(false);
  const [iconColor, setIconColor] = useState('#d1d5db')

  const handleImageClick = () => {
    setIsLarge(!isLarge);
    setIconColor(isLarge ? "#d1d5db" : "white")
  };

  return (
    <main className='mt-[130px]'>
      <div className="flex justify-center">
        <div className="md:w-[80%] w-full md:h-[500px] h-full">
          <div className="hidden md:block md:pb-4 md:pt-8 text-glay-500 text-[8px]">
            <span className="text-black ">
              <a href="#" className="text-gray-400">홈</a>
              <FontAwesomeIcon icon={faChevronRight} className="px-1 text-gray-400" />
              포트폴리오
            </span>
          </div>
          <div className="grid grid-rows-3 grid-cols-6 md:pl-0 pl-2 md:mt-0 mt-4 h-[100%]">
            <div className="md:row-span-3 row-start-1 col-start-1 col-end-5 md:col-start-1 md:col-end-1">
              <div className={`flex items-center md:h-[10%] md:w-[90%] w-[100%] rounded-lg cursor-pointer`} style={{ background: isLarge ? '#d1d5db' : 'white' }} onClick={handleImageClick}>
                <div className="p-2">
                  <div className={`flex justify-center items-center h-5 w-5 rounded-full`} style={{ background: isLarge ? 'blue' : '#d1d5db', transform: isLarge ? 'scale(1.5)' : 'scale(1)' }}>
                    <FontAwesomeIcon className="text-center" icon={faBriefcase} style={{ fontSize: "10px", color: `${iconColor}` }} />
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-[13px]">제목</h2>
                  <span className="text-[10px] text-gray-500">
                    <FontAwesomeIcon icon={faWonSign} />
                    <span className="text-[10px] ">0</span>
                  </span>
                </div>
              </div>
              <span className="hidden md:flex justify-between items-center w-[90%] pt-3">
                <FontAwesomeIcon className="pl-2" icon={faCirclePlus} style={{ fontSize: "12px" }} />
                <p className="font-bold w-[80%] text-[10px]">포트폴리오 만들기</p>
              </span>
            </div>
            <div className="col-start-5 md:col-start-2 col-end-7 md:h-[100%] text-center flex justify-between">
              <div className="block md:hidden"></div>
              <div className="hidden md:block">
                <p className="text-[2px] text-gray-500">
                  현재 잔액
                  <span className="text-[10px]">
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                </p>
                <span className="text-[25px] font-medium ">
                  <FontAwesomeIcon icon={faWonSign} />
                  <span className="text-[30px]">0</span>
                </span>
                <p className="text-[10px] text-green-500">
                  + <FontAwesomeIcon icon={faWonSign} /><span className="pr-1 text-[12px]">0</span>
                  <span className="bg-gray-200 rounded px-1 text-gray-500">24시간</span>
                </p>
              </div>
              
              <div className="md:pt-4 pt-2 pr-2">
                <button className="bg-blue-500 hover:bg-blue-700 w-25 h-8 rounded-lg">
                  <p className="text-white text-[3px] px-3">+Create portfolio</p>
                </button>
              </div>
            </div>
            <p className="row-start-2 col-start-1 md:col-start-2 col-end-7 h-[100px] text-center  md:self-end self-start pb-5">첫번째 포트폴리오를 시작합니다.</p>
            <div className="md:pl-2 row-start-3 col-start-1 md:col-start-2 col-end-7 md:flex md:justify-between">
              <div className="md:w-[48%] md:h-[30%] md:p-0 p-2">
                <button className="flex rounded w-[100%] h-[80px] shadow-md">
                  <div className="md:pt-4 pt-[30px] w-[20%] flex justify-center " >
                    <div className="text-center rounded-full h-6 w-6 bg-gray-200">
                      <FontAwesomeIcon icon={faWallet} style={{ color: 'blue', fontSize: '14px' }} />
                    </div>
                  </div>
                  <div className="w-[100%] h-[100%] text-left pt-5">
                    <h2 className="font-medium text-[12px] flex items-center">지갑연결
                      <p className="rounded-full text-white bg-blue-600 w-[12%] h-4 text-[3px] text-center inline-block ml-2">Beta</p></h2>
                    <p className="text-[3px] text-gray-500 pb-[8px]">지갑 주소를 입력하기만 하면 바로 동기화됩니다.</p>
                  </div>
                  <div className="pl-[10%] h-[100%] w-[35%] flex items-center">
                    <div className="pr-4 text-center">
                      <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '15px' }} />
                    </div>
                  </div>
                </button>
              </div>
              <div className="md:pr-2 md:w-[48%] md:h-[30%] md:p-0 p-2">
                <button className="flex rounded w-[100%] h-[80px] shadow-md">
                  <div className="md:pt-4 pt-[30px] w-[20%] flex justify-center " >
                    <div className="text-center rounded-full h-6 w-6 bg-green-100">
                      <FontAwesomeIcon icon={faHandPointer} style={{ color: '#0aa80a', fontSize: '12px' }} />
                    </div>
                  </div>
                  <div className="w-[100%] text-left pt-5">
                    <h2 className="font-medium text-[12px] flex items-center">수동으로 거래추가</h2>
                    <p className="text-[3px] text-gray-500 pb-[8px]">포트폴리오를 추적하기 위해 원하는 속도로 모든 거래세부 정보를 입력하십시오.</p>
                  </div>
                  <div className="pl-[10%] h-[100%] w-[35%] flex items-center">
                    <div className="pr-4 text-center">
                      <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '15px' }} />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
};
