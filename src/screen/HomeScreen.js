import React from 'react'
import './HomeScreen.css'
import Side from '../components/Side'
import Screen2 from './Screen2'



const HomeScreen = () => {
  return (
    <div style={{width:'100%', display:'flex',justifyContent:'center', alignItems:'center', backgroundColor:'#23cffb'}}>
         <div className="containers" style={{display:'flex', width:'85%', gap:'3rem', marginTop:'2rem'}}>
            <div className="side_sec" style={{width:'25%'}} ><Side/></div>
            <div className="main_sec" style={{width:'70%', border:'2px solid gray', borderRadius:'20px',backgroundColor:'#21859f'}}><Screen2/></div>
         </div>
          
    </div>
  )
}

export default HomeScreen
