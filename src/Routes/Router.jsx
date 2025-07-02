// src/routes/Router.jsx
import { Routes, Route } from "react-router-dom";
import About from "../Component/About";
import PortfolioDetail from "../Component/page/Portofolio";
import Skill from "../Component/Skill";
import Work from "../Component/Work";
import Contact from "../Component/Contact";
import Home from "../Component/Home"; // kalau punya halaman Home

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio/:category" element={<PortfolioDetail />} />
    </Routes>
  );
}
