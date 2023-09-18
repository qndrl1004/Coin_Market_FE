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
    <header className="md:fixed md:top-0 md:z-10 md:w-full md:bg-white md:shadow-md md:h-1/6 ">
      <div className="mx-auto md:container md:flex md:items-center md:justify-around md:w-full md:h-full md:px-4 md:py-2 ">
        <a href="/" className="md:fixed md:flex md:flex-shrink-0 ">
          <img
            src="/src/assets/header.png"
            alt="logo"
            className="w-48 h-24 md:w-72 md:h-36"
          />
        </a>

        <div className="md:fixed md:top-0 md:p-4 md:mt-3 md:space-x-8 md:right-[20%] md:flex">
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

        <div className="md:fixed md:flex md:mt-12 md:mr-[50%] md:space-x-2 ">
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

        <div className="md:fixed md:flex md:bg-slate-200 md:mt-12 md:ml-[50%]">
          <label htmlFor="search" className=" md:px-1 md:py-1">
            <FontAwesomeIcon icon={faSearch} style={{ paddingRight: "7px" }} />
          </label>
          <input
            type="text"
            placeholder="코인입력"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
            value={searchTerm}
            className="md:py-1 md:rounded md:focus:outline-none md:bg-slate-200"
          />
          <a
            href={`/search/${searchTerm}`}
            className="md:py-1 md:pr-1 md:bg-slate-200 md:hover:text-white "
          >
            검색
          </a>
        </div>
      </div>
      <ScrollToTop />
    </header>
  );
}
