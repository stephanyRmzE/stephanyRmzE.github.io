import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/bundle";
import {useEffect, useState } from 'react'
import { collection, getDocs, query } from "firebase/firestore";
import {db} from '../firebase.config'
import '../styles/projects.css'
import Spinner from '../components/Spinner'

SwiperCore.use([Navigation, Pagination, Scrollbar]);

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
    <div className="projects-div" id="projects">


        <h2 className="projectsTitle"> Work</h2>



        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          style={{
                  "--swiper-pagination-color": "#fff",
                  "--swiper-navigation-color": "#fff",
                }} >
          {projects.map(({data, id}) => (

              <SwiperSlide key={data.index}>

                  <a href={data.url}>

                    <div
                  style={{
                    backgroundImage: `url(${data.images[0]})`,
                    borderRadius: '5px',
                  }}
                  className='swiperSlideDiv transition ease-in-out delay-150 hover:scale-105 duration-300'
                ></div>

                <p className="swiperSlideText">{data.name}</p>

                  </a>

              </SwiperSlide>

            ))}

        </Swiper>

    </div>

    )
)
}

export default Projects
