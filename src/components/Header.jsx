import React from "react";

const Header = () => {
  return (
    <section className="section-header">
      <div className="section-inner">
        <div className="section-header-top">
          <div className="section-header-top-logo">Аренда бытовок</div>
          <div className="section-header-top__contacts">
            <div className="section-header-top__contacts-telephone">
              <a href="tel:+79267592241"> +7 (926) 759-22-41</a>
            </div>
            <div className="section-header-top__contacts-email">
              kirill.litvin.2000@mail.ru
            </div>
          </div>
        </div>
        <div className="section-header-content">
          <div className="section-header-wrapper">
            <div className="section-header-wrapper__title">
              Металлические бытовки в аренду
            </div>
            <div className="section-header-wrapper__subtitle">
              <ul>
                <li>Осуществляем быструю доставку</li>
                <li>Всегда в наличии</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
