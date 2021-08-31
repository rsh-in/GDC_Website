import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSection1 from '../../HeroSection1'

import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function AboutUs() {
    return (
        <>    
            <HeroSection1 {...homeObjThree} />      {/* THESE ARE THE FOUR SECTIONS OF THE HOME */}

        </>
    )
}

export default AboutUs
