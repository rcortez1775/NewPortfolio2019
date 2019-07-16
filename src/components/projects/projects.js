import { Component } from "react";
import React from 'react';
import './projects.css';
import Pup from '../../images/keepPUP.jpg';
import CodeCard from '../../images/codecard.jpg';


class Projects extends Component {
    render() {  
        return(
            <div>
                <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle">keepPUP</p>
                        <p className="appDescription">The keepPUP App allows users to keep up with their furry friends. Track when you feed and walk your dog with push notifications blah blah blah</p>
                        <p className="appDescription"><span className="boldText">Made with:</span> JavaScript, Node.js, Express, MySQL and Material-UI</p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="pup" src={Pup} alt="Pup"/>
                    </div>
                </div>

                <div className="projectContainer2">
                    <div className="box3 keepPUPBox">
                        <img className="codeCard" src={CodeCard} alt="Codecard"/>
                    </div>

                    <div className="box3 keepPUPBox">
                        <p className="appTitle">myCodeCard</p>
                        <p className="codeDescription">myCodeCard is an app where users can store related data and information on subjects learned. blah blah blah blah blah</p>
                        <p className="appDescription"><span className="boldText">Made with:</span> React.JS, MongoDB, Express, Node.js and Material-UI</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects;