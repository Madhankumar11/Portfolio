import React from 'react'
import "./Workcard.css"
import WorkCarddetails from './WorkCarddetails'
import Workcard from './Workcard'

const Work = () => {
  return (
    <div>
       <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {WorkCarddetails.map((val,ind)=>{
                return(
                    <Workcard
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      view={val.view}
                      />
                     
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Work
