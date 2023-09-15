import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import TradingViewWidget from './pages/public/TradingView-api';

const handleSearch = (searchTerm: string) => {
    // 검색 로직을 처리하는 코드
    console.log(`검색어: ${searchTerm}`);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header onSearch={handleSearch} />
    <TradingViewWidget />
    <Footer />
  </React.StrictMode>
);
