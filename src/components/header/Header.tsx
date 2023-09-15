/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faMoon,
  faSearch,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "./ScrollToTop";
import { useState } from "react";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <div className="w-screen  my-[140px]">
      <header>
        <section className="fixed z-10 w-screen -translate-y-36">
          <div>
            <div className="fixed block w-full bg-white border-solid h-36 border-grey-200 border-y-2 "></div>
            <a href="/">
              <img
                src="/src/assets/header.png"
                alt=""
                className="fixed top-0 left-0 right-0 cursor-pointer w-72 h-36 "
              />
            </a>
          </div>
          <div>
            <button className="fixed w-[70px] h-[70px] top-2 text-xl right-28 ">
              <FontAwesomeIcon icon={faMoon} size="lg" />
            </button>
            <button className="fixed w-20 px-2 py-1 border-black border-solid rounded top-6 border-1 right-8 hover:bg-[#efda7a] hover:ring-[#efda7a] hover:text-white">
              로그인
            </button>
          </div>
          <div>
            <a className="fixed px-5 cursor-pointer hover:underline underline-offset-2 hover:text-[#efda7a] mr-80 top-24 right-14 ">
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{
                  color: "#efda7a",
                  paddingRight: "7px",
                }}
              />
              관심목록
            </a>
            <a className="fixed px-2 cursor-pointer mr-60 top-24 right-10 hover:underline underline-offset-2 hover:text-[#38bdf8] ">
              <FontAwesomeIcon
                icon={faChartPie}
                style={{
                  color: "38bdf8",
                  paddingRight: "7px",
                }}
              />
              포트폴리오
            </a>
            <div className="fixed rounded-l-lg rounded-r-lg top-24 right-7 bg-slate-200 ">
              <label htmlFor="search" className="px-1">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ paddingRight: "7px" }}
                />
              </label>
              <input
                type="text"
                placeholder="코인입력"
                id="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" bg-slate-200 focus:outline-none"
              />
              <button className="px-1 hover:text-white" onClick={handleSearch}>
                검색
              </button>
            </div>
          </div>
        </section>
      </header>
      <ScrollToTop />
    </div>
  );
}
