import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDarkMode } from '../../context/Dark-mode';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface BookModalProps {
  isNames: string;
  isOpen: boolean;
  onClose: () => void;
}

const page1 = [(
  <>
    <div className={`mb-[1vh] text-center font-semibold text-xl`}>지갑 발금방법</div>
    <div className='flex-1 bg-gray-300 rounded text-black overflow-auto'>
      <div>
        <p className=''>지갑 주소 발급 방법</p>

        <p>아래 사이트에서 가입 후에 지갑을 발급받아주세요.</p>
        <p><a href="https://www.bithumb.com">빗썸</a></p>
        <img src="https://content.bithumb.com/admin_img/202208221655281812911908.png" alt="" />
        <img src="https://content.bithumb.com/admin_img/20220822165643773955666.png" alt="" />
        <img src="https://content.bithumb.com/admin_img/202208221656581131886458.png" alt="" />
        <img src="https://content.bithumb.com/admin_img/202208221658491492664900.png" alt="" />
        
        <p>지갑 주소 생성하셨다면 다음을 눌러주세요</p>

      </div>
    </div>
  </>

), (
  <div className='flex-1 bg-gray-300 rounded text-black'>
    <div>
      <p>지갑 연결 방법</p>
    </div>
  </div>
), '지갑3 내용'];
const page2 = ['수동1 내용', '수동2 내용', '수동3 내용']

export const BookModal: React.FC<BookModalProps> = ({ isNames, isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const selectedArray =
    isNames === "page1"
      ? page1 : isNames === "page2" ? page2 : [];
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const {darkMode} = useDarkMode();

  const nextPage = () => {
    if (currentPage < selectedArray.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCloseModal = () => {
    onClose();
    setCurrentPage(0);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };



  return isOpen ? (
    <div className=" fixed inset-0 flex items-center justify-center z-50" style={{backgroundColor: isOpen ? "rgba(0, 0, 0, 0.6)" : "transparent"}} onClick={handleBackdropClick}>
      <div className={`${darkMode ? "bg-black text-white shadow-md shadow-white" : "bg-white text-black"} flex flex-col justify-between p-4 rounded shadow-lg w-[80%] h-[80%]`}>
        <div className="text-right">
          <button className={`${darkMode ? "text-white" : "text-black"} text-[2vw]  hover:text-red-500`} onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        {selectedArray[currentPage]}
        <div className="flex mt-[1vh] justify-center space-x-4">
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded shadow ${darkMode ? "shadow-white":"shadow-black"} ${currentPage == 0 ? "hidden" : ""}`}
            onClick={prevPage}
          >
            이전 페이지
          </button>
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded shadow ${darkMode ? "shadow-white":"shadow-black"} ${currentPage == selectedArray.length - 1 ? "hidden" : ""}`}
            onClick={nextPage}
          >
            다음 페이지
          </button>
        </div>
      </div>
    </div>
  ) : null;
};


