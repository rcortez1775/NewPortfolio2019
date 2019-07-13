import { Component } from "react";
import React from 'react';
import './landingpage.css';


class LandingPage extends Component {
    render() {
        return(
            <div>
                <section className="hero">
                    <div className="hero-inner">
                        <h1>Robert Cortez</h1>
                        <h2>Developer + Gamer + Dog Lover</h2>
                        <div class="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </section>
                <main>
                    <div>
                        <h3 className="textSkills">&emsp;&emsp;SOME OF MY SKILLS&emsp;&emsp;</h3>
                    </div>
                    <div className="container">
                        <div className="box">
                            <div className="card">
                                <span className="boxTitle">FOUNDATION</span>
                                <br></br>
                                <span className="boxList">HTML(5)</span>
                                <br></br>
                                <span className="boxList">CSS(3)</span>
                                <br></br>
                                <span className="boxList">GIT</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="card">
                                <span className="boxTitle">LANGUAGES</span>
                                <br></br>
                                <span className="boxList">ES6 JAVASCRIPT</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="card">
                                <span className="boxTitle">LIBRARIES</span>
                                <br></br>
                                <span className="boxList">REACT</span>
                                <br></br>
                                <span className="boxList">jQUERY</span>
                                <br></br>
                                <span className="boxList">MATERIAL-UI</span>
                                <br></br>
                                <span className="boxList">BOOTSTRAP</span>
                            </div>
                        </div>
                        <div className="box">
                            <div className="card">
                                <span className="boxTitle">SERVER-SIDE</span>
                                <br></br>
                                <span className="boxList">NODE.JS</span>
                                <br></br>
                                <span className="boxList">HEROKU</span>
                                <br></br>
                                <span className="boxList">MYSQL</span>
                                <br></br>
                                <span className="boxList">MONGODB</span>
                                <br></br>
                                <span className="boxList">EXPRESS</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default LandingPage;