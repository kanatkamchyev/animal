import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Advice.css'
import { AdviceItem } from './AdviceItem'

export const Advice = () => {

    const [advice, setAdvice] = useState([])

    useEffect(() => {
        axios('https://ecohaven.pythonanywhere.com/api/v1/advices/').then((res) => setAdvice(res.data))
    }, [])



    return (
        <div className='Advice'>
            <div className="container">
                <div className="advice-title">
                    Советы для сохранения биоразнообразия и защиты природы:
                </div>
                <div className="advice__boxes">
                    {
                        advice.map((item, index) => <AdviceItem  item={item} index={index} />)
                    } 
                </div>
            </div>
        </div>
    )
}
