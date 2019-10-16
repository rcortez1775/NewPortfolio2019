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
                                <p className="projectAbout">Intro to Object Oriented Programming.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;