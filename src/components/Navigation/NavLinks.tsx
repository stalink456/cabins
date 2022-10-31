import React from "react";
import { motion } from "framer-motion";
import { navAnimation } from "../Animation";
import { navLinksType } from "../types";
import "./NavBar.module.scss";

const NavLinks: React.FC<navLinksType> = ({ isMobile, closeMobileMenu }) => {
  return (
    <ul>
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={navAnimation}
        viewport={{ once: true }}
        onClick={() => isMobile && closeMobileMenu()}
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
          Услуги
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
  );
};

export default NavLinks;
