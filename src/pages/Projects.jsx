import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import {useEffect, useState } from 'react'
import { collection, getDocs, query } from "firebase/firestore";
import {db} from '../firebase.config'
import '../styles/slider.css'
import Spinner from '../components/Spinner'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Projects() {

  const [projects, setprojects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchprojects = async () => {

        const projectsRef = collection(db, "proyectos");
        const q = query(
          projectsRef,
        );
        const querySnap = await getDocs(q);

        const projects = [];

        querySnap.forEach((doc) => {
          return projects.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setprojects(projects);
        setLoading(false)

    };

    fetchprojects();
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (projects.length === 0) {
    return <></>
  }

  return (

    projects && (
    <>
      <h1 className='projectsTitle'> Projects</h1>

      <div className="sliderRow">

          {projects.map(({data, id}) => (
            <div className="sliderColumn">
              <div className="sliderContainer">
                <Swiper slidesPerView={1} pagination={{ clickable: true }}>
                  {data.images.map((url,index) => (

                      <SwiperSlide key={index}>
                        <a href={data.url}>
                          <div
                        style={{
                          backgroundImage: `url(${data.images[index]})`,
                          borderRadius: '5px',
                        }}
                        className='swiperSlideDiv'
                      ></div>
                      <p className="swiperSlideText">{data.name}</p>
                        </a>
                      </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}

      </div>
    </>
    )
)
}

export default Projects