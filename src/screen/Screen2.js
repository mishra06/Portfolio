import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Screen2 = () => {
  return (
    <div style={{display:'flex',flexDirection:'column' }}> 
        <div style={{display:'flex', justifyContent:'flex-end'}}>
        <div className="navbar" style={{height:'8vh', width:'50%', borderRadius:'0px 20px 0px 20px'}}><Navbar/></div>
        </div>
        <div className="pages" style={{height:'auto'}}><Outlet/></div>
    </div>
  )
}

export default Screen2
