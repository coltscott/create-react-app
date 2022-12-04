import React, { Component } from 'react';
import './Columns.css';

  function Columns(props) {
    const emailOne = props.emailOne;
    const emailTwo = props.emailTwo;
    const major = props.major;
    return(
        <div class = "columns">
            <p class = "list">
                {emailOne}
                <br></br>
                {emailTwo}
            </p>
            <p class = "list"> 
                Objective
                <br></br>
                <br></br>
                Obtain a career in the field of {major}
            </p>

            <p class = "list"> 
                Education
                <br></br>
                <ul>
                    <li>Current student of {major} at Purdue University</li>
                    <li>Working towards a bachelors of science</li>
                    <li>Also working towards a minor in statistics</li>
                    <li>August 2021-December 2024</li>
                </ul>
            </p>
            <p class = "list"> “Web Weather” Application (OpenWeatherMaps API) <a href="https://coltscott.github.io" target="_blank">Weather App</a>
                <ul>
                    <li>Implemented an API to display the current temperature, condition, and a representative icon for a city location</li>
                    <li>Uses chart.js to display an interactive forecast graph</li>
                </ul>
            “MoreBlox” Minecraft Java Modding (Java Fabric API)
                <ul class> 
                    <li>Uses Minecraft’s file system as a layout to help me implement my own fabric API implementation</li>
                    <li>Designed textures and in-game interactions</li>
                </ul></p>
            
            
            <p class = "list"> Radial Technology
                <ul> 
                    <li>Worked with SmartSheets and created an RF gun checkout system</li>
                    <li>Organzied and fixed floor inventory</li>
            </ul></p>
        </div>
      
    )
  }

  export default Columns