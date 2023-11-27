import "./AboutContent.css"
import React from 'react'
import {Link} from "react-router-dom"

import React2 from '../images/41.jpg'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>This is Madhankumar</h1>
            <p>
                I am A React Front-end Developer,Working in Senchola Technology
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                
                    <div className="img-stack top">
                    <img src={React2} className="img" alt="true"/>
                    </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
