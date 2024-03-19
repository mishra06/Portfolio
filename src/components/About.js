import React from 'react'
import dev from '../assets/devv.png'
import fram from '../assets/frmwrk.png'
import mrkt from '../assets/markt.png'
import app from '../assets/appp.png'
import './About.css'

const About = () => {

  const focus = [
    {
        logo : dev,
        nm: 'Web Design & Development',
        para : 'Creating attractive, easy-to-use websites that work well for businesses and individuals online.'
    },
    {
      logo : app,
      nm : "Mobile Apps & Games",
      para : 'Creating and developing engaging mobile apps and games for iOS and Android devices.'
    },
    {
      logo : fram,
      nm : "Development Solutions",
      para : 'Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.'
    },
    {
      logo : mrkt,
      nm : "Marketing & SEO",
      para : 'Using SEO and marketing strategies to boost online visibility and promote products or services.'
    }
]
  return (
    <div>
      <h1 className='cont_hhh'>About Me</h1>

      <div className="about_main_sec">
        <div className="upper_sec">
          <div className="upper_sec_p">
                <p>
                  Hello there! 👋 My name is Vibhakar mishra and I'm from Madhubani Bihar. As a Frontend software developer, I specialize in creating visually appealing websites, apps and mobile app. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
                </p>
          </div>
        </div>

        {/* primary focus  */}

         <h1 className='xxxx'>Primary Focus</h1>

        <div className="primary">
          
            {
              focus.map((itm,index)=>{
                return(
                  <div className="focus_items" key={index}>
                    <div className="focus_logos"><img src={itm.logo} alt="" /></div>
                    <div className="focus_info">
                      <div className="focus_upper">{itm.nm}</div>
                      <div className="focus_para">{itm.para}</div>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
      
      
    </div>
  )
}

export default About
