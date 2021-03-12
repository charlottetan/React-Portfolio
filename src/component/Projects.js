import React from 'react';
import './Projects.css'
import Image from '../images/bg5.svg'
import { CgMouse } from 'react-icons/cg';
import ProjectBox from './ProjectBox';
import SpotifyClone from '../images/spotifyClone.JPG';
import AmazonImage from '../images/amazonClone.JPG'
import TodoImage from '../images/todoApp.JPG';
import NetflixImage from '../images/netflixClone.JPG'
import RockPaperSissorsImage from '../images/rps.png'
import BookmartImage from '../images/bkR.PNG';
import VintageCar from '../images/vintage-car.JPG'



function Projects() {
    return (
        <div className="projects">
            <div className="project__top">
                <img className="project__image" src={Image} alt="" />
                <h5 className="project__h5">Check Out Some of my Projects Below</h5>
                <CgMouse className="project__icon" />
            </div>

            <div className="projects__container">
                <ProjectBox 
                    image = {SpotifyClone}
                    title="Spotify Clone"
                    description="Spotify clone built with ReactJs and firebase."
                    link1="https://github.com/Aoyetibo557/React-spotify-clone"
                    link2="https://spotify-clone-142dc.web.app/"
                /> 

                <ProjectBox 
                    image = {AmazonImage}
                    title="Amazon Clone"
                    description="Amazon clone built with ReactJs and firebase. Used Firebase Authentication for user login and signup."
                    link1="https://github.com/Aoyetibo557/React-Amazon-Clone"
                    link2="https://clone-9fd28.web.app/"
                /> 

                <ProjectBox 
                    image = {TodoImage}
                    title="Todo App"
                    description="CRUD App built with react js, and hosted on heroku."
                    link1="https://github.com/Aoyetibo557/React-Todo-App"
                    link2="https://reactbuildpack-todo-app.herokuapp.com/"
                /> 

                <ProjectBox 
                    image = {NetflixImage}
                    title="Netflix Clone"
                    description="Netflix Clone built with ReactJs using MovielistDb API, and hosted on firebase."
                    link1="https://github.com/Aoyetibo557/Netflix-Clone"
                    link2="https://netflix-clone-ad612.web.app/"
                />

                <ProjectBox 
                    image = {VintageCar}
                    title="Vintage Car Website"
                    description="Dynamic and Responsive website, built with HTML, CSS and JS. "
                    link1="https://github.com/Aoyetibo557/creative-page"
                    link2="https://vintage-car.herokuapp.com/index.html"
                />

                <ProjectBox 
                    image = {RockPaperSissorsImage}
                    title="Rock Paper Scissors Web Game"
                    description="Mini web game of the popular game, rock paper and scissors, built with HTML, CSS and JS. Hosted on heroku."
                    link1="https://github.com/Aoyetibo557/Rock-Paper-Scissors"
                    link2="https://rps-gameapp.herokuapp.com/"
                /> 

                <ProjectBox 
                    image = {BookmartImage}
                    title="Bookmart Website"
                    description="Mini web store where students can purchase books at a discounted price. CSC 226 Final Project, built with HTML, CSS and JS."
                    link1="https://github.com/Aoyetibo557/Csc-226-Final-Project-BookMart-"
                    link2=""
                />
            </div>
        </div>
    )
}

export default Projects
