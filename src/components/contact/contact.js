import { Component } from "react";
import React from 'react';
import './contact.css';
import Creative from '../../images/creativity.png';


class Contact extends Component {
    render() {
        return(
            <div className="body">
                <section className="hero">
                    <div className="hero-inner">
                        <img className="rainbow" src={Creative} alt="Creative"/>
                        <p className="aboutTitle">Pencil n Paper</p>
                        <p className="aboutSpan">"If I waited till I felt like writing, I'd never write at all."</p>
                    </div>
                </section>
                <div className="main">
                    <div className="pushUP">
                        <p className="education textSkills">&emsp;&emsp;ARTICLES&emsp;&emsp;</p>
                    </div>
                    <div className="container">
                        <div className="projectBox" id="projectHover">
                            <div className="oop" onClick={() => window.open("https://medium.com/@robertanthonycortez/an-overview-of-oop-494813c40039", "_blank")}>

                            </div>
                            <div className="projectInfo">
                                <p className="projectTitle">OOP</p>
                                <p className="projectAbout">An Intro into Object Oriented Programming.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle">Intro to OOP</p>
                        <p className="codeDescription">When I first became a developer, the term Object Oriented Programming was in almost every job posting and interview prep article.  To illustrate this programming paradigm, I used  the popular game Overwatch.</p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="codeCard circle" src={OOP} alt="OOP" onClick={() => window.open("https://medium.com/@robertanthonycortez/an-overview-of-oop-494813c40039", "_blank")}/>
                    </div>

                </div> */}
            </div>
        )
    }
}

export default Contact;