import React from 'react'
import HeroSection from '../../HeroSection'
import HeroSection1 from '../../HeroSection1'

import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function Products() {
    return (
        <>    
            <HeroSection1 {...homeObjTwo} />      {/* THESE ARE THE FOUR SECTIONS OF THE HOME */}
            
        </>
    )
}

export default Products
