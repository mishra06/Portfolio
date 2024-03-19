import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import clndr from '../assets/clndr.png';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <h1 className='cont_hhh'>Contact</h1>
      <div className="contacts">
          <div className="email_sec">
            <div className="h22">
                <h2>Email:</h2>
            </div>
            <div className="inp_sec">
              <p>mishra.vibhakar7262@gmail.com</p>
              <button>copy</button>
            </div>
          </div>
          <div className="clend_sec">
            <div className="cld_h">
                <h2>Schedule Video Call With Me:</h2>
            </div>
            <div className="cld_img">
                <img src={clndr} alt="" />
            </div>
          </div>
          <div className="socialll">
              <div className="social_h">
                  <h2>Social</h2>
              </div>
              <div className="icns">
                  <VscGithub />
                  <IoLogoLinkedin />
                  <GrInstagram />
                  <FaTwitterSquare />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
