import { Component } from "react";
import React from 'react';
import './landingpage.css';
import Foundation from '../../images/foundation.png';
import Library from '../../images/library.png';
import Server from '../../images/database.png';




class LandingPage extends Component {
    render() {
        return(
            <div className="body">
                <section className="hero">
                    <div className="hero-inner">
                        <p className="name">&lt;Robert Cortez/&gt;</p>
                        <p className="intro">Developer + Gamer + Dog Lover</p>
                    </div>
                </section>
                <main className="main">
                    <div className="pushUP">
                        <p className="textSkills">&emsp;&emsp;SOME OF MY SKILLS&emsp;&emsp;</p>
                    </div>
                    <div className="container">
                        <div class="cardBox">
                            <div class="iconBox">
                                <img className="skillsIcon" src={Foundation} alt="Foundation"/>
                                <p className="boxTitle">FOUNDATION</p>
                            </div>  
                            <div className="boxCont">
                                <span className="boxList">ES6 JAVASCRIPT</span>
                                <br></br>
                                <span className="boxList">NIGHTMARE</span>
                                <br></br>
                                <span className="boxList">HTML(5)</span>
                                <br></br>
                                <span className="boxList">CSS(3)</span>
                                <br></br>
                                <span className="boxList">JEST</span>
                                <br></br>
                                <span className="boxList">GIT</span>
                            </div>      
                        </div>

                        <div class="cardBox">
                            <div class="iconBox">
                                <img className="skillsIcon" src={Library} alt="Library"/>
                                <p className="boxTitle">LIBRARIES</p>
                            </div>
                            <div class="boxCont">
                                <span className="boxList">MATERIAL-UI</span>
                                <br></br>
                                <span className="boxList">BOOTSTRAP</span>
                                <br></br>
                                <span className="boxList">REACTJS</span>
                                <br></br>
                                <span className="boxList">jQUERY</span>
                            </div>
                        </div>

                        <div class="cardBox">
                            <div class="iconBox">
                                <img className="skillsIcon" src={Server} alt="Foundation"/>
                                <p className="boxTitle">SERVER-SIDE</p>
                            </div>
                            <div className="boxCont">
                                <span className="boxList">MONGODB</span>
                                <br></br>
                                <span className="boxList">EXPRESS</span>
                                <br></br>
                                <span className="boxList">NODEJS</span>
                                <br></br>
                                <span className="boxList">HEROKU</span>
                                <br></br>
                                <span className="boxList">MYSQL</span>
                            </div>  
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default LandingPage;