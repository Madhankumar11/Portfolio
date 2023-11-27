import React from 'react'
import './image.css'
import portfolio from '../images/1.jpg'
import {Link} from 'react-router-dom'

const image = () => {
  return (
    <div className='hero'>
        <div className='mask'>
             <img className='into-img' src={portfolio} alt="portfolio" />
        </div>
        <div className="content">
            <p>Hi I am Madhankumar</p>
            <h1>React Developer</h1>
        
        
            <Link to='/Project' className='btn'>Projects</Link>
        
            <Link to='/Contact' className='btn btn-light'>Contact</Link>
        
            </div>
      
    </div>
  )
}

export default image
