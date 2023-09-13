import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChartPie, faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <header>
      <section>
        <a href="#">
          <img src="/src/assets/header.png" alt="" className="w-16 h-16" />
        </a>
        <div>
          <button>로그인</button>
        </div>
        <div>
          <a>
            <FontAwesomeIcon icon={faStar} style={{ color: "#121112" }} />
            관심목록
          </a>
          <a>
            <FontAwesomeIcon icon={faChartPie} /> 포트폴리오
          </a>
          <label htmlFor="search">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input type="text" placeholder="검색" id="search" />
          <button>검색</button>
        </div>
      </section>
    </header>
)}

