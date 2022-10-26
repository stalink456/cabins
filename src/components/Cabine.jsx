import React from "react";
import Form from "./Form";
import cabineCreate from "../assets/cabine_create.png";

const Cabine = () => {
  return (
    <section className="section-cabine" id="section-cabine">
      <div className="section-inner">
        <div className="section-cabine__title">Производство бытовок</div>
        <div className="section-cabine__block">
          <div className="section-cabine__block__image">
            <img src={cabineCreate} alt="" />
          </div>
          <div className="section-cabine__block__content">
            <div className="description-item">
              <div className="description-item__title">
                Стандарт: 6х2,40х2,40.
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
                Так же производим бытовки под заказ по вашим ТХ.
              </div>
              <div className="description-item__text">
                Цена рассчитывается индивидуально.
              </div>
            </div>
          </div>
        </div>
        <Form theme="white" />
      </div>
    </section>
  );
};

export default Cabine;
