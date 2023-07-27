import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [token, setToken] = useState(''); 

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });


    const navigate = useNavigate()

    const handleLogin = (data) => {
        axios.post('https://ecohaven.pythonanywhere.com/api/v1/auth/login/', data)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
                navigate('/admin')
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="Loged">
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="Loged__inside">
                    <div className="login__title">Вход</div>
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
                            type="password"
                            id="password"
                            placeholder="пароль"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span>Введите пароль</span>}
                    </div>
                    <div className="loged__botoom">
                        <button type="submit">Войти</button>
                        <Link to="/signin">
                            <p>Регистрация</p>
                        </Link>
                    </div>
                    <div className="to__home">
                        <Link to='/'>
                            Назад
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;