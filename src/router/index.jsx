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

const Routage = () => {
  return (
    <div>
      <Router>
        <DataProvider>
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
            </Route>

            {/* Catch all routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </DataProvider>
      </Router>
    </div>
  );
};

export default Routage;
