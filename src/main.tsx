import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { AskingPrice } from "./api/public/Asking-price";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AskingPrice />
  </React.StrictMode>
);
