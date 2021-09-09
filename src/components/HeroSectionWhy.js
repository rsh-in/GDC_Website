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
            <div style={{textAlign:'center'}}>
                 
                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    {/* <h1 style={{textAlign: 'center'} ,{color:'#ffd051'}}></h1> */}
                    <div className='light'>
                    <h3 style={{textAlign: 'center'},{color:'#111'}}>
                    {/* We are an exclusive community of members who are passionate about taking Digital Gold Mainstream. */}
                    </h3>
                    <h2 style={{textAlign: 'center'},{color:'#111'}}>
                    GDC is an High Investment Opportunity for the common retail investors to buy GOLD without any MIDDLEMAN.
                    </h2>
                    <h2 style={{textAlign: 'center'},{color:'#111'}}>
                    Tokenizing GOLD allows investors to Easily Transfer Ownership and do instant Settlements.
                    </h2>
                    <h2 style={{textAlign: 'center'},{color:'#111'}}>
                    Enjoy the benefits of Both Worlds now by investing in the GDC Token.
                    </h2>
                    <h2 style={{textAlign: 'center'},{color:'#111'}}>
                    And Be a part of the Exclusive community of Gold Enthusiasts.
                    </h2>
                    </div>

                 {/* </div> */}

                   {/* <div className="row home__hero-row"  */}
                {/* // style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}> */}
                    {/* <div className='col'>
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h3>Email :  goldendeercapital@gmail.com </h3>‎   ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  */}
                        {/* </div> */}
                    {/* </div> */}

                    {/* <div className='col'>
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" /> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
        </>
    )
}

export default HeroSection
