import React from "react";
import YandexMap from "./YandexMap";

const About = () => {
  return (
    <section className="section-about">
      <div className="section-inner">
        <div className="section-about-title">О нас</div>
        <div className="section-about-block">
          <div className="section-about-block__content">
            <div className="description-item">
              <div className="description-item__title">Гарантии</div>
              <div className="description-item__text">
                Много лет на рынке по аренде бытовок
              </div>
              <div className="description-item__text">Всегда на связи</div>
            </div>
            <div className="description-item">
              <div className="description-item__title">Гарантии</div>
              <div className="description-item__text">
                Много лет на рынке по аренде бытовок
              </div>
              <div className="description-item__text">Всегда на связи</div>
            </div>
            <div className="description-item">
              <div className="description-item__title">Контакты</div>
              <div className="description-item__text">Телефон</div>
              <div className="description-item__text">Пошта</div>
            </div>
          </div>
          <div className="section-price__map">
            <YandexMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
