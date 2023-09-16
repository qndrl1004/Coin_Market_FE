/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faMoon,
  faSearch,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "../../api/ScrollToTop-api";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: any) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      const coin = searchTerm.toUpperCase();
      window.location.href = `/search/${coin}`;
    }
  };

  return (
    <header className="fixed top-0 z-10 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-4 py-2 mx-auto md:py-4">
        <a href="/" className="">
          <img src="/src/assets/header.png" alt="" className="w-72 h-36" />
        </a>
        <div className="hidden space-x-4 md:flex">
          <button className="text-xl">
            <FontAwesomeIcon icon={faMoon} size="lg" />
          </button>
          <button className="px-2 py-1 border border-black rounded hover:bg-[#efda7a] hover:ring-[#efda7a] hover:text-white">
            로그인
          </button>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <a
            href="/favorites"
            className="cursor-pointer hover:underline hover:text-[#efda7a]"
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
            href="/portfolio"
            className="cursor-pointer hover:underline hover:text-[#38bdf8]"
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

          <div className="relative bg-slate-200">
            <label htmlFor="search" className="absolute px-1 top-1 left-2">
              <FontAwesomeIcon
                icon={faSearch}
                style={{ paddingRight: "7px" }}
              />
            </label>
            <input
              type="text"
              placeholder="코인입력"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
              value={searchTerm}
              className="py-1 pl-8 pr-4 rounded focus:outline-none bg-slate-200"
            />

            <a
              href={`/search/${searchTerm}`}
              className="absolute px-1 top-1 right-2 hover:text-white"
            >
              검색
            </a>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </header>
  );
}
