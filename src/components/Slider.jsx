import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import {useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import homepage from '../assets/images/hobbyMate/homePage.png'
import explore from '../assets/images/marketPlace/explore.png'
import homePet from '../assets/images/petmate/Petmate_home.JPG'
import '../styles/slider.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slider() {
  const array = [
    {id:1, url: 'https://house-marketplace-sre.vercel.app/', image: explore},
    {id:2, url: 'https://petmate-stephanyrmze.herokuapp.com/', image: homePet}
  ]

  return (

      <div className="slider-container">
        <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          {array.map((data, id) => (

              <SwiperSlide key={id}>
                <a href={data.url}>
                <div className="sliderDiv" >
                  <img src={data.image} alt="" className="sliderImg" />
                </div>
                </a>
              </SwiperSlide>

          ))}
        </Swiper>
      </div>

  )
}

export default Slider
