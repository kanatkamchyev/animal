import React, { Children } from 'react'
import Header from './Header/Header'
import { Footer } from './Footer/Footer'

export const LayOut = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
