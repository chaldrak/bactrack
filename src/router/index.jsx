import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<div />} />

          {/* Protected routes */}

          {/* Catch all routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </div>
  );
};

export default Routage;
