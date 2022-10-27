import React from 'react'
import '../styles/about.css'
import aboutPic from '../assets/about-pic.png'

function About() {
  return (
    <div className='aboutDiv'>
      <div className='imageDiv'>
        <img src={aboutPic} alt="" />
      </div>
      <div className='aboutText'>
        <h1 className='aboutTitle'> About Me </h1>
        <p className='aboutBody'>I have always love coding, the challenges it imposes and seeing the final product gives me a great feeling of accomplishment.
          After five years as Mechatronic Engineer I decided to refocus my skills and become a Web Developer through Le Wagon's Bootcamp in Barcelona.<br></br><br />
          I enjoy the more interactive part of coding, and doing things you cannot believe possible. I am a knowledge seeker and good at problem solving.
          I spend my free time reading, baking, and I love traveling and meeting people from differents cultures.
          </p>
      </div>
    </div>
  )
}

export default About
