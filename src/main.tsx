import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { DarkModeProvider } from "./context/Dark-mode";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <Header />
      <App />
      <Footer />
    </DarkModeProvider>
  </React.StrictMode>
);
