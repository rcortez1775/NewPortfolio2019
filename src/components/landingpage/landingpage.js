import { Component } from "react";
import React from 'react';
import './landingpage.css';
import App from '../../images/app.png';
import Git from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Gmail from '../../images/email.png';

class LandingPage extends Component {
    render() {
        return(
            <div className="body">
                <div className="mainIntro">
                    <div className="textIntro">
                        <p className="name">ROBERT CORTEZ</p>
                        <p className="intro">DEVELOPER + VETERAN</p>
                    </div>
                </div>
                <div className="main">
                    <div className="pushUP">
                        <p className="education">HIGHLIGHTS</p>
                        <p className="ideas">IDEAS THAT LEAD TO NEW ACTIONS</p>
                    </div>
                    <div className="container">
                        <div className="cardBox highlightBox">
                            <div className="boxCont">
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">FOUNDATION</p>
                                <p className="description">AWS INTERNET OF THINGS<br></br>ES6 JAVASCRIPT<br></br>HTML(5)<br></br>CSS(3)<br></br>GIT</p>
                            </div>
                        </div>
                        <div className="cardBox highlightBox">
                            <div className="boxCont">
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">LIBRARIES</p>
                                <p className="description">MATERIAL-UI<br></br>BOOTSTRAP<br></br>REACT<br></br>jQuery<br></br></p>
                            </div>
                        </div>
                        <div className="cardBox highlightBox">
                            <div className="boxCont">
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">SERVER-SIDE</p>
                                <p className="description">MONGODB<br></br>EXPRESS<br></br>NODE.JS<br></br>HEROKU<br></br>MYSQL<br></br></p>
                            </div>
                        </div>
                        <div>
                            <img className="icon" src={Git} alt="Git" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/>  
                            <img className="icon" src={Linkedin} alt="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
                            <img className="icon" src={Gmail} alt="Gmail" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;