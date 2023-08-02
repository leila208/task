import "./App.css";
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
function App() {
    let loc = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
      });
    }, [loc.pathname]);
  return (
    <>
    
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogdetails" element={<BlogDetail />} />
        </Routes>
        <Footer />
     
    </>
  );
}

export default App;
