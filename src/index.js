import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PoznejKnihu1 from "./PoznejKnihu1";
import Home from "./Home";
import Proctene1 from "./proctene-1";
import Proctene2 from "./proctene-2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="poznej-knihu-1" element={<PoznejKnihu1 />} />
          <Route path="proctene-2" element={<Proctene2 />} />
          <Route path="proctene-1" element={<Proctene1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
