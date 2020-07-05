import { Component } from "react";
import React from 'react';
import './about.css';
import Military from '../../images/chevron.png';
import App from '../../images/app.png';


class about extends Component {
    render() {
        return(
            <div className="body">
                <div className="textBox">
                    <p className="text"><span className="firstcharacter">Hi</span> I’m Robert! A UI/UX Designer and Developer based in Los Angeles. I’m passionately curious about learning how people’s thought processes and feelings drive the decisions they make.
                    My goal as a designer & developer is to create meaningful and engaging experiences that are easily accessible and functional. To learn and test new concepts and ideas that will allow me to grow both personally and professionally.</p>
                </div>
                <div>
                    <hr className="blackLine"></hr>
                </div>
                <div className="main">
                    <div className="pushUP">
                        <p className="education">EDUCATION</p>
                    </div>
                    <div class="container">
                        <div className="cardBox mobileBox">
                            <div className="boxCont">
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">UCI CODING BOOTCAMP</p>
                                <p className="date">4.2018 - 7.2018</p>
                                <p className="description">The coding bootcamp at UC Irvine was an immersive 12-week program. The course covered Computer Science applied to Javascript, browser based technologies, Databases and Deployment and server side development. The program was filled with so many intellectually curious individuals with diverse tech backgrounds.</p>
                            </div>
                        </div>
                        <div className="cardBox mobileBox">
                            <div className="boxCont">
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">SABIO CODING BOOTCAMP</p>
                                <p className="date">1.2018 - 2.2018</p>
                                <p className="description">The coding bootcamp at Sabio was a one month pre-work course that prepared students for an extensive 12 week course. The program highlighted the front-end and back-end technologies. I would have attended their 12 week program but found the curriculum at UC Irvine to be a bit more robust.</p>
                            </div>
                        </div>
                        <div className="cardBox mobileBox">
                            <div className="boxCont">
                                <img className="robot" src={App} alt="chevron"/>
                                <p className="eduTitle">CODEACADEMY & UDEMY</p>
                                <p className="date">11.2016 - CURRENT</p>
                                <p className="description">Both CodeAcademy and Udemy were my first introduction into programming. Lessons covered ranged from browser based technologies to server-side development. What I enjoy from these two platforms is the ease of accessibility and materials covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="container3">
                        <p className="education one">MILITARY</p>
                        <div className="milService">
                            <div className="boxCont">
                                <img className="graduate" src={Military} alt="chevron"/>
                                <p className="eduTitle">U.S. MARINE CORPS</p>
                                <p className="date">8.2005 - 9.2009</p>
                                <p className="information">My Marine Corps career was focused on data processing military equipment while maintaining reports and correspondence for military aircraft weaponry. I oversaw and supervised administrative functions as well as set up, operated and maintained logistics hardware and software.</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default about;

