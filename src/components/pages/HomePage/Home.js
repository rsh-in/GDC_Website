import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSection1 from '../../HeroSection1'
import HeroSectionContact from '../../HeroSectionContact'
import HeroSectionAbout from '../../HeroSectionAbout'
import HeroSectionToken from '../../HeroSectionToken'
import HeroSectionWhy from '../../HeroSectionWhy'



import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive,homeObjSix,homeObjSeven, homeObjEight} from './Data'

function Home() {
    return (
        <>    
            <HeroSection {...homeObjOne} />      {/* THESE ARE THE SECTIONS OF THE HOME */}
            <HeroSectionAbout {...homeObjSix} />
            <HeroSection1 {...homeObjThree} />
            <HeroSectionToken {...homeObjSeven} />
            <HeroSection1 {...homeObjTwo} />
            <HeroSectionWhy {...homeObjEight} />
            <HeroSection1 {...homeObjFour} />
            <HeroSectionContact {...homeObjFive} />


        </>
    )
}

export default Home
