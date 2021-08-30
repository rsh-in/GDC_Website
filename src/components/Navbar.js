import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiGoldBar } from 'react-icons/gi'      // THAT GOLD BAR ICON
import {FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'

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
        showButton();
    },[]);

    window.addEventListener('resize', showButton)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        <GiGoldBar className='navbar-icon'/>
                        GOLDEN DEER COIN
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links">
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-links">
                                PRODUCTS
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ):(
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' >SIGN UP</Button>
                                </Link>
                            )}
                            
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
