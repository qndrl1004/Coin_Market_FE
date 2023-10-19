/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faMoon,
  faSearch,
  faStarHalfAlt,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "../../api/ScrollToTop-api";
import { useDarkMode } from "../../context/Dark-mode";
import { LoginModal } from "../modal/LoginModal";
import LogoutBtn from "../button/LogoutBtn";
import LoginBtn from "../button/LoginBtn";
import { useAuth } from "../../context/IsLogined";
import { BithumbResponse } from "../../api/TradingChart-api";
import axios from "axios";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [responseData, _setResponseData] = useState<BithumbResponse | null>(
    null
  );
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isLogin, setLogin] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const { accessToken } = useAuth();

  const filterCoins = (data: BithumbResponse | null, searchTerm: string) => {
    if (!data) return [];
    if (!searchTerm) return Object.keys(data.data);

    return Object.keys(data.data).filter((key) =>
      key.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCoins = filterCoins(responseData, searchTerm);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleSearch = (e: any) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      const coin = searchTerm.toUpperCase();

      const hasResults = filteredCoins.includes(coin);

      if (hasResults) {
        window.location.href = `/search/${coin}`;
      } else {
        window.location.href = "/nonecoin";
      }
    }
  };

  const sendMessage = () => {
    if(!isLogin){
      alert("로그인이 필요합니다.");
    }
  }

  useEffect(() => {
    axios
      .get("/api/favorites/checkcookie", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setLogin(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <header
      className={`${
        darkMode ? "dark" : "light"
      } fixed top-0 w-full z-40 md:top-0 h-[120px] md:h-[155px] shadow-md shadow-slate-200 opacity-100`}
    >
      <LoginModal isModalOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <div className="flex items-center justify-between h-[100%] min-w-[300px] overflow-hidden mx-[20px]">
        <a href="/" className="md:w-[300px] max-w-[40%]">
          <img
            src={`${darkMode ? "/header-dark.png" : "/header.png"}`}
            alt={`${darkMode ? "Header-dark" : "Header"}`}
          />
        </a>
        <div className="flex-1 max-w-[60%] h-[100%] flex flex-col items-end justify-between">
          <div className="flex flex-1 h-full">
            <button
              className="mr-[40px] md:text-xl md:cursor-pointer md:hover:text-[#efda7a]"
              onClick={toggleDarkMode}
            >
              {!darkMode && (
                <FontAwesomeIcon
                  icon={faMoon}
                  size="lg"
                  style={{
                    paddingRight: "7px",
                  }}
                />
              )}
              {darkMode && (
                <FontAwesomeIcon
                  icon={faSun}
                  size="lg"
                  style={{
                    paddingRight: "7px",
                  }}
                />
              )}
            </button>
            {accessToken ? (
              <LogoutBtn />
            ) : (
              <LoginBtn openLoginModal={openLoginModal} />
            )}
          </div>

          <div className="group flex items-center justify-end mx-[20px] mr-0 mb-[20px] flex-wrap">
            <div className="mb-[8px]">
              <a
                href={isLogin? "/favorites":""}
                onClick={sendMessage}
                className="mr-[20px] md:cursor-pointer md:hover:underline md:hover:text-[#efda7a]"
              >
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  style={{
                    color: "#efda7a",
                    paddingRight: "7px",
                  }}
                />
                관심목록
              </a>
              <a
                href={isLogin? "/portfolio":""}
                onClick={sendMessage}
                className="md:cursor-pointer md:hover:underline md:hover:text-[#38bdf8] "
              >
                <FontAwesomeIcon
                  icon={faChartPie}
                  style={{
                    color: "#38bdf8",
                    paddingRight: "7px",
                  }}
                />
                포트폴리오
              </a>
            </div>

            <div className="flex items-center  justify-start ml-[20px] mb-[10px] w-[190px] rounded-lg shadow-sm shadow-slate-200 group-focus-within:shadow-blue-400 hover:shadow-blue-400">
              <label htmlFor="search" className="ml-[10px]">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ paddingRight: "7px" }}
                />
              </label>
              <input
                type="text"
                id="search"
                placeholder="코인입력"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleSearch}
                value={searchTerm}
                className="w-[100px] h-[30px] focus:outline-none bg-transparent md:focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </header>
  );
}
