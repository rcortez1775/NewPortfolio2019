import { Component } from "react";
import React from 'react';
import './projects.css';
import Rubik from '../../images/rubik.png';
import Mobile from '../../images/mobile.png';
import Monitor from '../../images/monitor.png';


class Projects extends Component {
    render() {  
        return(
            <div className="body">
                <section className="hero">
                    <div className="hero-inner">
                        <img className="rainbow" src={Rubik} alt="rubik"/>
                        <p className="aboutTitle">Design & Dev</p>
                        <p className="aboutSpan">"You don't have to show them. They'll see it!"</p>
                    </div>
                </section>
                <div className="main">
                    <div className="pushUP">
                        <p className="education textSkills">&emsp;&emsp;APPS&emsp;&emsp;</p>
                    </div>
                    <div className="container"> 
                        <div className="projectBox" id="projectHover">
                            <div className="projectIMG">

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
                            <div className="projectIMG">

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
                            <div className="projectIMG">

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
                            <div className="projectIMG">

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
                </div>

                {/* <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle">keepPUP</p>
                        <p className="appDescription">The keepPUP app evolved from the idea of wanting a better way to track and share all my pet’s activities. With keepPUP, users can store when they walked or fed their pet and share that information with other users. Building the app was a lot of fun as it allowed me to really show my personality with design and UI.</p>
                        <p className="tech"><span className="boldText">Made with:</span> MySQL, Express, ReactJS and NodeJS</p>
                        <p className="tech"><span className="boldText">Check out the Code:</span> <span className="click" onClick={() => window.open("https://github.com/rcortez1775/ReactkeepPUP", "_blank")}> "Beam me up, Scotty"</span></p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="pup" src={Pup} alt="Pup" onClick={() => window.open("https://react-keeppup.herokuapp.com/", "_blank")}/>
                    </div>
                </div>

                <div className="projectContainer2">
                    <div className="box3 keepPUPBox">
                        <img className="codeCard" src={CodeCard} alt="Codecard" onClick={() => window.open("https://my-code-card.herokuapp.com/", "_blank")}/>
                    </div>

                    <div className="box3 keepPUPBox codecardBox">
                        <p className="appTitle">myCodeCard</p>
                        <p className="codeDescription">MyCodeCard is a MERN stack application that allows users to create a top level category card and dive further with populated information cards related to their parent category card. The idea came from the many hurdles I faced when learning to program. Documentation can be advanced to parse through for beginners so we set out to create a more simple and intuitive way to solve that problem.</p>
                        <p className="tech"><span className="boldText">Made with:</span> React.JS, MongoDB, Express, Node.js and Material-UI</p>
                        <p className="tech"><span className="boldText">Check out the Code:</span> <span className="click" onClick={() => window.open("https://github.com/The-Gummy-Bears/CodeCards", "_blank")}> "Beam me up, Scotty"</span></p>
                    </div>
                </div>

                <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle circleFriends">Circle of Friends</p>
                        <p className="codeDescription">Using the Google API to attain a users location, users are able to set a geo pin in their most visited locations and add friends names. When the user visits the geo pin in the future, a notification alerts the user of who they know.  This was a really fun project as it’s framework can be used in a multitude of settings.</p>
                        <p className="tech"><span className="boldText">Made with:</span> MySql, Express, Node.js, Javascript/jQuery and Materialize</p>
                        <p className="tech"><span className="boldText">Check out the Code:</span> <span className="click" onClick={() => window.open("https://github.com/The-Real-Tardigrades/Contextual-Geolocation", "_blank")}> "Beam me up, Scotty"</span></p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="codeCard circle" src={Circle} alt="Circle" onClick={() => window.open("https://circle-of-friends.herokuapp.com/", "_blank")}/>
                    </div>
                </div>

                <div className="projectContainer doomsday">
                    <div className="box3 keepPUPBox">
                        <img className="codeCard circle" src={Doom} alt="Doomsday" onClick={() => window.open("https://rcortez1775.github.io/project1/", "_blank")}/>
                    </div>
                    <div className="box3 keepPUPBox">
                        <p className="appTitle circleFriends">Doomsday Database</p>
                        <p className="codeDescription">Doomsday Database was my first project. The assignment was to utilize 2 API’s to request information from those servers and integrate the received data into something fun. Users enter a year to see where in the world meteors have hit.</p>
                        <p className="tech"><span className="boldText">Made with:</span> JavaScript and Google API</p>
                        <p className="tech"><span className="boldText">Check out the Code:</span> <span className="click" onClick={() => window.open("https://github.com/rcortez1775/project1", "_blank")}> "Beam me up, Scotty"</span></p>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default Projects;