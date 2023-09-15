import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NowPrice } from "./pages/public/Now-price";
import TradingViewWidget from "./pages/public/TradingView-api";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NowPrice />} />
        <Route path="/trading-view/:currency" element={<TradingViewWidget />} />
      </Routes>
    </Router>
  );
}
