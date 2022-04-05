import { BrowserRouter, Route, Routes } from "react-router-dom";
import Institucional from "./pages/Institucional";
import Cursos from "./pages/Cursos";
import SaibaMais from "./pages/SaibaMais";
import Header from "./components/Header";
import Footer from "./components/Footer";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Institucional />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;
