import React from "react";
import { motion } from "framer-motion";
import { headerAnimation, headerAnimationReverse } from "./Animation";
import cabin from "../assets/cabine.png";
import NavBar from "./Navigation/NavBar";

const Header: React.FC = () => {
  return (
    <section className="section-header" id="section-header">
      <div className="section-inner">
        <div className="section-header-top">
          <div className="section-header-top-logo">
            <div className="section-header-top-logo-picture">
              <svg
                width="87"
                height="80"
                viewBox="0 0 87 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.933336 0.100006C0.933334 1.10001 0.933334 57 0.933334 79L43.9333 102.951L87 79L86.9333 1.52588e-05H65.9333C65.9333 13.4508 65.9333 7.45084 65.9333 7.45084C55.4333 7.45085 54.9333 7.45084 54.9333 7.45084L55 7.62939e-06L32.9333 0.100006V7.45084C27.1 7.45084 21.9333 7.45084 21.9333 7.45084V0.100006C21.9333 0.100006 1.93333 0.100006 0.933336 0.100006ZM16.9333 15.0667H38.9333V7.45084C38.9333 7.45084 38.6 7.50001 48.9333 7.45084L48.9445 14.6667H71L70.9333 5.95084C80.3667 5.90167 80.9333 5.95084 80.9333 5.95084V29.9508L64.4333 38.9508L43.9333 29L23.9333 38.9508L6.93333 29.9508V6.00001H16.9333V15.0667ZM43.9333 35.9508L60.9333 44.9508V64.9508L44 73L26.9333 64.9508V44.9508L43.9333 35.9508ZM20.9333 44.9508V64.9508L6.93333 69.9508C6.93333 71.9508 7 38.9508 7 36.9508C7.66667 36.9508 20.9333 44.9508 20.9333 44.9508ZM80.9333 69.9508L66.9333 64.9508V44.9508L80.9333 36.9508C80.9333 37.9508 80.9333 69.9508 80.9333 69.9508ZM41 80C41 80 41 94.1067 41 95L7 77L23.9333 70.9508C24.6 70.9508 36.6 77.7333 41 80ZM81 77L47 95V80L63.9333 70.9508C64.4667 70.9508 81 77 81 77Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="section-header-top-logo-text">
              <div className="section-header-top-logo-text-title">
                Аренда бытовок
              </div>
              <div className="section-header-top-logo-text-subtitle">
                Помогаем Вашему строительству
              </div>
            </div>
          </div>
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
