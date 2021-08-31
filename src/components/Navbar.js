import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import WebFont from 'webfontloader';


function Navbar() {
    const [click,setClick] = useState(false)
    const[button, setButton] = useState(true)
    
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <=960 ) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Crimson']
          }
        });
       }, []);
      

      
    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar" style={{fontFamily: 'Crimson'}} >
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <GiGoldBar className='navbar-icon'/> */}

                        GOLDEN DEER COIN
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutus' className="nav-links" onClick={closeMobileMenu}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                PRODUCTS
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/SignUp' className='btn-link' >
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ):(
                                <Link to='/SignUp' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' >SIGN UP</Button>
                                </Link>
                            )}

                        </li>
                    </ul>
                </div>
            </div>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
