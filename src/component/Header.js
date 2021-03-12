import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { CgMenuLeft} from 'react-icons/cg'
import pdf from '../docs/Anuoluwapo - New Technical Resume(2020).pdf';


function Header({toggle}) {
    return (
        <div className="header">
                <div>
                    <CgMenuLeft onClick={toggle} className="menuBar" />
                </div>
            <div className="header__container">
                
                <div className="header__links__container">
                    <Link className="header__link" to="/projects">Projects</Link>
                    <Link className="header__link" to="/about">About</Link>
                </div>
                <div>
                    <Link className="header__logo" to="/">O.A.G</Link> 
                </div>
                <div className="header__links__container"> 
                    <a className="header__link" href={pdf} target="_blank" rel="noreferrer" >Resume</a>
                    <a className="header__link" href="https://www.linkedin.com/in/anuoluwapo-oyetibo" rel="noreferrer" target="_blank">Linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default Header
