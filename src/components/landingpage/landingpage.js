import { Component } from "react";
import React from 'react';
import './landingpage.css';


class LandingPage extends Component {
    render() {
        return(
            <div className="body">
                <section className="hero">
                    <div className="hero-inner">
                        <p className="name">Robert Cortez</p>
                        <p className="intro">Developer + Gamer + Dog Lover</p>
                        <div class="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </section>
                <main>
                    <div>
                        <p className="textSkills">&emsp;&emsp;SOME OF MY SKILLS&emsp;&emsp;</p>
                    </div>
                    <div className="container">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <p className="boxTitle">FOUNDATION</p>
                                </div>  
                                <div class="flip-card-back">
                                    <div className="pushDwn">
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
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front two">
                                    <p className="boxTitle">LIBRARIES</p>
                                </div>
                                <div class="flip-card-back two">
                                    <div className="pushDwn">
                                        <span className="boxList">MATERIAL-UI</span>
                                        <br></br>
                                        <span className="boxList">BOOTSTRAP</span>
                                        <br></br>
                                        <span className="boxList">REACTJS</span>
                                        <br></br>
                                        <span className="boxList">jQUERY</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front three">
                                    <p className="boxTitle">SERVER-SIDE</p>
                                </div>
                                <div class="flip-card-back three">
                                    <div className="pushDwn">
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
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default LandingPage;