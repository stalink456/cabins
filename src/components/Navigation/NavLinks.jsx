import React from "react";
import "./NavBar.module.scss";

const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="/#section-header">Главная</a>
        <a href="/#section-price">Грузоперевозки</a>
        <a href="/#section-cabine">Производство бытовок</a>
        <a href="/#section-about">О нас</a>
      </li>
    </ul>
  );
};

export default NavBar;
