import { Component } from "react";
import React from 'react';
import './projects.css';
// import Therabody from '../../images/therabody.png';
// import KeepPUP from '../../images/keepup.png';


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
                    <div class="slider__inner">
                        <div class="slider__contents"><i class="slider__image fa fa-codepen"></i>
                            <h2 class="slider__caption">Therabody</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                        <div class="slider__contents"><i class="slider__image fa fa-newspaper-o"></i>
                            <h2 class="slider__caption">newspaper-o</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                        <div class="slider__contents"><i class="slider__image fa fa-television"></i>
                            <h2 class="slider__caption">television</h2>
                            <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                        <div class="slider__contents"><i class="slider__image fa fa-diamond"></i>
                            <h2 class="slider__caption">diamond</h2>
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