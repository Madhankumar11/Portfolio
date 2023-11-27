import React from 'react'
import "./Footer.css"
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome  size={20} style={{
                        color:"#fff",marginRight:"2rem"
                    }} />
                    <div>
                        <p>421 ADB nager,Sevoor</p>
                        <p>Tamilnadu</p>
                    </div>   
                </div>
                <div className='phone'>
                    <h4> <FaPhone  size={20} style={{
                        color:"#fff",marginRight:"2rem"
                    }} />
                    
                   9789613985</h4>
                   
                    </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk  size={20} style={{
                        color:"#fff",marginRight:"2rem"
                    }} />
                    madhankumar6@gmail.com</h4>
                    
                    </div>
                    </div>
                    <div className='right'>
                        <h4>
                            Madhankumar
                        </h4>
                        <p>
                            This is Madhankumar working in senchola Technology in The domain of Front End Technology
                        </p>
                        <div className='social'>
                            <FaFacebook
                               size={30}
                               style={{
                                color:"#fff",
                                marginRight:"2rem"}}
                                />
                                <FaLinkedin
                                  size={30}
                                  style={{
                                    color:"#fff",
                                    marginRight:"2rem"}}
                                />
                            
                        </div>
                    </div>
            </div>
        </div>
      
    
  )
}

export default Footer
