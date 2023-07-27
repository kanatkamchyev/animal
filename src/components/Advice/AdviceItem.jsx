import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import './Advice.css'

export const AdviceItem = ({ item, index }) => {

    const [hide, setHidden] = useState(false)


    return (
        <div className={hide ? 'advice__item active' : 'advice__item'} key={index}>
            <div className="advice__item-inner">
                <div className="advice__inner-time" onClick={() => setHidden(!hide)} >
                    <div className="advice__title">
                        {item.title}
                    </div>
                    <div className="advice__icon">
                        {
                            hide ?
                                <AiOutlineMinusCircle />
                                :
                                <AiOutlinePlusCircle />

                        }
                    </div>
                </div>

                {
                    hide ?
                        <div className="advice__description">
                            {item.description}
                        </div>
                        :
                        null
                }
            </div>

        </div>
    )
}
