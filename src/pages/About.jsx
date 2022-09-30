import React from 'react'
import '../styles/about.css'
import aboutPic from '../assets/about-pic.jpg'

function About() {
  return (
    <div className='aboutDiv'>
      <div className='imageDiv'>
        <img src={aboutPic} alt="" />
      </div>
      <div className='aboutText'>
        <h1 className='aboutTitle'>Hello there!  <br /> My name is Stephany Ramirez and I'm a software developer. </h1>
        <p className='aboutBody'>I am a mechatronics engineer. I have always love coding, the challenges it imposes and seeing the final product gives me a great feeling of accomplishment.
  That's the reason why I decided to do Le Wagon's Web Development bootcamp, and since the beginning I felt that I got what I was missing, I love doing things you cannot belief possible.</p>
      </div>
    </div>
  )
}

export default About
