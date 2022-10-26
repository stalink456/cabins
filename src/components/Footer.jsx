import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="section-inner">
        <ul className="section-footer__nav">
          <li>
            <Link to="/#section-header">Главная</Link>
            <Link to="/#section-price">Грузоперевозки</Link>
            <Link to="/#section-cabine">Производство бытовок</Link>
            <Link to="/#section-about">О нас</Link>
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
