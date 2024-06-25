import React from 'react'
import HeroImage from '../../assests/img/hero-seven-right-image.png';
import { Link } from 'react-router-dom';
export default function home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left-home">
                        <h1 className='main-heading'> <span className='grediant-color'>Metacubix</span> Web & App <span className='grediant-color'>Development Services</span> - Empowering Your <span className='grediant-color'>Business</span> </h1>
                        <div className='main-text'>Metacubix's dedicated team offers comprehensive web and app development services to empower your business.</div>
                        <Link><button className="themeButton">Contact Us</button></Link>
                    </div>
                    <div className="col-lg-6"><img className='hero-img' src={HeroImage} alt="" /></div>
                </div>
            </div>
        </>
    )
}
