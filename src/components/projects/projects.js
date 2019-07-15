import { Component } from "react";
import React from 'react';
import './projects.css';
import Pup from '../../images/keepPUP.jpg';


class Projects extends Component {
    render() {  
        return(
            <div>
                <div className="projectContainer">
                    <div className="box3">
                        <p className="appTitle">keepPUP App</p>
                        <p className="appDescription">The keepPUP App allows users to keep up with their furry friends. Track when you feed and walk your dog with push notifications blah blah blah</p>
                    </div>

                    <div className="box3">
                        <img className="pup" src={Pup} alt="Pup"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;