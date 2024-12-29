import React from 'react'
import './../../assets/css/home/ContactSection.css'
import map from '../../images/map.jpg'

const ContactSection = () => {
    return (
        <div className='ContactSection'>

            <div className='Sté-information'>
                <h1> Get in Touch </h1>
                <p className='textInfo'> 0528475890 </p>
                <p className='textInfo'> Turtit@boulangerie.com </p>
                <p className='textInfo'> 8G6G+FR8, Leqliaa </p>

                <h1> Hours </h1>
                <div className='time-job'>
                    <div> <p className='textInfo'> Monday - Friday  </p> <p className='textInfo'> 08:00am - 09-00pm </p> </div>
                    <div> <p className='textInfo'> Saturday  </p> <p className='textInfo'> 09:30am - 07-00pm </p> </div>
                    <div> <p className='textInfo'> Sunday  </p> <p className='textInfo'>  10:00am - 05-00pm </p> </div>
                </div>
            </div>

            <div className='map'>
                <div class="container-fluid">
                    <div class="map-responsive">
                        {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="450" frameborder="0" style={{border:'0'}} allowfullscreen></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2735.5515675983024!2d-9.450938418163151!3d30.28707987063858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sma!4v1684096859337!5m2!1sfr!2sma" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                {/* <img src={map} alt='map' /> */}
            </div>

        </div>
    )
}

export default ContactSection