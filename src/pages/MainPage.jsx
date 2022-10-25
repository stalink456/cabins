import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "../components/About";
import Cabine from "../components/Cabine";
import Header from "../components/Header";
import Price from "../components/Price";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <Router>
        <Header />
        <Price />
        <Cabine />
        <About />
        <Footer />
        <ToastContainer />
      </Router>
    </div>
  );
};

export default MainPage;
