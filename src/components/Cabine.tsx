import React from "react";
import { motion } from "framer-motion";
import { sectionAnimation } from "./Animation";
import Form from "./Form";
import cabineCreate from "../assets/cabine_create.png";

const Cabine: React.FC = () => {
  return (
    <section className="section-cabine" id="section-cabine">
      <motion.div
        className="section-inner"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-cabine__title">Производство бытовок</div>
        <div className="section-cabine__block">
          <div className="section-cabine__block__image">
            <img src={cabineCreate} alt="" />
          </div>
          <div className="section-cabine__block__content">
            <div className="description-item">
              <div className="description-item__title">
                Стандарт: <span>6 х 2,40 х 2,40.</span>
              </div>
              <div className="description-item__text">
                Утепленная с электрикой.
              </div>
              <div className="description-item__text">
                Цена от <span>120 000</span> рублей.
              </div>
            </div>
            <div className="description-item">
              <div className="description-item__title">Индивидуальный:</div>
              <div className="description-item__text">
                Так же производим бытовки под заказ по вашим техническим
                характеристикам.
              </div>
              <div className="description-item__text">
                Цена - рассчитывается индивидуально.
              </div>
            </div>
          </div>
        </div>
        <Form theme="white" />
      </motion.div>
    </section>
  );
};

export default Cabine;
