import React from "react";
import NavLinks from "./Navigation/NavLinks";
import cabin from "../assets/cabine.png";
import NavBar from "./Navigation/NavBar";

const Header = () => {
  return (
    <section className="section-header" id="section-header">
      <div className="section-inner">
        <div className="section-header-top">
          <div className="section-header-top-logo">Аренда бытовок</div>
          <NavBar style="section-header-top__nav" />
        </div>
        <div className="section-header-content">
          <div className="section-header-wrapper">
            <div className="section-header-wrapper__title">
              Помогаем в организации Вашего строительства
            </div>
            <div className="section-header-wrapper__subtitle">
              <ul>
                <li>Быстро доставим на любой объект</li>
                <li>Качественная отделка</li>
                <li>Открытость и честность</li>
              </ul>
            </div>
          </div>
          <div className="section-header-wrapper__image">
            <img src={cabin} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
