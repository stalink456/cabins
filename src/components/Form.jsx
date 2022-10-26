import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = React.memo(({ theme }) => {
  const [toSend, setToSend] = React.useState({
    from_name: "",
    reply_to: "",
  });
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (toSend.from_name.length >= 4 && toSend.reply_to.length >= 8) {
      setLoading(true);
      emailjs
        .send(
          "service_urh8bwo",
          "template_yhtxq43",
          toSend,
          "6IHvlZeKxSrf46aRS"
        )
        .then(() => {
          toast.success("Заявка отправлена, мы скоро с Вами свяжемся!");
          setLoading(false);
        })
        .catch(() => {
          toast.error("Что-то пошло не так");
          setLoading(false);
        });

      setToSend({ from_name: "", reply_to: "" });
    } else {
      toast.error("Заполните форму");
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className={`section-form ${theme === "white" ? "white" : ""}`}>
      <div className="section-inner">
        <div className="section-form__title">
          Заполните заявку и мы с Вами свяжемся
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Введите Ваше имя"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Введите Ваш email или номер телефона"
            value={toSend.reply_to}
            onChange={handleChange}
          />

          {loading ? (
            <div className={`dot${theme === "white" ? "-white" : ""}`}>
              <div className="dot-flashing"></div>
            </div>
          ) : (
            <button type="submit">Отправить</button>
          )}
        </form>
      </div>
    </div>
  );
});

export default Form;
