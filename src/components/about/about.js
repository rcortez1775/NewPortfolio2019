import { Component } from "react";
import React from 'react';
import './about.css';
import Me from '../../images/halo.png';


class about extends Component {
    render() {
        return(
            <div>
                <div className="container2">
                    <div className="box2 box2Intro">
                        <h1 className="aboutTitle">About Me</h1>
                        <h2 className="aboutSubTitle">I'm a Front-End developer based in Los Angeles, California</h2>
                        <span className="aboutSpan">I'm an energetic and ambitious developer with a focus on fun, attractive, user-friendly web applications. 
                            I thrive on challenges to enhance my own creativity, critical thinking and understanding of development 
                            through implementation and exploration.
                        </span>
                    </div>
                    <div className="box2 boxImage">
                        <img className="me" src={Me} alt="Me"/>
                    </div>
                </div>
                <main className="main">
                    <div>
                        <h3 className="myEdu">&emsp;&emsp;EDUCATION&emsp;&emsp;</h3>
                    </div>
                </main>
            </div>
        )
    }
}

export default about;
