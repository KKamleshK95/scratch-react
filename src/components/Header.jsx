import { useState } from 'react'
import './header.css'
import Restuarant from "./Restuarants"
const Header = () =>{
const [loginStatus, setloginStatus  ] = useState("login")
    return(
        <div className="header-container">
            <div className="logo">
logo
            </div>

            <div className="nav-items">
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li><button>{loginStatus}</button></li>
            </ul>
            </div>
        </div>
    )
}

export default Header