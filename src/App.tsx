import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NowPrice } from "./pages/public/Now-price";
import NowPriceAssets from './pages/public/Now-price-assets';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NowPrice />} />
        <Route path="/trading-view/:currency" element={<NowPriceAssets />} />
      </Routes>
    </Router>
  );
}
