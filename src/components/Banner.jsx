import '../styles/banner.css'
import React from "react"
import Wave from 'react-wavify'
import { SocialIcon } from "react-social-icons"
import profile from '../assets/profile_form.png'
import '../styles/profile.css'



function Banner() {

  let pauseStatus =false;

  return (
    <div className='container-banner' id="banner">
      <div>



          <div className='container-name-photo'>
            <div className="name-button-container">


            <div className='name-button-div'>
              <h1 className="name-style">
                Hello! <br /> I am <span className='my-name'>Stephany</span>, <br /> a software developer.
              </h1>

              <button className="btn-pink" >
                Contact Me
              </button>
            </div>
            </div>
            <div className="image-div">
            <img className='profile-image' src={profile} alt="Stephany's pic" />
            </div>
          </div>

    <div className='wave-container'>
        <div className="wave-pos-1">
          <Wave fill="#6e1f82"
            paused={pauseStatus}
            options={{
              height: 15,
              amplitude: 5,
              speed: 0.5,
              points: 4
            }} />
        </div>
        <div className="wave-pos-2">
          <Wave
            fill="#682a92"
            paused={pauseStatus}
            options={{
              height: 1,
              amplitude: 5,
              speed: 0.3,
              points: 5
            }}
            />
        </div>


        <div className="wave-pos-3">
          <Wave
            fill="#52007a"
            paused={pauseStatus}
            options={{
              height: 10,
              amplitude: 10,
              speed: 0.3,
              points: 3
            }}
            />
        </div>
        <div className="wave-pos-4">
          <Wave
            fill="#5e007a"
            paused={pauseStatus}
            options={{
              height: 40,
              amplitude: 10,
              speed: 0.3,
              points: 4
            }}
          />
        </div>

        <div className="wave-pos-5">
          <Wave
            fill="#6e1f82"
            paused={pauseStatus}
            options={{
              height: 50,
              amplitude: 15,
              speed: 0.4,
              points: 3
            }}
          />
        </div>
        <div className="wave-pos-6">
          <Wave
            fill="#52007a"
            paused={pauseStatus}
            options={{
              height: 40,
              amplitude: 20,
              speed: 0.3,
              points: 2
            }}
          />
        </div>

        <div className="wave-pos-7">
          <Wave
            fill="#682a92"
            paused={pauseStatus}
            options={{
              height: 70,
              amplitude: 5,
              speed: 0.3,
              points: 5
            }}
            />
        </div>

        <div className="wave-pos-8">
          <Wave
            fill="#5e007a"
            paused={pauseStatus}
            options={{
              height: 87,
              amplitude: 15,
              speed: 0.3,
              points: 3
            }}
          />
        </div>
        <div className="wave-pos-9">
          <Wave
            fill="#6e1f82"
            paused={pauseStatus}
            options={{
              height: 95,
              amplitude: 13,
              speed: 0.2,
              points: 3
            }}
          />
        </div>
        <div className="wave-pos-10">
          <Wave
            fill="#ffffff"
            paused={pauseStatus}
            options={{
              height: 130,
              amplitude: 12,
              speed: 0.2,
              points: 5
            }}
          />
        </div>
        </div>


        <div className="buttonCenter">
          <SocialIcon
            className= 'button-banner'
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="linkedin"
            url="https://www.linkedin.com/in/stephanyramireze/"
          />

          <SocialIcon
            className="button-banner"
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="github"
            url="https://github.com/stephanyRmzE"
          />


          <SocialIcon
            className="button-banner"
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="mailto"
            url="mailto:stephany.ramireze@gmail.com"
            />
      </div>

      </div>
    </div>
  )
}

export default Banner
