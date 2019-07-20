import { Component } from "react";
import React from 'react';
import './contact.css';
import OOP from '../../images/oop.jpeg';


class Contact extends Component {
    render() {
        return(
            <div>
                <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle">Intro to OOP</p>
                        <p className="codeDescription">When I first became a developer, the term Object Oriented Programming was in almost every job posting and interview prep article.  To illustrate this programming paradigm, I used  the popular game Overwatch.</p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="codeCard circle" src={OOP} alt="OOP" onClick={() => window.open("https://medium.com/@robertanthonycortez/an-overview-of-oop-494813c40039", "_blank")}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact;