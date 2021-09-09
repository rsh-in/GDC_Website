import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSection1 from '../../HeroSection1'
import HeroSectionToken from '../../HeroSectionToken'

import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo,homeObjSeven} from './Data'

function Products() {
    return (
        <>  
            <HeroSectionToken {...homeObjSeven} />
            <HeroSection1 {...homeObjTwo} />    
            
        </>
    )
}

export default Products
