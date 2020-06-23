import { Component } from "react";
import React from 'react';
import './landingpage.css';
import App from '../../images/app.png';

class LandingPage extends Component {
    render() {
        return(
            <div className="body">
                <div className="mainIntro">
                    <div className="textIntro">
                        <p className="name">ROBERT CORTEZ</p>
                        <p className="intro">UNIQUE, SIMPLE AND MODERN</p>
                        {/* <hr className="hrLine"></hr> */}
                    </div>
                </div>
                <div className="main">
                    <div className="pushUP">
                        <p className="education">HIGHLIGHTS</p>
                        <hr className="hrLineBlack"></hr>
                    </div>
                    <div class="container">
                        <div className="cardBox mobileBox">
                            <div className="boxCont">
                                <hr className="boxHR"></hr>
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">FOUNDATION</p>
                                <hr className="boxHR"></hr>
                                <p className="description">The coding bootcamp at UC Irvine was an immersive 12-week program. The course covered Computer Science applied to Javascript, browser based technologies, Databases and Deployment and server side development. The program was filled with so many intellectually curious individuals with diverse tech backgrounds.</p>
                            </div>
                        </div>
                        <div className="cardBox mobileBox">
                            <div className="boxCont">
                            <hr className="boxHR"></hr>
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">LIBRARIES</p>
                                <hr className="boxHR"></hr>
                                <p className="description">The coding bootcamp at Sabio was a one month pre-work course that prepared students for an extensive 12 week course. The program highlighted the front-end and back-end technologies. I would have attended their 12 week program but found the curriculum at UC Irvine to be a bit more robust.</p>
                            </div>
                        </div>
                        <div className="cardBox mobileBox">
                            <div className="boxCont">
                            <hr className="boxHR"></hr>
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">BACKEND</p>
                                <hr className="boxHR"></hr>
                                <p className="description">Both CodeAcademy and Udemy were my first introduction into programming. Lessons covered ranged from browser based technologies to server-side development. What I enjoy from these two platforms is the ease of accessibility and materials covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;