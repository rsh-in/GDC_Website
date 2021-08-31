import React from 'react'
import { Button } from './Button'
// import { Link } from 'react-router-dom'
import './HeroSection.css'
import Pdf from './GDC.pdf';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
    img, alt, imgStart
}) {
    return (
        <>
        <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
            <div className="container">
                <div className="row home__hero-row" 
                style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className='col'>
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h3>Email :  goldendeercapital@gmail.com </h3>‎   ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
                            <h3>Telegram : </h3> ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎   ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
                            <h3>Whatsapp :</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection
