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
import Dashboard from "../pages/dashboard";
import AuthRequired from "../components/authentication";
import { DataProvider } from "../context";
import CreateClass from "../pages/create-class";
import DetailsClass from "../pages/details-class";
import ScrollToTop from "../components/common/scroll-to-top";

const Routage = () => {
  return (
    <div>
      <Router>
        <DataProvider>
          <ScrollToTop />
          <Header />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<div />} />

            {/* Protected routes */}
            <Route element={<AuthRequired />}>
              <Route path="/tableau-de-bord" element={<Dashboard />} />
              <Route path="/creer-une-classe" element={<CreateClass />} />
              <Route path="/mon-profil" element={<div />} />
              <Route path="/classes/:id" element={<DetailsClass />} />
            </Route>

            {/* Catch all routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <ToastContainer limit={1} />
        </DataProvider>
      </Router>
    </div>
  );
};

export default Routage;
