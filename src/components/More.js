import React from 'react'
import pig from '../assets/pigletz.jpg'
import shy from '../assets/sha-beats.jpg'
import './More.css'

const More = () => {

  const MORE = [
    {
      imgss: pig,
      content :'Marketing & BizDev || Content Creator',
      name : "Pigletz",
      para: 'I create and manage the Pigletz communitys social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the communitys reach and impact through partnerships in the Web3 space.',
    },
    {
      imgss: shy,
      content :'Beat Making|| Sound Design',
      name : "Music Production",
      para: 'Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound.',
    }
  ]
  return (
      <div >
        <h1 className='hmore'>More</h1>
        <div className="more_section">
              {MORE.map((item,index)=>{
                return(
                  <div className="more_sec" key={index}>
                      <div className="pic_sec">
                        <img src={item.imgss} alt="" />
                      </div>
                      <div className="more_inf_sec">
                        <p>{item.content}</p>
                        <h3>{item.name}</h3>
                        <p>{item.para}</p>
                      </div>
                      <div className="more_btn_sec"></div>
                  </div>
                )
              })}
        </div>
      </div>
  )
}

export default More
