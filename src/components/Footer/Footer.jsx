import React from 'react'
import logo from '../../assets/images/logo.svg'
import inst from '../../assets/images/icon/instagram.svg'
import tg from '../../assets/images/icon/telegram.svg'
import wh from '../../assets/images/icon/whatsapp.svg'
import fc from '../../assets/images/icon/facebook.svg'

import './Footer.css' ;


export const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a class="logo" href="#">
        <img width='100'class="logo__img" src={logo} alt="logo" />

        </a>

        <div class="social footer__social">
          <a class="social__link" href="#">
            <img class="social__img" src={inst} alt="instagram icon"/>
          </a>
          <a class="social__link" href="#">
            <img class="social__img" src={tg} alt="telegram icon"/>
          </a>
          <a class="social__link" href="#">
            <img class="social__img" src={wh} alt="whatsapp icon"/>
          </a>
          <a class="social__link" href="#">
            <img class="social__img" src={fc} alt="facebook icon"/>
          </a>
        </div>

        <a class="footer__copy" href="#">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  </footer>
  )
}
