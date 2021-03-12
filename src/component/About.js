import React from 'react'
import './About.css';
import Temp from '../images/bg1.png'
import { SiCplusplus, SiPhp, SiJava, SiReact, SiHtml5, SiCss3, SiJavascript, SiFirebase, SiHeroku, SiMysql, SiMongodb } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io'
import { DiNodejs, DiGit, DiGithubFull } from 'react-icons/di';
// import Express from '../images/expressJs.png'
import ContactForm from './ContactForm';

function About() {
    return (
        <div className="about"> 
            <div className="about__top">
                <img className="about__image" src={Temp} alt="" />
                <div>
                    <h6 className="about__h6">Aspiring Frontend Developer and Fullstack Developer</h6>
                    <h3>NYC student and developer.</h3>
                    <p>A Little About Me. My name is Anuoluwapo Oyetibo and I am a developer based in New York. I was born and raised in Nigeria. I moved to America at the age of 15 with my family for a better education.</p>
                    <p>
                        My passion for developing software started somewhere around my second year in college, I always had an intrest in computers and tech, but it never fully dawned on me until I took a web development class. 
                        Ever since, I have fully immersed myself in an ocean of technology. By enrolling in multiple development classes and taking on some development projects. I have gained much knowledge in the disclipline of software development and web development. 
                        While there is still room to expand my knowledge I am eager to practicalize what I have learned thus far and build real world applications.
                    </p>
                </div>
            </div>

            <div className="about__mid">
                <h3 className="skills__h3">Skills</h3>
                <div className="skills__container">
                    <div className="skills__div">
                        <h4>Programming Languages</h4>
                        <span><SiCplusplus className="skills__icon" /></span>
                        <span><SiPhp className="skills__icon" /></span>
                        <span><SiJava className="skills__icon" /></span>
                        <span><IoLogoJavascript className="skills__icon" /></span>
                    </div>

                    <div className="skills__div">
                        <h4>Frontend</h4>
                        <span><SiReact className="skills__icon" /></span>
                        <span><SiHtml5 className="skills__icon" /></span>
                        <span><SiCss3 className="skills__icon"/></span>
                        <span><SiJavascript className="skills__icon" /></span>
                    </div>

                    <div className="skills__div">
                        <h4>Backend</h4>
                        <span><DiNodejs className="skills__icon" /></span>
                        <span><SiFirebase className="skills__icon"/></span>
                        <span><SiJavascript className="skills__icon" /></span>
                    </div>

                    <div className="skills__div">
                        <h4>Version Control</h4>
                        <span><DiGit className="skills__icon" /></span>
                        <span><DiGithubFull className="skills__icon" /></span>
                    </div>

                    <div className="skills__div">
                        <h4>Hosting Platforms</h4>
                        <span><SiHeroku className="skills__icon" /></span>
                        <span><SiFirebase className="skills__icon" /></span>
                    </div>

                    <div className="skills__div">
                        <h4>Databases</h4>
                        <span><SiMongodb className="skills__icon" /></span>
                        <span><SiFirebase className="skills__icon" /></span>
                        <span><SiMysql className="skills__icon" /></span>
                    </div>
                </div>
            </div>

            <div className="contact">
                <ContactForm />                
            </div>
        </div>
    )
}

export default About
