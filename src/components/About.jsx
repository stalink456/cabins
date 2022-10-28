import React from "react";
import { motion } from "framer-motion";
import { sectionAnimation } from "./Animation";
import YandexMap from "./YandexMap";

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
      transition={{ delay: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="section-about"
      id="section-about"
    >
      <div className="section-inner">
        <div className="section-about-title">О нас</div>
        <div className="section-about-block">
          <div className="section-about-block__content">
            <div className="description-item">
              <div className="description-item__title">Гарантии</div>
              <div className="description-item__text">
                Более трех лет на рынке по аренде бытовок
              </div>
              <div className="description-item__text">Работаем по договору</div>
            </div>
            <div className="description-item">
              <div className="description-item__title">Контакты</div>
              <div className="description-item__text">
                Телефон: <a href="tel:+79646232467"> +7 (964) 623-24-67</a>
              </div>
              <div className="description-item__text">
                Почта: kirill.litvin.2000@mail.ru
              </div>
            </div>
            <div className="description-item">
              <div className="description-item__title">Адрес</div>
              <div className="description-item__text">
                деревня Дашковка, 48А, городской округ Серпухов, Московская
                область
              </div>
            </div>
          </div>
          <YandexMap />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
