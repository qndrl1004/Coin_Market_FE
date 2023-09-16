/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
