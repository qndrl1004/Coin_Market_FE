import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faMoon,
  faSearch,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <header>
        <section className="w-screen">
          <div>
            <div className="fixed block w-full h-32 bg-white border-black border-solid border-y-4"></div>
            <a href="#">
              <img
                src="/src/assets/header.png"
                alt=""
                className="fixed top-0 left-0 right-0 w-48 h-48 -mt-8 cursor-pointer"
              />
            </a>
          </div>
          <div>
            <button className="fixed top-0 w-[70px] h-[70px] text-xl right-24 ">
              <FontAwesomeIcon icon={faMoon} size="lg" />
            </button>
            <button className="fixed w-20 px-2 py-1 border-black border-solid rounded h-15 top-4 border-1 right-4 hover:bg-[#efda7a] hover:ring-[#efda7a] hover:text-white">
              로그인
            </button>
          </div>
          <div>
            <a className="fixed px-5 cursor-pointer hover:underline underline-offset-2 hover:text-[#efda7a] mr-80 top-20 right-10 ">
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{
                  color: "#efda7a",
                  paddingRight: "7px",
                }}
              />
              관심목록
            </a>
            <a className="fixed px-2 cursor-pointer mr-60 top-20 right-6 hover:underline underline-offset-2 hover:text-[#38bdf8] ">
              <FontAwesomeIcon
                icon={faChartPie}
                style={{
                  color: "38bdf8",
                  paddingRight: "7px",
                }}
              />
              포트폴리오
            </a>
            <div className="fixed rounded-l-lg rounded-r-lg top-20 right-3 bg-slate-200 ">
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
                className=" bg-slate-200 focus:outline-none"
              />
              <button className="px-2 hover:text-white ">검색</button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
