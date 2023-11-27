import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Images2 from '../components/images2'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar />
     
      <Images2 heading="About." text="This is MadhankumarRaja React Developer." />
      <AboutContent />
      <Footer />
      
    </div>
  )
}

export default About
