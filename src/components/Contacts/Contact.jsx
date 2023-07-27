import React from 'react'
import './Contacts.css'
import { useForm } from 'react-hook-form';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Обработка данных формы при отправке
    console.log(data);
  };

  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__info">
            <h2 className="title">КОНТАКТЫ</h2>
            <ul className="contacts__list">
              <li className="contacts__item">
                <p className="contacts__item-title">Адрес</p>
                <p className="contacts__item-text">
                  Киев, Подол <br />
                  ул. Константиновская, д.71
                </p>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Время работы</p>
                <p className="contacts__item-text">
                  Пн-Сб: с 9:00 до 19:00, <br />
                  Вс: выходной
                </p>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Телефон</p>
                <p className="contacts__item-text">
                  +996 771 69 69 45
                </p>
              </li>
            </ul>
          </div>
          <form className="contacts__form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title contacts__title">Оставить заявку</h2>
            <input
              className="contacts__input"
              type="text"
              placeholder="Как Вас зовут?"
              {...register('name', { required: true })}
            />
            {errors.name && <span>Поле обязательно для заполнения</span>}
            <input
              className="contacts__input"
              type="tel"
              placeholder="Ваш номер телефона"
              {...register('phone', { required: true })}
            />
            {errors.phone && <span>Поле обязательно для заполнения</span>}
            <button className="contacts__btn button" type="submit">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}