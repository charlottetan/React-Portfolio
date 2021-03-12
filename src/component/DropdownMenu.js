import React, { useState, useEffect } from 'react'
import './DropdownMenu.css';
import { Link } from 'react-router-dom';


function DropdownMenu({isOpen, toggle}) {
    const [ scrollState, setScrollState] = useState(false);
    const _emptyFunctionPointer = () => {};
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                setScrollState(true);
                
            }
            else{
                setScrollState(false);
                console.log(scrollState)
            }
        })
        return () => {
            window.removeEventListener("scroll", _emptyFunctionPointer);
        }
    },[scrollState])
    
    return (
        <div isOpen={isOpen} onClick={toggle} className={isOpen ? "toggle" : "dropdownmenu"} >
            <div className={`dropdownmenu__container ${scrollState && "hide"}`}>
                <Link className="dropdownmenu__link" to="/">Home</Link>
                <Link className="dropdownmenu__link" to="/about">About</Link>
                <Link className="dropdownmenu__link" to="/projects">Projects</Link>
                <Link className="dropdownmenu__link" to="/about">Resume</Link>
                <a className="dropdownmenu__link" href="https://www.linkedin.com/in/anuoluwapo-oyetibo">LnkedIn</a>
            </div>
        </div>
    )
}

export default DropdownMenu
