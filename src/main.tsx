import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import TradingViewWidget from './pages/public/TradingView-api';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <TradingViewWidget />
    <Footer />
  </React.StrictMode>
);
