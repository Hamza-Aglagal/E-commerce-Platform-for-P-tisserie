import React from 'react'
import WelocmeSection from '../../Components/Home/WelocmeSection'
import SecondSection from '../../Components/Home/SecondSection'
import BreadMenu from '../../Components/Home/BreadMenu'
import ContactSection from '../../Components/Home/ContactSection'
import Footer from '../../Components/utility/Footer'

const Home = () => {
  return (
    <div>
        <WelocmeSection/>
        <SecondSection/>
        <BreadMenu/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Home