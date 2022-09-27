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
          <Wave fill="#F172A1"
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
            fill="rgb(172,46,149)"
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
            fill="#B39BC8"
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
            fill="#E64398"
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
            fill="rgb(161,194,209)"
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
            fill="rgb(172,46,149"
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
            fill="#B39BC8"
            paused={pauseStatus}
            options={{
              height: 75,
              amplitude: 20,
              speed: 0.3,
              points: 3
            }}
          />
        </div>
        <div className="wave-pos-8">
          <Wave
            fill="#E64398"
            paused={pauseStatus}
            options={{
              height: 120,
              amplitude: 15,
              speed: 0.2,
              points: 3
            }}
          />
        </div>

        <h1 className="name-style">
          Stephany Ramirez
        </h1>

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
