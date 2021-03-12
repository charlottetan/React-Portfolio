import React from 'react';
import './Home.css'
// import Image from '../images/bg3.svg'
import Typical from 'react-typical'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
           <div className="home__top">
                <div>
                    <h2 className=" home__h2 font">Hi <span>There </span> I'm </h2>
                    <h1 className="home__h1 font">Anuoluwapo Oyetibo</h1>
                    <Typical 
                        steps={['Student', 2000, 'Future Software Developer', 2000, 'Continious Learner', 2000, 'Aspiring FrontEnd Developer', 2000, 'Aspiring Full Stack Developer', 2000]}
                        loop={Infinity}
                        wrapper="h4"
                        className="home__typewritter"
                    />
                    <div className="home__info">
                        <p>Computer Science Student at the City University of New York, College of Staten Island. Enthusiastic about technology, developing and creative.</p>
                        <Link to="/about" className="home__btn">Learn more</Link>
                    </div>
                </div>
               
           </div>
        </div>
    )
}

export default Home
