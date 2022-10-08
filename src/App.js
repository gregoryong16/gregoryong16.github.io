import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import CCA from "./components/CCA";
import Achievements from "./components/Achievements";
import ScrollToTop from "./components/ScrolltoTop";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gregory's Portfolio Website</title>
        {/* can change href to url u want accordingly */}
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Gregory's Portfolio Website" />
      </Helmet>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cca" element={<CCA />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </AnimatePresence>
      <Navbar />
      <ScrollToTop />
    </div>
  );
}
