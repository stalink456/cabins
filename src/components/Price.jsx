import React from "react";
import { motion } from "framer-motion";
import { sectionAnimation } from "./Animation";
import Form from "../components/Form";
import truck from "../assets/truck.png";

const Price = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
      transition={{ delay: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="section-price"
      id="section-price"
    >
      <div className="section-inner">
        <div className="section-price-title">Грузоперевозки</div>
        <div className="section-price__block">
          <div className="section-price__block__image">
            <img src={truck} alt="" />
          </div>
          <div className="section-price__block__content">
            <div className="description-item">
              <div className="description-item__title">
                Бытовки от 8000 рублей в месяц.
              </div>
              <div className="description-item__text">
                Доставка по Московской, Тульской, Калужской области.
              </div>
            </div>

            <div className="description-item">
              <div className="description-item__title">
                Услуги манипулятора от 4500 рублей.
              </div>
              <div className="description-item__text">
                Доставка груза по Московской, Тульской, Калужской области.
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </motion.section>
  );
};

export default Price;
