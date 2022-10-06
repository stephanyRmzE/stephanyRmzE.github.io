
import Slider from '../components/Slider'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import {useEffect, useState } from 'react'
import { collection, getDocs, query } from "firebase/firestore";
import {db} from '../firebase.config'
import '../styles/slider.css'

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
        setLoading(false);
    };

    fetchprojects();
  }, []);


  return (
    <>

      {loading ? (
        <></>
      ) : projects.length > 0 ? (
        <>
      <h1 className='projectsTitle'> Projects</h1>

      <div className="sliderRow">

          {projects.map(({data, id}) => (
            <div className="sliderColumn">
            <Slider key={id} projectData ={data}></Slider>
            </div>
          ))}

      </div>


    </>
  ): (
        <p>No Projects</p>
      )}
  </>
)
}

export default Projects
