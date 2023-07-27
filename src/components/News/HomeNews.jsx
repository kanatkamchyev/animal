import React from 'react'
import './HomeNews.css'

export const HomeNews = ({item}) => {
  return (
    <div className="HomeNEws">
        <dsiv className="HomeNEws__box">
            <div className="HomeNews_inner">
                <img width='200' src={item.photo} alt="" />
                <div className="homeNews__title">
                {item.title}
                </div>
                <div className="homeNews__describe">
                {item.description}
                </div>

            </div>

        </dsiv>
    </div>
  )
}
