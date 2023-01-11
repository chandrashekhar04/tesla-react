import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    let [MenuOpen, setMenu] = useState(false)

    function OpenMenu(e){
        e.preventDefault()
        setMenu(true)
    }

    function CloseMenu(){
        setMenu(false)
    }

    return (
        <>
        <header>
            <div><img src="teslaImages/logo.svg" alt=""/></div>
            <nav>
                <ul>
                    <li><a href="">Model S</a></li>
                    <li><a href="">Model 3</a></li>
                    <li><a href="">Model X</a></li>
                    <li><a href="">Model Y</a></li>
                    <li><a href="">Solar Roof</a></li>
                    <li><a href="">Solar Panel</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Account</a></li>
                    <li><a href="" onClick={OpenMenu}>Menu</a></li>
                </ul>
            </nav>
            <div className='sideMenu' style={{right:(MenuOpen == false) ? "-20rem": "0rem" }}>
                <ul>
                    <CloseIcon className='close' onClick={CloseMenu}/>
                    <li><a href="">Model S</a></li>
				    <li><a href="">Model 3</a></li>
				    <li><a href="">Model X</a></li>
				    <li><a href="">Model Y</a></li>
				    <li><a href="">Solar Roof</a></li>
				    <li><a href="">Solar Panel</a></li>
				    <li><a href="">Existing Inventory</a></li>
				    <li><a href="">Used Inventory</a></li>
				    <li><a href="">Trade In</a></li>
				    <li><a href="">Test Drive</a></li>
				    <li><a href="">Powerwall</a></li>
				    <li><a href="">Commercial Energy</a></li>
                </ul>
            </div>
        </header>
        </>
      )
}

export default Header