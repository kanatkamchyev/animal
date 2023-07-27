import React, { useEffect, useState } from 'react'
import { Advice } from '../../components/Advice/Advice'
import { LayOut } from '../../components/LayOut'
import axios from 'axios'
import { HomeNews } from '../../components/News/HomeNews'
import '../../components/News/HomeNews.css'

export const Newspage = () => {

  const [news, setNews] = useState([])
  useEffect(() => {
    axios('https://ecohaven.pythonanywhere.com/api/v1/news/').then((res) => setNews(res.data))

  },[])

  return (
    <div className="Newspage">
      <LayOut>
        <div className="HomeNews__all">
        {
          news.map((item) => <HomeNews item={item} key={item.id} />)
        }
        </div>
      
        
      </LayOut>

      
    </div>
  )
}
