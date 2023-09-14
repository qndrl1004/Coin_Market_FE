import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { NowPrice } from "./api/public/Now-price";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <NowPrice />
    <Footer />
  </React.StrictMode>
);
