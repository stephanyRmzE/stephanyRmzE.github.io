import '../styles/banner.css'
import React, { Component } from "react"
import Wave from 'react-wavify'
import { SocialIcon } from "react-social-icons"
import profile from '../assets/profile.jpeg'
import '../styles/profile.css'



function Banner() {

  let pauseStatus =false;

  return (
    <div className='container-banner'>
      <div>
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
        </div>

        <div className='profile-container' >
          <h1 className="name-style">
            Hello! <br /> I am Stephany, <br /> a software developer.
          </h1>

              <svg id= 'svgContainer' viewBox='-10 -40 190 190' >
                <defs>
                  <pattern id="imgpattern" x="0" y="0" width="1" height="1">
                    <image width="182px" height="174px"
                      xlinkHref={profile} />
                  </pattern>
                </defs>
                <path fill="url(#imgpattern)" stroke= '#777'
                      d='M 157.5024 37.1184 Q 168.5376 45.144 168.5376 59.1888 Q 159.5088 102.3264 149.777 133.8632 Q 147.35 148.7946 135.7932 150.2392 Q 85.2319 151.6838 36.1152 151.6838 Q 23.1137 150.2392 18.7799 134.3485 Q 13.7296 121.6938 -3.7444 68.9598 Q -6.2407 51.3818 7.4889 40.5646 Q 33.6998 14.8736 58.6626 -6.7608 Q 84.8736 -28.3952 108.5883 -8.1129 z' >
                </path>
              </svg>


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
