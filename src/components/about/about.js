import { Component } from "react";
import React from 'react';
import './about.css';
import Me from '../../images/halo.png';
import Rifle from '../../images/rifleExpert.png';


class about extends Component {
    render() {
        return(
            <div>
                <div className="container2">
                    <div className="box2 boxAbout">
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
                <div>
                <main className="main">
                    <div class="moby">
                        <h2 className="myEdu">EDUCATION</h2>
                        <p className="eduTitle">The Coding Bootcamp @ UC Irvine</p>
                        <p className="date">4.2018 - 7.2018</p>
                        <p className="description">whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off- then, I account it high time to get to sea as soon as I can.</p>
                        <p className="eduTitle">The Coding Bootcamp @ Sabio</p>
                        <p className="date">1.2018 - 2.2018</p>
                        <p className="description">drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off- then, I account it high time to get to sea as soon as I can.</p>
                        <p className="eduTitle">CodeAcademy & Udemy</p>
                        <p className="date">11.2016 - Current</p>
                        <p className="description">drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off- then, I account it high time to get to sea as soon as I can.</p>
                    </div>
                </main>
                <div className="container3">
                <div className="box2 rifleImage">
                        <img className="rifle" src={Rifle} alt="Rifle"/>
                    </div>
                <div className="box2 milBox">
                        <h1 className="milTitle">Military Service</h1>
                        <h2 className="aboutSubTitle">United States Marine Corps</h2>
                        <span className="aboutSpan">
                        In addition to maintaining log books, preparing reports and logging records, directives and correspondence for military aircraft and weaponry, I was trained in data processing military equipment. This allowed me to oversee and supervise maintenance administration functions, as well as set up, operate and maintain logistics hardware and systems.
                        </span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default about;
