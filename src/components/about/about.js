import { Component } from "react";
import React from 'react';
import './about.css';
import Rainbow from '../../images/rainbow.png';


class about extends Component {
    render() {
        return(
            <div className="body">
                <section className="hero">
                    <div className="hero-inner">
                        <img className="rainbow" src={Rainbow} alt="rainbow"/>
                        <p className="aboutTitle">Hello There!</p>
                        <p className="aboutSpan">Creatively curios me. </p>
                    </div>
                </section>
                    <main className="main">
                        <div class="">
                            <h2 className="education">EDUCATION</h2>
                            <p className="eduTitle">The Coding Bootcamp @ UC Irvine</p>
                            <p className="date">4.2018 - 7.2018</p>
                            <p className="description">The coding bootcamp at UC Irvine was an immersive 12-week program. The course covered Computer Science applied to Javascript, browser based technologies, Databases and Deployment and server side development. The program was filled with so many intellectually curious individuals with diverse tech backgrounds.</p>
                            <p className="eduTitle">The Coding Bootcamp @ Sabio</p>
                            <p className="date">1.2018 - 2.2018</p>
                            <p className="description">The coding bootcamp at Sabio was a one month pre-work course that prepared students for an extensive 12 week course. The program highlighted the front-end and back-end technologies. I would have attended their 12 week program but found the curriculum at UC Irvine to be a bit more robust.</p>
                            <p className="eduTitle">CodeAcademy & Udemy</p>
                            <p className="date">11.2016 - Current</p>
                            <p className="description">Both CodeAcademy and Udemy were my first introduction into programming. Lessons covered ranged from browser based technologies to server-side development. What I enjoy from these two platforms is the ease of accessibility and materials covered.</p>
                        </div>
                    </main>
                    <div className="container3">
                        <div className="box2 milBox">
                            <p className="milTitle">Military service</p>
                            <span className="aboutSubTitle">U.S. Marine Corps</span>
                            <br/>
                            <span className="aboutSpan">
                            My Marine Corps career was focused on data processing military equipment while maintaining reports and correspondence for military aircraft weaponry. I oversaw and supervised administrative functions as well as set up, operated and maintained logistics hardware and software.
                            </span>
                        </div>
                    </div>
            </div>
        )
    }
}

export default about;
