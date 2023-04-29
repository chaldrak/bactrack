import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";

const Routage = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </div>
  );
};

export default Routage;
