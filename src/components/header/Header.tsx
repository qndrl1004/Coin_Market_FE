import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faSearch,
  faMoon,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <nav>
        <section>
          <article>
            <a href="#">
              <img
                src="/src/assets/header.png"
                alt=""
                className="fixed top-0 left-0 right-0 w-48 h-48 -mt-8 cursor-pointer"
              />
            </a>
          </article>
          <article>
            <button className="fixed top-0 w-16 h-16 right-24 ">
              <FontAwesomeIcon icon={faMoon} />
            </button>
            <button className="fixed w-20 px-2 py-1 border-solid rounded h-15 top-4 border-1 border-amber-300 right-4 hover:bg-amber-500 hover:ring-amber-500 hover:text-white">
              로그인
            </button>
          </article>
          <article>
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
          </article>
        </section>
        <section>
          <div className="border-b-4 border-black"></div>
          <div className="h-32 border-b-4 border-black"></div>
        </section>
      </nav>
    </>
  );
}
