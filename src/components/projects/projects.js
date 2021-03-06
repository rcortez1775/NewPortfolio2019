import { Component } from "react";
import React from 'react';
import './projects.css';
import Therabody from '../../images/therabody.png';
import KeepPUP from '../../images/keepup.png';
import Phone from '../../images/smartphone.png';
import Comp from '../../images/computer.png';
import CodeCard from '../../images/codecard.png';
import Circle from '../../images/circle.png';
import Doom from '../../images/doomsday.png';

class Projects extends Component {
    render() {
        return (
            <div className="body">
                <div className="conty">
                <div class="slider">
                    <input type="radio" name="slider" title="slide1" class="slider__nav" />
                    <input type="radio" name="slider" title="slide2" class="slider__nav" />
                    <input type="radio" name="slider" title="slide3" class="slider__nav" />
                    <input type="radio" name="slider" title="slide4" class="slider__nav" />
                    <input type="radio" name="slider" title="slide5" class="slider__nav" />
                    <div class="slider__inner">
                        <div class="slider__contents">
                            <img src={Phone} alt="smartPhone" className="projectIcon"/>
                            <h2 class="slider__caption">Therabody</h2>
                            <img src={Therabody} alt="therabody" className="projectPres"/>
                            <p class="slider__txt">The Therabody app was my first intro into design, development and launch. <br></br><span className="blackOut">Made with:</span> DynamoDB, Express, ReactJS and NodeJS</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Phone} alt="smartPhone" className="projectIcon"/>
                            <h2 class="slider__caption">KeepPUP</h2>
                            <img src={KeepPUP} alt="keepup" className="projectPres"/>
                            <p class="slider__txt">With keepPUP, users can store and share all of their pet's activities with other users.<br></br><span className="blackOut">Made with:</span> MySQL, Express, ReactJS and NodeJS</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Comp} alt="Computer" className="projectIcon"/>
                            <h2 class="slider__caption">MyCodeCard</h2>
                            <img src={CodeCard} alt="CodeCard" className="projectComp"/>
                            <p class="slider__txt">MyCodeCard was our class final that allowed users categorize and organize all their notes.<br></br><span className="blackOut">Made with:</span> MongoDB, Express, ReactJS and NodeJS</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Comp} alt="Computer" className="projectIcon"/>
                            <h2 class="slider__caption">Circle of Friends</h2>
                            <img src={Circle} alt="CircleofFriends" className="projectComp"/>
                            <p class="slider__txt">Using Geotags, Circle of Friends was a class project where a user receives alerts of who they know based upon geo tags. <br></br><span className="blackOut">Made with:</span> MySQL, Javascript, HTML, CSS</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Comp} alt="Computer" className="projectIcon"/>
                            <h2 class="slider__caption">DoomsDay Database</h2>
                            <img src={Doom} alt="doomsday" className="projectComp"/>
                            <p class="slider__txt">DoomsdayDB used the NASA API to search a desired year and present markers on a map of where meteors have struck. <br></br><span className="blackOut">Made with:</span> Javascript, AJAX, HTML and CSS</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Projects;