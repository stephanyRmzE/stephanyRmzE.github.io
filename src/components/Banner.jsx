import '../styles/banner.css'
import React, { Component } from "react"
import Wave from 'react-wavify'
import { SocialIcon } from "react-social-icons"
import profile from '../assets/images/profile.jpeg'



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
            <div className='profile-image'>
              <svg viewBox='-7 0 175 135' height='200px' width= '200px'>
                <defs>
                  <pattern id="imgpattern" x="0" y="0" width="1" height="1">
                    <image width="180px" height="172px"
                      xlinkHref={profile} />
                  </pattern>
                </defs>
                <path fill="url(#imgpattern)" stroke= '#777'
                      d='M 157 37 Q 168 45 168 59 Q 159 102 149.2992 133.4362 Q 146.88 148.32 135.36 149.76 Q 84.96 151.2 36 151.2 Q 23.04 149.76 18.72 133.92 Q 13.6858 121.3056 -3.7325 68.7398 Q -6.2208 51.2179 7.465 40.4352 Q 33.5923 14.8262 58.4755 -6.7392 Q 84.6029 -28.3046 108.2419 -8.087 z' >
                </path>
              </svg>
            </div>
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
