import React from "react";

const Header = () => {
  return (
    <section className="section-header">
      <div className="section-inner">
        <div className="section-header-top">
          <div className="section-header-top-logo">Аренда бытовок</div>
          <div className="section-header-top__contacts">
            <div className="section-header-top__contacts-telephone">
              <a href="tel:+79646232467"> +7 (964) 623-24-67</a>
            </div>
            <div className="section-header-top__contacts-email">
              kirill.litvin.2000@mail.ru
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default Header;
