import React from 'react'
import avt from '../assets/mishra.jpeg'
import { IoHourglassOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Side = () => {

  const arr = [
    {
        logo : <IoHourglassOutline />,
        Main : "AGE",
        res: '23 year old',
    },
    {
      logo : <IoLocationSharp />,
      Main : "LOCATION",
      res: 'Bihar , Madhubani',
    },
    {
      logo : <FaUser />,
      Main : "PERSONALITY TYPE",
      res: 'Developer',
    },

];
  return (
    <div>
        <div className="side_infolist" style={{
          height:'85vh',
           width:'16vw', 
          //  border:'1px solid red',
           display:'flex',
           flexDirection:'column',
           justifyContent:'center',
           alignItems:'center',
           backgroundColor:'#21839c',
           borderRadius:'15px',
           marginLeft:'5rem'
          }}>
            <img  style={{height:'150px', borderRadius:'25px', marginTop:'1rem'}} src={avt} alt="" />
            <h2>Vibhakar Mishra</h2>
            <input type="text"  style={{borderRadius:'15px', padding:'3px', backgroundColor:'#215868',border:'none'}}/>
            <hr />
            {
              arr.map((ele,index)=>{
                return(

                  <div className="adds" key={index} 
                  style={{
                    display:'flex',
                    justifyContent:'center',
                    width:'80%',
                    height:'5rem',
                    alignItems:'center',
                    gap:'1rem',
                    // border:'1px solid black'
                  }}>
                      <div className="iconss" style={{width:'30%', backgroundColor:'black',borderRadius:'15px', height:'3.2rem', textAlign:'center', display:'flex', justifyContent:'center',alignItems:'center'}}>
                          <div style={{fontSize:'1.5rem', color:'yellow'}}>{ele.logo}</div>
                      </div>
                      <div className="ags info" 
                      style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'flex-start',
                        fontSize:'13px',
                        fontWeight:'600',
                        width:'80%'
                      }}>
                        <span>{ele.Main}</span>
                        <span>{ele.res}</span>
                      </div>
                  </div>
                )
              })
            }

            <div className="social" style={{
              display:'flex',
              width:'60%',
              justifyContent:'space-around',
              height:'2rem',
              marginTop:'1rem'
            }}>
              <span><FaGithub /></span>
              <span><FaLinkedin /></span>
              <span><FaInstagram /></span>
              <span><FaTwitter /></span>
            </div>
            
        </div>
    </div>
  )
}

export default Side
