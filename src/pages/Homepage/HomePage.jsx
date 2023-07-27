import React from 'react'
import Header from '../../components/Header/Header'
import { Services } from '../../components/Services/Services'
import { Benefits } from '../../components/Benefits/Benefits'
import { Carousel } from '../../components/Carousel/Carousel'
import { Contact } from '../../components/Contacts/Contact'
import { Footer } from '../../components/Footer/Footer'
import { LayOut } from '../../components/LayOut'


export const HomePage = () => {
  return (
    <div className="Homepage">
      <LayOut>
      <Services />
      <Benefits/>
      <Carousel/>
      <Contact/>
      </LayOut>
    </div>

  )
}
