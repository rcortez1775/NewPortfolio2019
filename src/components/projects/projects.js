import { Component } from "react";
import React from 'react';
import './projects.css';
import Mobile from '../../images/mobile.png';
import Monitor from '../../images/monitor.png';
import KeepPUP from '../../images/keepPUP.png';
import CodeCard from '../../images/codeCard.png';
import Circle from '../../images/circle.png';
import Doomsday from '../../images/doomsday.png';


class Projects extends Component {
    render() {  
        return(
            <div className="body">
                <div className="main">
                    <div className="pushUP">
                        <p className="education textSkills">&emsp;&emsp;MOBILE APPS&emsp;&emsp;</p>
                    </div>
                    <div className="container"> 
                        <div className="projectBox" id="projectHover">
                            <div className="projectIMG" onClick={() => window.open("https://github.com/rcortez1775/ReactkeepPUP", "_blank")}>
                                <img className="image" src={KeepPUP} alt="keepPUP"/>
                            </div>
                            <div className="devIconBox">
                                <img className="devIcon" src={Mobile} alt="mobile"/>
                            </div>
                            <div className="projectInfo">
                                <p className="projectTitle">KeepPUP</p>
                                <p className="projectAbout">Mobile App Design & Development</p>
                            </div>
                        </div>

                        <div className="projectBox" id="projectHover">
                            <div className="projectIMG" onClick={() => window.open("https://github.com/The-Gummy-Bears/CodeCards", "_blank")}>
                                <img className="image" src={CodeCard} alt="codecard"/>
                            </div>
                            <div className="devIconBox2">
                                <img className="devIcon2" src={Monitor} alt="Monitor"/>
                            </div>
                            <div className="projectInfo">
                                <p className="projectTitle">MyCodeCard</p>
                                <p className="projectAbout">Website Design & Development</p>
                            </div>
                        </div>

                        <div className="projectBox" id="projectHover">
                            <div className="projectIMG" onClick={() => window.open("https://github.com/The-Real-Tardigrades/Contextual-Geolocation", "_blank")}>
                                <img className="image" src={Circle} alt="circle"/>
                            </div>
                            <div className="devIconBox2">
                                <img className="devIcon2" src={Monitor} alt="Monitor"/>
                            </div>
                            <div className="projectInfo">
                                <p className="projectTitle">Circle of Friends</p>
                                <p className="projectAbout">Website Design & Development</p>
                            </div>
                        </div>

                        <div className="projectBox" id="projectHover">
                            <div className="projectIMG" onClick={() => window.open("https://github.com/Rocky-Road/project1", "_blank")}>
                                <img className="image" src={Doomsday} alt="doomsday"/>
                            </div>
                            <div className="devIconBox2">
                                <img className="devIcon2" src={Monitor} alt="monitor"/>
                            </div>
                            <div className="projectInfo">
                                <p className="projectTitle">Doomsday Database</p>
                                <p className="projectAbout">Website Design & Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="container3">
                        <p className="education textSkills one">&emsp;&emsp;ARTICLES&emsp;&emsp;</p>
                        <div>
                            <div className="projectBox" id="projectHover">
                                <div className="oop" onClick={() => window.open("https://medium.com/@robertanthonycortez/an-overview-of-oop-494813c40039", "_blank")}></div>
                                <div className="projectInfo">
                                    <p className="projectTitle">OOP</p>
                                    <p className="projectAbout">Intro to Object Oriented Programming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;