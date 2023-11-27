import React from 'react'

import Navbar from '../components/Navbar'
import Images2 from '../components/images2'
import Footer from '../components/Footer'
import WorkCard from '../components/Workcard'


const Project = () => {
  return (
    <div>
      <Navbar />
      <Images2 heading="PROJECTS." text="Some of my Most recent Works" />
      <WorkCard />
      <Footer />
      
      
    </div>
  )
}

export default Project
