import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../../context/Dark-mode";

interface LoginModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}
const getWindowHeight = () =>  {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

const LoginModal: React.FC<LoginModalProps> = ({ isModalOpen, onClose }) => {
  const { darkMode } = useDarkMode();
  const modalStyle = {
    backgroundColor: isModalOpen ? "rgba(0, 0, 0, 0.8)" : "transparent",
    display: isModalOpen ? "block" : "none",
  };
  const [winHeight, setWinHeight] = useState(getWindowHeight)

  const handleCloseClick = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // 윈도우 창 크기가 변경될 때마다 실행
    const handleResize = () => {
      setWinHeight(getWindowHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 예시: 브라우저 높이를 출력
  console.log(winHeight);

  return (
    <div
      className="modal fixed w-full h-full bg-black opacity-100 transition-opacity duration-100 z-400"
      style={modalStyle}
      onClick={handleBackdropClick}
    >
      <div
        className='modal-content flex flex-col  justify-between bg-slate-200 border-1 border-slate-300 overflow-hidden shadow-lg shadow-slate-100  rounded-lg opacity-100 mx-auto w-[300px] h-[500px]'
        style={{ transform: `translateY(${winHeight / 2 -250}px)` }}>  
        <section className="loginSection flex-1 p-[10px] flex flex-col ">
          <button
            className={`closeBtn shadow-lg border-0 border-solid rounded-sm shadow-slate-200 w-[20px] h-[25px] ml-auto mb-[10px] transition-all duration-500 hover:bg-[#efda7a] ${darkMode? 'bg-[#0c0e13]' : 'bg-transparent'}`}
            onClick={handleCloseClick}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <div
            className={`${
              darkMode ? "bg-[#22243b] md:bg-[#22243b]" : ""
            } upBox bg-white flex justify-between items-center flex-col border-3 border-slate-300 overflow-hidden shadow-md shadow-slate-400 rounded-lg flex-1 w-full h-full p-[10px] py-[30px]`}
          >
            <div className="loginTitle bg-400">
              <h1 className="text-lg font-bold">로그인</h1>
            </div>
            <div className="w-full">
              <button className="loginBtn flex justify-between items-center w-full shadow-sm shadow-slate-400 rounded-lg h-[50px] transition-all duration-500 hover:bg-green-500">
                <img
                  className="ml-[10px] w-[30px] h-[30px]"
                  src="/naver.png"
                  alt="Naver image"
                />
                <span className="ml-[30px] flex-1 text-start">
                  Continue with Naver
                </span>
              </button>
              <button className="loginBtn flex justify-between items-center w-full shadow-sm shadow-slate-400 rounded-lg h-[50px] transition-all duration-500 hover:bg-yellow-400 my-[20px]">
                <img
                  className="ml-[10px] w-[30px] h-[30px]"
                  src="/kakao.png"
                  alt="kakao image"
                />
                <span className="ml-[30px] flex-1 text-start">
                  Continue with Kakao
                </span>
              </button>
              <button className="loginBtn flex justify-between items-center w-full shadow-sm shadow-slate-400 rounded-lg h-[50px] transition-all duration-500 hover:bg-blue-500">
                <img
                  className="ml-[10px] w-[30px] h-[30px]"
                  src="/google.png"
                  alt="Google image"
                />
                <span className="ml-[30px] flex-1 text-start">
                  Continue with Google
                </span>
              </button>
            </div>
            <div className="textCotainer">
              <p className="text-xs text-center">
                By proceeding you agree to CoinView's{" "}
                <a
                  href="/terms"
                  className="text-blue-500 underline TermsOfUse hover:text-red-400"
                >
                  <br />
                  Terms of Use
                </a>{" "}
                &{" "}
                <a
                  href="/privacy"
                  className="text-blue-500 underline PrivacyPolicy hover:text-red-400"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginModal;
