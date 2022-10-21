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
                Более трех лет на рынке по аренде бытовок
              </div>
              <div className="description-item__text">Всегда на связи</div>
            </div>
            <div className="description-item">
              <div className="description-item__title">???</div>
              <div className="description-item__text">
                Много лет на рынке по аренде бытовок
              </div>
              <div className="description-item__text">Всегда на связи</div>
            </div>
            <div className="description-item">
              <div className="description-item__title">Контакты</div>
              <div className="description-item__text">Телефон: +7 (964) 623-24-67</div>
              <div className="description-item__text">Почта: kirill.litvin.2000@mail.ru</div>
            </div>
          </div>
          <YandexMap />
        </div>
      </div>
    </section>
  );
};

export default About;
