import React from "react";
import Form from "../components/Form";
import truck from "../assets/truck.png";

const Price = () => {
  return (
    <section className="section-price">
      <div className="section-inner">
        <div className="section-price-title">Прайс-лист</div>
        <div className="section-price">
          <div className="section-price__image">
            <img src={truck} alt="" />
          </div>
          <div className="section-price__content">
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
                Услуги манипулятора от 2000 рублей.
              </div>
              <div className="description-item__text">
                Доставка груза по Московской, Тульской, Калужской области.
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Price;
