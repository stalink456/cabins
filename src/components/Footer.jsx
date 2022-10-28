import React from "react";
import { motion } from "framer-motion";
import { navAnimation } from "./Animation";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="section-inner">
        <ul className="section-footer__nav">
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={navAnimation}
            viewport={{ once: true }}
          >
            <motion.a
              initial="hidden"
              whileInView="visible"
              variants={navAnimation}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              href="/#section-header"
            >
              Главная
            </motion.a>
            <motion.a
              initial="hidden"
              whileInView="visible"
              variants={navAnimation}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              href="/#section-price"
            >
              Грузоперевозки
            </motion.a>
            <motion.a
              initial="hidden"
              whileInView="visible"
              variants={navAnimation}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              href="/#section-cabine"
            >
              Производство бытовок
            </motion.a>
            <motion.a
              initial="hidden"
              whileInView="visible"
              variants={navAnimation}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              href="/#section-about"
            >
              О нас
            </motion.a>
          </motion.li>
        </ul>
        <div className="section-footer__copyright">
          Авторское право © @stalink456 2022 Все права защищены
        </div>
      </div>
    </section>
  );
};

export default Footer;
