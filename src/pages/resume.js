import React from 'react';
import Columns from './Columns';
import './resume.css';
import logo from './me.jpeg';

function Resume() {
  return(
    <div class = "title">
        <s id = "name">Colton Scott</s>
        <br></br>
        <br></br>
        <br></br>
        Student of Computer Science
        <br></br>
        <a class="subtitle">
        10170 Bradbury Drive, Indianapolis, IN 46231
        <br></br>
        317-832-5904
        </a>
        <br></br>
        <br></br>
        <br></br>
        <img src={logo} alt="Logo" />
        <Columns emailOne = "coltonscott0@yahoo.com" emailTwo = "scottct@purdue.edu" major = "Computer Science"/>
    </div>
    
  )
}

export default Resume;