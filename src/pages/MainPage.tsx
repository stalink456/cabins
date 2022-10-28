import React from "react";
import { ToastContainer } from "react-toastify";
import About from "../components/About";
import Cabine from "../components/Cabine";
import Header from "../components/Header";
import Price from "../components/Price";
import Footer from "../components/Footer";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Price />
      <Cabine />
      <About />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainPage;
