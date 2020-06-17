import { Component } from "react";
import React from 'react';
import './landingpage.css';
import Robert from '../../images/robertc.png';
import Linkedin from '../../images/linkedin.png';
import Git from '../../images/git.png';
import Gmail from '../../images/gmail.png';




class LandingPage extends Component {
    render() {
        return(
            <div className="body">
                <div className="imageIntro">
                    <img className="myLogo" src={Robert} alt="icon"/>
                    <p className="name">Robert Cortez</p>
                    <p className="intro">Developer + Designer</p>
                    <div>
                        <img className="icon" id="iconHover" src={Git} alt="Git" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/> 
                        <img className="icon" id="iconHover" src={Gmail} alt="Gmail" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/> 
                        <img className="icon" id="iconHover" src={Linkedin} alt="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;