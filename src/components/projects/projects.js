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
                        <p className="appDescription">The keepPUP app evolved from the idea of wanting a better way to track and share all my pet’s activities. With keepPUP, users can store when they walked or fed their pet and share that information with other users. Building the app was a lot of fun as it allowed me to really show my personality with design and UI.</p>
                        <p className="tech"><span className="boldText">Made with:</span> JavaScript, Node.js, Express, MySQL and Material-UI</p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="pup" src={Pup} alt="Pup" onClick={() => window.open("https://keeppup.herokuapp.com/", "_blank")}/>
                    </div>
                </div>

                <div className="projectContainer2">
                    <div className="box3 keepPUPBox">
                        <img className="codeCard" src={CodeCard} alt="Codecard" onClick={() => window.open("https://my-code-card.herokuapp.com/", "_blank")}/>
                    </div>

                    <div className="box3 keepPUPBox codecardBox">
                        <p className="appTitle">myCodeCard</p>
                        <p className="codeDescription">MyCodeCard is a MERN stack application that allows users to create a top level category card and dive further with populated information cards related to their parent category card. The idea came from the many hurdles I faced when learning to program. Documentation can be advanced to parse through for beginners so we set out to create a more simple and intuitive way to solve that problem.</p>
                        <p className="tech"><span className="boldText">Made with:</span> React.JS, MongoDB, Express, Node.js and Material-UI</p>
                    </div>
                </div>

                <div className="projectContainer">
                    <div className="box3 keepPUPBox">
                        <p className="appTitle circleFriends">Circle of Friends</p>
                        <p className="codeDescription"> Using the Google API to attain a users location, users are able to set a geo pin in their most visited locations and add friends names. When the user visits the geo pin in the future, a notification alerts the user of who they know.  This was a really fun project as it’s framework can be used in a multitude of settings.</p>
                        <p className="tech"><span className="boldText">Made with:</span>MySql, Express, Node.js, Javascript/jQuery and Materialize</p>
                    </div>

                    <div className="box3 keepPUPBox">
                        <img className="codeCard circle" src={Circle} alt="Circle" onClick={() => window.open("https://circle-of-friends.herokuapp.com/", "_blank")}/>
                    </div>

                </div>

            </div>
        )
    }
}

export default Projects;