import React from 'react';
import './ProjectBox.css';



function ProjectBox({image, title, description, link1, link2}) {
    return (
        <div className="projectbox">
            <img className="projectbox__image" src={image} alt="" />
            <div className="projectbox__info">
                <p className="projectbox__title">{title}</p>
                <p className="projectbox__description">{description}</p>
                <div className="projectbox__links">
                    {link1 === "" ? '' :  <p><a className="projectbox__link" href={link1} rel="noreferrer" target="_blank">Source Code</a></p>}
                    {link2 === "" ? '' : <p><a className="projectbox__link" href={link2} rel="noreferrer" target="_blank">View Live</a></p>}
                   
                </div>
            </div>
        </div>
    )
}

export default ProjectBox
