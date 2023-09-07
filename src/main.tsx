import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DepositWithdrawalSupportStatusAssets } from "./api/public/Deposit-Withdrawal-support-status-assets";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DepositWithdrawalSupportStatusAssets />
  </React.StrictMode>
);
