import { Component } from "react";
import React from 'react';
import './landingpage.css';
// import Foundation from '../../images/foundation.png';
// import Library from '../../images/library.png';
// import Server from '../../images/database.png';
// import Graphic from '../../images/graphic.png';
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
                    <div className="iconBox">
                        <img className="icon" id="iconHover" src={Git} alt="Git" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/> 
                        <img className="icon" id="iconHover" src={Gmail} alt="Gmail" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/> 
                        <img className="icon" id="iconHover" src={Linkedin} alt="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
                    </div>
                </div>
                
                {/* <div className="main">
                    <div className="container">
                        <div class="cardBox">
                            <div class="iconBox">
                                <img className="skillsIcon" src={Foundation} alt="Foundation"/>
                                <p className="boxTitle">Foundation</p>
                            </div> 
                            <div className="boxCont">
                                <span className="boxList">ES6 JavaScript</span>
                                <br></br>
                                <span className="boxList">Nightmare</span>
                                <br></br>
                                <span className="boxList">HTML(5)</span>
                                <br></br>
                                <span className="boxList">CSS(3)</span>
                                <br></br>
                                <span className="boxList">Jest</span>
                                <br></br>
                                <span className="boxList">Git</span>
                            </div>      
                        </div>
                        <div class="cardBox">
                            <div class="iconBox">
                                <img className="skillsIcon" src={Library} alt="Library"/>
                                <p className="boxTitle">Libraries</p>
                            </div>
                            <div class="boxCont">
                                <span className="boxList">Material-UI</span>
                                <br></br>
                                <span className="boxList">Bootstrap</span>
                                <br></br>
                                <span className="boxList">ReactJS</span>
                                <br></br>
                                <span className="boxList">jQuery</span>
                            </div>
                        </div>

                        <div class="cardBox">
                            <div class="iconBox">
                                <img className="skillsIcon" src={Server} alt="Foundation"/>
                                <p className="boxTitle">Server-Side</p>
                            </div>
                            <div className="boxCont">
                                <span className="boxList">MongoDB</span>
                                <br></br>
                                <span className="boxList">Express</span>
                                <br></br>
                                <span className="boxList">NodeJS</span>
                                <br></br>
                                <span className="boxList">Heroku</span>
                                <br></br>
                                <span className="boxList">MySql</span>
                            </div>  
                        </div>

                        <div class="cardBox">
                            <div class="iconBox">
                                <img className="skillsIcon" src={Graphic} alt="Graphic"/>
                                <p className="boxTitle">UI/UX</p>
                            </div>
                            <div className="boxCont">
                                <span className="boxList">MindManager</span>
                                <br></br>
                                <span className="boxList">Balsamiq</span>
                                <br></br>
                                <span className="boxList">Figma</span>
                            </div>  
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default LandingPage;