import React from 'react';
import logo from '../../assets/images/logo.svg'
import pet from '../../assets/images/pet.png'
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate()

  const HandleClick =() => {
    navigate('/login')
  }

  return (
    <header class="header">
      <div class="container">
        <div class="header__top">
          <a class="logo" href="#">
            <img width='100'class="logo__img" src={logo} alt="logo" />
          </a>
          <nav className='nav__bar'>
            <NavLink to='/'>
              Главная
            </NavLink>
            <NavLink to='/news'>
              Новости
            </NavLink>
            <NavLink to='/advice'>
              Советы
            </NavLink>
          </nav>
          <div className="header__btn" onClick={() => HandleClick()}>
            <button>
              Вход
            </button>
          </div>
        </div>
        <div class="header__content">
          <h1 data-wow-delay=".5s" class="header__title wow animate__fadeInLeft">
        "Сохранение Биоразнообразия: <b>ЭкоБаланс</b> "
          </h1>
          <h2 data-wow-delay="1s" class="header__subtitle wow animate__fadeInLeft">
          </h2>
          <p data-wow-delay="1.5s" class="header__text wow animate__fadeInLeft">
            Подбор, покупка, доставка, растаможка, ремонт, оформление по договору
          </p>
          <a class="button" href="#">КОНСУЛЬТАЦИЯ ЭКСПЕРТА</a>
          <img data-wow-delay="2s" class="header__images wow animate__fadeInUpBig" src={pet}
            alt="ford mustang"/>
        </div>
      </div>
    </header>
  );
};

export default Header;