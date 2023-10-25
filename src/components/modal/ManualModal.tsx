import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDarkMode } from "../../context/Dark-mode";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface BookModalProps {
  isNames: string;
  isOpen: boolean;
  onClose: () => void;
}

const page1 = [
  <>
    <div className={`mb-5 text-center font-semibold text-xl`}>
      api key 발급방법
    </div>
    <div className="flex-1 text-center overflow-auto text-black bg-gray-300 rounded">
      <div>
        <p className="text-xl pb-2">api key 발급방법</p>

        <p>아래 사이트 링크에서 가입 진행후</p>
        <p className="text-xl">
        빗썸:<a className="pl-2 text-orange-500 hover:text-blue-500 underline underline-offset-1" href="https://www.bithumb.com">https://www.bithumb.com</a>
        </p>
        <img src="../../../public/1.png" alt="" />
        <p>로그인 후에 사진에 있는 빨간상자로 표시한 부분을 눌러주세요.</p>
        <img src="../../../public/2.png" alt="" />
        <p>창에서 빨간상자로 표시한 부분을 눌러주세요.</p>
        <img src="../../../public/3.png" alt="" />
        <p>빨간상자로 표시된부분에서 원하는 항목을 체크해주세요.</p>
        <img src="../../../public/4.png" alt="" />
        <p>밑으로 내리시면 비밀번호 입력창이 나오는데 여기에 계정 비밀번호을  입력후 api key 발급 버튼을 눌러주세요.</p>
        <img src="../../../public/5.png" alt="" />
        <p>두개의 키갑이 나오는데 두개의 키값을 복사한후에 활성화 버튼을 눌러주세요.</p>
        <img src="../../../public/6.png" alt="" />
        <p>발급받은 키값을 넣어주시고 전송 버튼을 눌러주세요.</p>
      </div>
    </div>
  </>,

  <div className="flex-1 text-black bg-gray-300 rounded">
    <div>
      <p>지갑 연결 방법</p>
    </div>
  </div>
];

export const BookModal: React.FC<BookModalProps> = ({
  isNames,
  isOpen,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { darkMode } = useDarkMode();
  const selectedArray = isNames === "page1" ? page1 : [];

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center "
      style={{ backgroundColor: isOpen ? "rgba(0, 0, 0, 0.6)" : "transparent" }}
      onClick={handleBackdropClick}
    >
      <div
        className={`${
          darkMode
            ? "bg-black text-white shadow-md shadow-white"
            : "bg-white text-black"
        } flex flex-col justify-between p-4 rounded shadow-lg w-[80%] h-[80%]`}
      >
        <div className="text-right">
          <button
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-[2vw]  hover:text-red-500`}
            onClick={handleCloseModal}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        {selectedArray[currentPage]}
        <div className="flex mt-[1vh] justify-center space-x-4">
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded shadow ${
              darkMode ? "shadow-white" : "shadow-black"
            } ${currentPage == 0 ? "hidden" : ""}`}
            onClick={prevPage}
          >
            이전 페이지
          </button>
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded shadow ${
              darkMode ? "shadow-white" : "shadow-black"
            } ${currentPage == selectedArray.length - 1 ? "hidden" : ""}`}
            onClick={nextPage}
          >
            다음 페이지
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
