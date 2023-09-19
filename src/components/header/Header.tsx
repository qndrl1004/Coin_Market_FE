/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faKey,
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
    <header className="fixed top-0 z-10 w-full bg-white shadow-md h-[15%] md:flex md:top-0 md:z-10 md:w-full md:bg-white md:shadow-md md:h-1/6 ">
      <div className="fixed items-center justify-center w-full md:flex md:items-center md:justify-center">
        <a
          href="/"
          className="fixed top-0 items-center justify-center mt-2.5 md:flex md:items-center md:justify-center"
        >
          <img
            src="../public/header.png"
            alt="logo"
            className="w-48 h-24 md:flex md:w-72 md:h-36 "
          />
        </a>

        <div className="fixed space-x-8 top-0 mt-4 ml-[65%] md:top-0 md:mt-8 md:space-x-8 md:right-[20%] md:flex">
          <button className="md:text-xl md:cursor-pointer md:hover:text-[#efda7a]">
            <FontAwesomeIcon
              icon={faMoon}
              size="lg"
              style={{
                paddingRight: "7px",
              }}
            />
          </button>
          <a
            href="/login"
            className=" md:cursor-pointer md:hover:underline md:hover:text-[#494949]"
          >
            <FontAwesomeIcon
              icon={faKey}
              style={{
                paddingRight: "7px",
              }}
            />
            로그인
          </a>
        </div>

        <div className="fixed top-0 mt-[55px] space-x-3 ml-[48%] md:flex md:top-0 md:mt-[5%] md:-ml-[50%] md:space-x-2 ">
          <a
            href="/favorites"
            className="md:mt-1  md:cursor-pointer md:hover:underline md:hover:text-[#efda7a]"
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
            className="md:mt-1 md:px-6 md:cursor-pointer md:hover:underline md:hover:text-[#38bdf8] "
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

        <div className="fixed top-0 mt-24 ml-[45%] bg-slate-200 md:flex md:bg-slate-200 md:top-0 md:mt-30 md:ml-[50%]">
          <label htmlFor="search" className=" md:px-1 md:py-1">
            <FontAwesomeIcon icon={faSearch} style={{ paddingRight: "7px" }} />
          </label>
          <input
            type="text"
            placeholder="코인입력"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
            value={searchTerm}
            className=" bg-slate-200 md:py-1 md:rounded md:focus:outline-none md:bg-slate-200"
          />
          <a
            href={`/search/${searchTerm}`}
            className="-ml-6 md:py-1 md:pr-1 md:bg-slate-200 md:hover:text-white"
          >
            검색
          </a>
        </div>
      </div>
      <ScrollToTop />
    </header>
  );
}
