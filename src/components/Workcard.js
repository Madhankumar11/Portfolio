import React from 'react'
import './Workcard.css'
import pro from  "../images/dosa.jpg"
import portfolio from '../images/12.png'
import { NavLink } from 'react-router-dom'
import pro1 from '../images/3.jpg'


const Workcard = (props) => {
  
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img className='image' src={pro} alt="img" />
                <h2 className='project-title'>Food Delivary app</h2>
                <div className='pro-details'>
                    <p>This Is Madhankumar from Senchola Technology,Food delivery app is my first react project in Senchola texchnology,In this Project is used to order the food</p>
                    <div className='pro-btns'>
                        <NavLink to="https://madhankumar11.github.io/Foodapp/" className="btn">
                            View
                        </NavLink>
                        <NavLink to="https://github.com/Madhankumar11/Foodapp" className="btn">
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <img className='image' src={portfolio} alt="img" />
                <h2 className='project-title'>Madhan-Portfolio</h2>
                <div className='pro-details'>
                    <p>This Is Madhankumar from Senchola Technology,Madhan-Portfolio is my second react project in Senchola texchnology,In this Project is used to order the food</p>
                    <div className='pro-btns'>
                        <NavLink to="url.com" className="btn">
                            View
                        </NavLink>
                        <NavLink to="url.com" className="btn">
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <img className='image' src={pro1} alt="img" />
                <h2 className='project-title'>Upcomming Project</h2>
                <div className='pro-details'>
                    <p>This Is Madhankumar from Senchola Technology,Food delivery app is my first react project in Senchola texchnology,In this Project is used to order the food</p>
                    <div className='pro-btns'>
                        <NavLink to="url.com" className="btn">
                            View
                        </NavLink>
                        <NavLink to="url.com" className="btn">
                            Source
                        </NavLink>
                    </div>
                </div>
            </div>
            </div>   
             
    </div>
  )
}

export default Workcard
