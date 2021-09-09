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
                    <h1 style={{textAlign: 'center'} ,{color:'#ffd051'}}>Marrying Crypto Liquidity with Gold Returns</h1>
                    <div className='light'>
                    <h3 style={{textAlign: 'center'},{color:'#111'}}>
                    Golden Deer Capital has created a hybrid cryptocurrency, 
                    GDC backed by 100% physical gold. </h3>
                    <h3 style={{textAlign: 'center'},{color:'#111'}}>
                    Gold-backed tokens can benefit from both 
                    gold and cryptocurrency features, while maintaining the potential for price appreciation from both markets.
                    </h3>
                    <h3 style={{textAlign: 'center'},{color:'#111'}}>
                    The company has pledged to back the tokens 100% by reserves, with its own mining projects across the world.
                    </h3>
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
