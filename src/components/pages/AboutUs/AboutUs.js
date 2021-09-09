import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSectionAbout from '../../HeroSectionAbout'
import HeroSection1 from '../../HeroSection1'
import { homeObjSix } from '../HomePage/Data'
import { homeObjThree } from '../HomePage/Data'


function AboutUs() {
    return (
        <>    
            <HeroSectionAbout {...homeObjSix} />
            <HeroSection1 {...homeObjThree} />


        </>
    )
}

export default AboutUs
