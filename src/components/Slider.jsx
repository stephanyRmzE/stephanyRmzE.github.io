import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import '../styles/slider.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slider(props) {

  const project = props.projectData

  if (project.length === 0) {
    return <></>
  }
  return (

    project && (
      <>
        <div className="sliderContainer">
          <Swiper slidesPerView={1} pagination={{ clickable: true }}>
            {project.images.map((url,index) => (

                <SwiperSlide key={index}>
                  <a href={project.url}>
                    <div
                  style={{
                    backgroundImage: `url(${project.images[index]})`,
                    borderRadius: '5px',
                  }}
                  className='swiperSlideDiv'
                ></div>
                <p className="swiperSlideText">{project.name}</p>
                  </a>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>

  ))
}

export default Slider
