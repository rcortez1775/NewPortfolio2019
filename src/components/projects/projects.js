import { Component } from "react";
import React from 'react';
import './projects.css';
// import Therabody from '../../images/therabody.png';
// import KeepPUP from '../../images/keepup.png';
import Phone from '../../images/smartphone.png';
import Comp from '../../images/computer.png';

class Projects extends Component {
    render() {
        return (
            <div className="body">
                <div className="conty">
                <div class="slider">
                    <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav" />
                    <input type="radio" name="slider" title="slide2" class="slider__nav" />
                    <input type="radio" name="slider" title="slide3" class="slider__nav" />
                    <input type="radio" name="slider" title="slide4" class="slider__nav" />
                    <input type="radio" name="slider" title="slide5" class="slider__nav" />
                    <div class="slider__inner">
                        <div class="slider__contents">
                            <img src={Phone} alt="smartPhone" className="projectIcon"/>
                            <h2 class="slider__caption">Therabody</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Phone} alt="smartPhone" className="projectIcon"/>
                            <h2 class="slider__caption">KeepPUP</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Comp} alt="Computer" className="projectIcon"/>
                            <h2 class="slider__caption">MyCodeCard</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Comp} alt="Computer" className="projectIcon"/>
                            <h2 class="slider__caption">Circle of Friends</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                        <div class="slider__contents">
                            <img src={Comp} alt="Computer" className="projectIcon"/>
                            <h2 class="slider__caption">DoomsDay Database</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Projects;