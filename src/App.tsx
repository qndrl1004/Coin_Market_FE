import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NowPrice } from "./pages/public/Now-price";
import NowPriceAssets from "./pages/public/Now-price-assets";
import NotFound from './pages/error/404';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NowPrice />} />
        <Route path="/search/:currency" element={<NowPriceAssets />} />
        <Route path="/trading-view/:currency" element={<NowPriceAssets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
