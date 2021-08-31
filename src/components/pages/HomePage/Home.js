import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSection1 from '../../HeroSection1'
import HeroSectionContact from '../../HeroSectionContact'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive} from './Data'

function Home() {
    return (
        <>    
            <HeroSection {...homeObjOne} />      {/* THESE ARE THE FOUR SECTIONS OF THE HOME */}
            <HeroSection1 {...homeObjThree} />
            <HeroSection1 {...homeObjTwo} />
            <HeroSection1 {...homeObjFour} />
            <HeroSectionContact {...homeObjFive} />

        </>
    )
}

export default Home
