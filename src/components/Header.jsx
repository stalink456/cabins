import React from "react";
import { motion } from "framer-motion";
import { headerAnimation, headerAnimationReverse } from "./Animation";
import cabin from "../assets/cabine.png";
import NavBar from "./Navigation/NavBar";

const Header = () => {
  return (
    <section className="section-header" id="section-header">
      <div className="section-inner">
        <div className="section-header-top">
          <div className="section-header-top-logo">Аренда бытовок</div>
          <NavBar />
        </div>
        <div className="section-header-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={headerAnimation}
            viewport={{ once: true }}
            className="section-header-wrapper"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={headerAnimation}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="section-header-wrapper__title"
            >
              Помогаем в организации Вашего строительства
            </motion.div>
            <div className="section-header-wrapper__subtitle">
              <ul>
                <motion.li
                  initial="hidden"
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Быстро доставим на любой объект
                </motion.li>
                <motion.li
                  whileInView="visible"
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Качественная отделка
                </motion.li>
                <motion.li
                  variants={headerAnimation}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Открытость и честность
                </motion.li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={headerAnimationReverse}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="section-header-wrapper__image"
          >
            <img src={cabin} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
