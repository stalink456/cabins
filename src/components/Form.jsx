import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [toSend, setToSend] = React.useState({
    from_name: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (toSend.from_name.length >= 4 && toSend.reply_to.length >= 8) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          toSend,
          process.env.REACT_APP_USER_ID
        )
        .then(() => {
          toast.success("Заявка отправлена, мы скоро с Вами свяжемся!");
        })
        .catch(() => {
          toast.error("Что-то пошло не так");
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
    <div className="section-form">
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
          <button type="submit">Отправить</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
