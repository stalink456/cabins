import React from "react";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="section-inner">
        <ul className="section-footer__nav">
          <li>
            <a href="/#section-header">Главная</a>
            <a href="/#section-price">Грузоперевозки</a>
            <a href="/#section-cabine">Производство бытовок</a>
            <a href="/#section-about">О нас</a>
          </li>
        </ul>
        <div className="section-footer__copyright">
          Авторское право © @stalink456 2022 Все права защищены
        </div>
      </div>
    </section>
  );
};

export default Footer;
