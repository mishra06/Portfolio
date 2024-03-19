import React from 'react'
import './Certificates.css'
import { HiComputerDesktop } from "react-icons/hi2";

import js from '../assets/Screenshot 2024-03-18 133521.png'
import rt from '../assets/Screenshot 2024-03-18 133546.png'

const Certificates = () => {


  const certi = [
    {
        name: 'React.js',
        img: js
    },
    {
      name: 'JavaScript',
      img: rt,
    }
]
  return (
    <div className='certi_sec'>

      <div className="certif_hdr">
          <h1>My Certificates</h1>
      </div>

      <div className="certif_cont">
          <h2><span style={{padding:'10px'}}><HiComputerDesktop /></span>Technical Competence</h2>
          {
          certi.map((items,index)=>{
            return(
              <div className='cert_inner' key={index}>
                <p>{items.name}</p>
                <img src={items.img} alt=""  style={{height:'300px'}}/>
            </div>
            )
          })}
          
      </div>
      
      
    </div>
  )
}

export default Certificates
