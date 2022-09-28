import '../styles/banner.css'
import React, { Component } from "react"
import Wave from 'react-wavify'
import { SocialIcon } from "react-social-icons"



function Banner() {

  let pauseStatus =false;

  return (
    <div className='container-banner'>
      <div>
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
              height: 90,
              amplitude: 20,
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
              height: 120,
              amplitude: 15,
              speed: 0.2,
              points: 3
            }}
          />
        </div>


        <div className='profile-container' >
          <h1 className="name-style">
            Hello, I am Stephany and I'm here <br /> to make your ideas a reality.
          </h1>

        </div>


        <div className="button-center">
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
