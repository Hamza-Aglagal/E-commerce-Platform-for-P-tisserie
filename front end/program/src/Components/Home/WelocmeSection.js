import React from 'react'
import NavBar from './../utility/NavBar'
import './../../assets/css/home/WelocmeSection.css'
import bg from './../../images/bg-welcome-1.png'
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';

import imgCack from './../../images/cack1.png'
import cack2 from './../../images/cack2.png'
import cack3 from './../../images/cack3.png'
import cack4 from './../../images/cack4.png'
import cack5 from './../../images/cack5.png'


const WelocmeSection = () => {
    return (
        <div className='WelocmeSection'>
            <NavBar />
            <img className='bg-welcome' src={bg} alt='img' />
            <img className='img-cack' src={imgCack} alt='img' />

            <img className='imgcack-2' src={cack2}  alt='cack2' />
            <img className='imgcack-3' src={cack3}  alt='cack3' />
            <img className='imgcack-4' src={cack4}  alt='cack4' />
            <img className='imgcack-5' src={cack5}  alt='cack5' />

            <div className='welcome-container'>
                <div className='icons-container'>
                    <div className='line'>  </div>

                    <a href='#'>
                        <BsInstagram className='icon' />
                    </a>
                    <a href='#'>
                        <CiFacebook className='icon' />
                    </a>
                    <a href='#'>
                        <BsTwitter className='icon' />
                    </a>

                    <div className='line'>  </div>
                </div>

                <div className='titre-container'>
                    <p className='titre'>
                        <span className='word-1'> Welcome </span> <br/>
                        <span className='word-2'> to patesserie </span>
                        <span className='word-3'> Tourtite </span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default WelocmeSection