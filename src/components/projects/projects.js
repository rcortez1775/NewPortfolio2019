import { Component } from "react";
import React from 'react';
import './projects.css';
import Therabody from '../../images/therabody.png';
import KeepPUP from '../../images/keepup.png';


class Projects extends Component {
    render() {  
        return(
            <div className="body">
                <div className="main">
                    <div className="pushUP">
                        <p className="education">MOBILE APPS</p>
                    </div>
                    <div className="container">
                        <div className="projectBox">
                            <p className="appTitle">THERABODY</p>
                            <p className="appDesc">Fusce nec aliquet nibh. Nam vel facilisis lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id euismod arcu. Aenean ut arcu vel mauris commodo commodo. Phasellus vitae volutpat urna, ut vehicula nunc. Phasellus malesuada ligula in lacus posuere gravida.
                            <br></br><span className="appCaps">Made with:</span> Bleep Bleep Bloop<br></br><span className="appCaps">Check out the code:</span> CD Git_Repository
                            </p>
                        </div>
                        <div className="projectBox">
                            <div className="therabodyCont">
                                <img className="therabodyMobile" src={Therabody} alt="Therabody"/>
                            </div>
                        </div>
                     </div>

                     <div className="container2">
                        <div className="projectBox">
                            <div className="therabodyCont theraBox">
                                <img className="therabodyMobile" src={KeepPUP} alt="Keepup"/>
                            </div>
                        </div>
                        <div className="projectBox">
                            <p className="appTitle keepup">KEEPPUP</p>
                            <p className="appDesc">Fusce nec aliquet nibh. Nam vel facilisis lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id euismod arcu. Aenean ut arcu vel mauris commodo commodo. Phasellus vitae volutpat urna, ut vehicula nunc. Phasellus malesuada ligula in lacus posuere gravida.
                            <br></br><span className="appCaps">Made with:</span> Bleep Bleep Bloop<br></br><span className="appCaps">Check out the code:</span> CD Git_Repository
                            </p>
                        </div>
                     </div> 
                     <div className="pushDown">
                        <p className="education">WEB APPS</p>
                    </div>
                     <div className="container3">
                        <div className="projectBox webApp">
                            <div className="projectInfo">
                                <p className="projectTitle">MyCodeCard</p>
                                <p className="projectAbout">Website Design & Development</p>
                            </div>
                            {/* <div className="projectIMG" onClick={() => window.open("https://github.com/The-Gummy-Bears/CodeCards", "_blank")}>
                                <img className="image" src={CodeCard} alt="codecard"/>
                            </div> */}
                        </div>
                        <div className="projectBox webApp">
                            <div className="projectInfo">
                                <p className="projectTitle">Circle of Friends</p>
                                <p className="projectAbout">Website Design & Development</p>
                            </div>
                            {/* <div className="projectIMG" onClick={() => window.open("https://github.com/The-Real-Tardigrades/Contextual-Geolocation", "_blank")}>
                                <img className="image" src={Circle} alt="circle"/>
                            </div> */}
                        </div>
                        <div className="projectBox webApp">
                            <div className="projectInfo">
                                <p className="projectTitle">Doomsday Database</p>
                                <p className="projectAbout">Website Design & Development</p>
                            </div>
                            {/* <div className="projectIMG" onClick={() => window.open("https://github.com/Rocky-Road/project1", "_blank")}>
                                <img className="image" src={Doomsday} alt="doomsday"/>
                            </div> */}
                        </div>
                        <div className="container3">
                            <p className="education one">ARTICLES</p>
                            <div>
                                <div className="projectBox">
                                    <div className="oop" onClick={() => window.open("https://medium.com/@robertanthonycortez/an-overview-of-oop-494813c40039", "_blank")}></div>
                                    <div className="projectInfo">
                                        <p className="projectTitle">OOP</p>
                                        <p className="projectAbout">Intro to Object Oriented Programming</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>     

                        {/* <div className="projectBox">
                            <div className="projectIMG" onClick={() => window.open("https://github.com/rcortez1775/ReactkeepPUP", "_blank")}>
                                <img className="image" src={KeepPUP} alt="keepPUP"/>
                            </div>
                            <div className="projectInfo">
                                <p className="projectTitle">KeepPUP</p>
                                <p className="projectAbout">Mobile App Design & Development</p>
                            </div>
                        </div> */}
                    {/* <div className="container3">
                        <p className="education textSkills one">&emsp;&emsp;ARTICLES&emsp;&emsp;</p>
                        <div>
                            <div className="projectBox">
                                <div className="oop" onClick={() => window.open("https://medium.com/@robertanthonycortez/an-overview-of-oop-494813c40039", "_blank")}></div>
                                <div className="projectInfo">
                                    <p className="projectTitle">OOP</p>
                                    <p className="projectAbout">Intro to Object Oriented Programming</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Projects;