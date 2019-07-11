import { Component } from "react";
import React from 'react';
import './about.css';
import Me from '../../images/me.png';


class about extends Component {
    render() {
        return(
            <div>
                <div className="container2">
                    <div className="box2 about">
                        <h1 className="aboutTitle">About Me</h1>
                        <h2 className="aboutSubTitle">I'm a Front-End developer based in Los Angeles, California</h2>
                        <span className="aboutSpan">I'm an energetic and ambitious developer with a focus on fun, attractive, user-friendly web applications. 
                            I thrive on challenges to enhance my own creativity, critical thinking and understanding of development 
                            through implementation and exploration.
                        </span>
                    </div>
                    <div className="box2">
                        <img className="me" src={Me} alt="Me"/>
                    </div>
                </div>

                {/* <section class="hero2">
                    <div class="hero-inner2">
                        <div className="aboutBox">
                            <h1 className="aboutTitle">About Me</h1>
                            <h2>I'm a Front-End developer based in Los Angeles, California</h2>
                            <span className="aboutSpan">I'm an energetic and ambitious developer with a focus on fun, attractive, user-friendly web applications. 
                                I thrive on challenges to enhance my own creativity, critical thinking and understanding of development 
                                through implementation and exploration.
                            </span>
                        </div>
                    </div>
                </section>
                <main className="main">
            
                </main>
                <img className="me" src={Me} alt="Me"/> */}
            </div>
        )
    }
}

export default about;
