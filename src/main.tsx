import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { GetAssetInformation } from "./api/private/Get-Asset-Information";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GetAssetInformation />
  </React.StrictMode>
);
