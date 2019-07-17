import { Component } from "react";
import React from 'react';
import './projects.css';
import Pup from '../../images/keepPUP.jpg';
import CodeCard from '../../images/codecard.jpg';
import Circle from '../../images/circle.png';


class Projects extends Component {
    render() {  
        return(
            <div>
                <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle">keepPUP</p>
                        <p className="appDescription">The keepPUP app evolved from the idea of wanting a better way to track and share all my pet’s activities. Users can store when they walked or fed their pet and share that information with other users. Building the app was a lot of fun as it allowed me to really show my personality with design and UI.</p>
                        <p className="tech"><span className="boldText">Made with:</span> JavaScript, Node.js, Express, MySQL and Material-UI</p>
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
                        <p className="codeDescription">MyCodeCard is a MERN stack application that allowed users to create a top level category card and dive further with populated information cards related to their parent category. The idea came from the any hurdles I faced when learning to program. Documentation can be advanced to parse through for beginners so we set out to create a simpler and intuitive way to solve that problem.</p>
                        <p className="tech"><span className="boldText">Made with:</span> React.JS, MongoDB, Express, Node.js and Material-UI</p>
                    </div>
                </div>

                <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle">Circle of Friends</p>
                        <p className="codeDescription">myCodeCard is an app where users can store related data 
                        and information on subjects learned. blah blah blah blah blah.
                        <span className="boldText">Made with:</span> React.JS, MongoDB, Express, Node.js and Material-UI
                        </p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="codeCard" src={Circle} alt="Circle"/>
                    </div>

                </div>

            </div>
        )
    }
}

export default Projects;