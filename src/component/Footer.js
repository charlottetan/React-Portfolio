import React from 'react';
import './Footer.css';
import { VscGithub, VscTwitter } from 'react-icons/vsc'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__icons">
                <a className="footer__link" href="https://github.com/aoyetibo557" target="_blank" rel="noreferrer"><VscGithub /></a>
                <a className="footer__link" href="https://www.linkedin.com/in/anuoluwapo-oyetibo/" target="_blank" rel="noreferrer" ><FaLinkedin /></a>
                <a className="footer__link" href="https://www.instagram.com/gahbby_557/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
                <a className="footer__link" href="https://twitter.com/gabeoyetibo557" target="_blank" rel="noreferrer" ><VscTwitter /></a>
            </div>
            <div>
                <p className="footer__p">O.A.G Studio &copy; 2021</p>
            </div>
        </div>
    )
}

export default Footer
