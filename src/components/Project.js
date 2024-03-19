import React from 'react'
import pokemon from '../assets/pokemon.png'
import Apple from '../assets/apple.png'
import './Project.css'
import cart from '../assets/cart2.png'

const Project = () => {


  const proj = [
    {
        img : pokemon,
        Name : 'Pokemon-Project',
        type: 'Frontend',
        lang : 'Html || Css || Js',
        link : 'https://mishra06.github.io/Pokemon/',
        github : 'https://github.com/mishra06/Pokemon',

    },
    {
      img : Apple,
      Name : 'Apple India',
      type: 'Frontend',
      lang : 'HTML || CSS || JS',
      link : 'https://shivambansal96.github.io/TEAM-APPLE-GEEKATHON/iPhone_by_Vibhakar/geekathon%20apple/',
      github : 'https://github.com/Shivambansal96/TEAM-APPLE-GEEKATHON',

  },
  {
    img : cart,
    Name : 'Add to cart',
    type: 'Frontend',
    lang : 'React || Js ||Html || Css',
    link : 'https://mishra06.github.io/Pokemon/',
    github : 'https://github.com/mishra06/Pokemon',

},
]
  return (
    <div>
      <h1 className='cont_hhh'>Project</h1>
      <div className="proj_sec_cont">
        {
          proj.map((items,index)=>{
            return(
              <div className="proj_sec_cart">
                  <div className="img_sec">
                    <img src={items.img} alt="" />
                    <h3>{items.Name}</h3>
                    <p>{items.type}</p>
                    <p>{items.lang}</p>
                  </div>
                  <div className="btn_sec">
                    <button onClick={"items.link"}>Preview</button>
                    <button onClick={"items.github"}>Github</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project
