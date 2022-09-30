
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import {useEffect, useState } from 'react'
import { collection, getDocs, query } from "firebase/firestore";
import {db} from '../firebase.config'
import Spinner from '../components/Spinner'
import '../styles/slider.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function HomePage() {

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
        setLoading(false);
    };

    fetchprojects();
  }, []);

  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <>
      <Banner></Banner>
      <h1 className='projectsTitle'> Projects</h1>

      <div className="sliderRow">

          {projects.map(({data, id}) => (
            <div className="sliderColumn">
            <Slider key={id} projectData ={data}></Slider>
            </div>
          ))}

      </div>


    </>
  )
}

export default HomePage
