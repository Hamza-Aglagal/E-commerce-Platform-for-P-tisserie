import React from 'react'
import './../../assets/css/home/SecondSection.css'
import chefImg from './../../images/chef.png'
import img from './../../images/image.png'


const SecondSection = () => {
    return (
        <div className='SecondSection'>
            <div className='Titre'>
                <h1> Art of cakes </h1>
                <p> WE CREATE DELICIOUS MEMORIES </p>
                <h5>  Turtit is run by a team of passionate bakers who pride
                    themselves on <br /> using only the freshest and highest quality
                    ingredients to <br /> create their delicious treats.
                </h5>
                <div className='profile-chef'>
                    <h2> Chef Cook</h2>
                    <img src={chefImg} alt='chef img' />
                </div>
            </div>

            <div className='image'>
                <img src={img}  alt='image cack' />
            </div>
        </div>
    )
}

export default SecondSection