import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    axios
      .post('https://ecohaven.pythonanywhere.com/api/v1/auth/register/', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login__forms">
          <div className="login__title">Регистрация</div>

          <div>
            <input
              type="text"
              id="username"
              placeholder="имя пользователя"
              {...register('username', { required: true })}
            />
            {errors.username && <span>Введите имя пользователя</span>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span>Введите корректный email</span>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              {...register('password', { required: true, minLength: 6 })}
              placeholder="пароль"
            />
            {errors.password && (
              <span>Пароль должен содержать не менее 6 символов</span>
            )}
          </div>
          <button type="submit">Зарегистрироваться</button>
          <Link to="/login">
            <p>уже есть аккаунт</p>
          </Link>
          <div className="to__home">
            <Link to="/">Назад</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;