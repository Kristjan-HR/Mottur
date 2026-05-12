import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tilbod from "./pages/Tilbod";
import UmOkkur from "./pages/UmOkkur";
import HafaSamband from "./pages/HafaSamband";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tilbod" element={<Tilbod />} />
          <Route path="/um-okkur" element={<UmOkkur />} />
          <Route path="/hafa-samband" element={<HafaSamband />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
