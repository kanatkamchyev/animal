import React from 'react'
import './Services.css'

export const Services = () => {
    return (
        <section class="services">
            <div class="container">
                <h2 class="title">"ЭкоБаланс: Гармония Природы"</h2>
                <div class="services__inner">
                    <div class="services__content">
                        <div class="services__content-box">
                            <h6 class="services__content-title">
                             Сохранение Биоразнообразия
                            </h6>
                            <div class="services__content-textbox">
                                <p class="services__content-text">
                                В ЭкоБалансе мы стремимся предотвратить и смягчить потери биоразнообразия, сохраняя уникальные экосистемы и обитателей нашей планеты. Наш подход основан на научных исследованиях и участии сообщества, чтобы защитить редкие виды, восстановить нарушенные местообитания и обеспечить сбалансированное взаимодействие человека и природы.
                                </p>
                                <p class="services__content-text">
                                Важно сохранить драгоценное многообразие жизни для более устойчивого и просперирующего будущего. Присоединяйтесь к нам в этой независимой борьбе за сохранение природных сокровищ нашей планеты.
                                </p>
                            </div>
                        </div>
                        <div class="services__content-box">
                            <h6 class="services__content-title">
                                Устойчивость для Земли
                            </h6>
                            <div class="services__content-textbox">
                                <p class="services__content-text">
                                    Мы осознаем, что устойчивость - это ключевой фактор для благополучного будущего нашей планеты. В ЭкоБалансе мы поддерживаем инициативы, направленные на экологически ответственное использование природных ресурсов, сокращение выбросов парниковых газов и развитие устойчивых экономических практик. Наша цель - обеспечить устойчивость окружающей среды и общества, чтобы наследие природы оставалось неприкосновенным для будущих поколений. Присоединяйтесь к ЭкоБалансу - вместе мы делаем нашу планету здоровой, устойчивой и процветающей для всех живых существ.
                                </p>
                            </div>
                            <a class="button button--decor" href="#">КОНСУЛЬТАЦИЯ ЭКСПЕРТА</a>
                        </div>
                    </div>
                    <ol class="services__list">
                        <li data-wow-delay="1s" class="services__item wow animate__fadeInRight">
                            <p class="services__item-title">"Эко-Спасатели"</p>
                            <p class="services__item-text">Защитники природы и биоразнообразия.</p>
                        </li>
                        <li data-wow-delay="1.2s" class="services__item wow animate__fadeInRight">
                            <p class="services__item-title">"Зеленая Планета"</p>
                            <p class="services__item-text"> Устойчивое будущее для Земли.</p>
                        </li>
                        <li data-wow-delay="1.4s" class="services__item wow animate__fadeInRight">
                            <p class="services__item-title">"Экологичный выбор"</p>
                            <p class="services__item-text">Поддержка устойчивого образа жизни.</p>
                        </li>
                        <li data-wow-delay="1.6s" class="services__item wow animate__fadeInRight">
                            <p class="services__item-title">"Биоразнообразие важно" </p>
                            <p class="services__item-text">Забота о разнообразии видов.</p>
                        </li>
                        <li data-wow-delay="1.8s" class="services__item wow animate__fadeInRight">
                            <p class="services__item-title">"Земля в безопасности"</p>
                            <p class="services__item-text">Сохранение природы и почвы.</p>
                        </li>
                        <li data-wow-delay="2s" class="services__item wow animate__fadeInRight">
                            <p class="services__item-title">Будущее Земли в Наших Руках:</p>
                            <p class="services__item-text">Оформление автомобиля в Украине</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

    )
}
