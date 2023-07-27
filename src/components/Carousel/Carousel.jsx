import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

export const Carousel = () => {
    const settings = {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const slidesData = [
        {
            imgSrc: 'https://fullhdoboi.ru/wp-content/uploads/_ph/6/550981372.jpg',
            title: 'Зеленый Рай',
            description: 'Лесная Гармония',
        },
        {
            imgSrc: 'https://krot.info/uploads/posts/2021-11/1637766385_1-krot-info-p-krasota-okeana-pod-vodoi-peizazh-krasivoe-1.jpg',
            title: '"Синие Глубины"',
            description: 'Океанская Вдохновение',
        },
        {
            imgSrc: 'https://p0.pikist.com/photos/1021/373/desert-sand-dune-gobi-mongolia-landscape-moon.jpg',
            title: '"Золотая Бесконечность"',
            description: 'Пустынная Прекрасность',
        },
        {
            imgSrc:  'https://www.russiadiscovery.ru/storage/resolutions/main_img/big/tours/3833/high_res_img_643e72010a7e4.jpg',
            title: '"Вершины Величия"',
            description: 'Горная Магия',
        },
        {
            imgSrc: 'https://snegir.org/upload/post-foto/don/9.jpg',
            title: '"Тихий Поток"',
            description: 'Река Исцеления',
        },
        {
            imgSrc: 'https://c4.wallpaperflare.com/wallpaper/204/992/835/spectacular-green-field-wallpaper-preview.jpg',
            title: '"Луговая Симфония"',
            description: 'Поля Зеленеют',
        },
    ];

    return (

        <section class="carousel">
            <div class="container">
                <h2 class="title">
                    Природа в Картинках
                </h2>
                <div class="carousel__inner">

                    <Slider {...settings}>
                        {slidesData.map((slide, index) => (
                            <div className="carousel__item" key={index}>
                                <div className="carousel__item-box">
                                    <img className="carousel__item-img" src={slide.imgSrc} alt="" />
                                    <h4 className="carousel__item-title">{slide.title}</h4>
                                    <p className="carousel__item-text">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>


                    {/* <div class="carousel__item">
                        <div class="carousel__item-box">
                            <img class="carousel__item-img" src="images/carousel/1.jpg" alt="" />
                            <h4 class="carousel__item-title">"Зеленый Рай"</h4>
                            <p class="carousel__item-text">Лесная Гармония</p>
                        </div>
                    </div>
                    <div class="carousel__item">
                        <div class="carousel__item-box">
                            <img class="carousel__item-img" src="images/carousel/2.jpg" alt="" />
                            <h4 class="carousel__item-title"> "Синие Глубины"</h4>
                            <p class="carousel__item-text">Океанская Вдохновение</p>
                        </div>
                    </div>
                    <div class="carousel__item">
                        <div class="carousel__item-box">
                            <img class="carousel__item-img" src="images/carousel/3.jpg" alt="" />
                            <h4 class="carousel__item-title">"Золотая Бесконечность"</h4>
                            <p class="carousel__item-text">Пустынная Прекрасность</p>
                        </div>
                    </div>
                    <div class="carousel__item">
                        <div class="carousel__item-box">
                            <img class="carousel__item-img" src="images/carousel/1.jpg" alt="" />
                            <h4 class="carousel__item-title"> "Вершины Величия"</h4>
                            <p class="carousel__item-text">Горная Магия</p>
                        </div>
                    </div>
                    <div class="carousel__item">
                        <div class="carousel__item-box">
                            <img class="carousel__item-img" src="images/carousel/2.jpg" alt="" />
                            <h4 class="carousel__item-title"> "Тихий Поток"</h4>
                            <p class="carousel__item-text">Река Исцеления</p>
                        </div>
                    </div>
                    <div class="carousel__item">
                        <div class="carousel__item-box">
                            <img class="carousel__item-img" src="images/carousel/3.jpg" alt="" />
                            <h4 class="carousel__item-title">"Луговая Симфония"</h4>
                            <p class="carousel__item-text">Поля Зеленеют</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>


    )
}
