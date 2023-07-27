import React from 'react'
import ben from '../../assets/images/ben.png'
import './Benefits.css'

export const Benefits = () => {
  return (
    <section class="benefits">
    <div class="container">
      <div class="benefits__inner">
      <img width='450' height='500' data-wow-delay="2s" class="benefits__images wow animate__fadeInUp" src={ben} alt="car"/>
        <div class="benefits__content">
          <h2 class="title benefits__title">Вибро</h2>
          <ul class="benefits__list">
            <li class="benefits__item">
              <p class="benefits__item-num">10 </p>
              <p class="benefits__item-title">миллионов растений:</p>
              <p class="benefits__item-text">
              На нашей планете обитает около 10 миллионов различных растений, и каждое из них играет свою важную роль в экосистемах.
              </p>
            </li>
            <li class="benefits__item">
              <p class="benefits__item-num">80%</p>
              <p class="benefits__item-title">лесных угодий исчезли: </p>
              <p class="benefits__item-text">
              За последние несколько столетий 80% лесных угодий на Земле исчезли из-за деятельности человека.
              </p>
            </li>
            <li class="benefits__item">
              <p class="benefits__item-num">70%</p>
              <p class="benefits__item-title">пморских экосистем</p>
              <p class="benefits__item-text">
              ин из самых ошеломляющих фактов о состоянии нашей планеты заключается в том, что 70% морских экосистем подвержены загрязнению мусором.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  )
}
